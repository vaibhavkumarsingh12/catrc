import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, CheckCircle, Filter, Shuffle, Calendar, Sparkles } from 'lucide-react'
import { readingTestData, getTextsByDifficulty, getRandomTextByDifficulty, getDifficultyLevels } from '../data/readingTestData'
import { dailyTestManager } from '../services/dailyTestManager'

const ReadingTest = () => {
  const [isReading, setIsReading] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [testComplete, setTestComplete] = useState(false)
  const [wpm, setWpm] = useState(0)
  const [comprehensionScore, setComprehensionScore] = useState(0)
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy')
  const [availableTexts, setAvailableTexts] = useState([])
  const [selectedText, setSelectedText] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [dailyTests, setDailyTests] = useState([])
  const [showDailyTests, setShowDailyTests] = useState(false)
  const [loadingDailyTests, setLoadingDailyTests] = useState(false)
  const [testMode, setTestMode] = useState('regular') // 'regular' or 'daily'

  // Initialize available texts based on difficulty
  useEffect(() => {
    const texts = getTextsByDifficulty(selectedDifficulty)
    setAvailableTexts(texts)
    if (texts.length > 0) {
      setSelectedText(texts[0])
    }
  }, [selectedDifficulty])

  // Initialize with first text
  useEffect(() => {
    if (readingTestData.length > 0) {
      setSelectedText(readingTestData[0])
      setAvailableTexts(getTextsByDifficulty('easy'))
    }
  }, [])

  // Load daily tests
  useEffect(() => {
    loadDailyTests()
  }, [])

  useEffect(() => {
    let interval
    if (isReading && !testComplete) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isReading, testComplete])

  const loadDailyTests = async () => {
    setLoadingDailyTests(true)
    try {
      const tests = await dailyTestManager.getTodaysDailyTests()
      setDailyTests(tests)
    } catch (error) {
      console.error('Error loading daily tests:', error)
    } finally {
      setLoadingDailyTests(false)
    }
  }

  const startTest = () => {
    setIsReading(true)
    setTestComplete(false)
    setTimeElapsed(0)
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResults(false)
  }

  const finishReading = () => {
    setIsReading(false)
    setTestComplete(true)
    calculateWPM()
  }

  const calculateWPM = () => {
    const words = selectedText.text.split(' ').length
    const minutes = timeElapsed / 60
    const calculatedWPM = Math.round(words / minutes)
    setWpm(calculatedWPM)
    
    // Save to localStorage
    const testResult = {
      date: new Date().toISOString(),
      wpm: calculatedWPM,
      timeElapsed,
      textTitle: selectedText.title,
      difficulty: selectedText.difficulty,
      comprehension: comprehensionScore,
      testMode: testMode,
      isDaily: selectedText.isDaily || false
    }
    
    const existingResults = JSON.parse(localStorage.getItem('readingResults') || '[]')
    existingResults.push(testResult)
    localStorage.setItem('readingResults', JSON.stringify(existingResults))
  }

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty)
    resetTest()
  }

  const selectRandomText = () => {
    const randomText = getRandomTextByDifficulty(selectedDifficulty)
    setSelectedText(randomText)
    setTestMode('regular')
    resetTest()
  }

  const selectDailyTest = async () => {
    try {
      const dailyTest = await dailyTestManager.getRandomDailyTest(selectedDifficulty)
      if (dailyTest) {
        setSelectedText(dailyTest)
        setTestMode('daily')
        resetTest()
      }
    } catch (error) {
      console.error('Error selecting daily test:', error)
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'easy-difficulty'
      case 'moderate': return 'moderate-difficulty'
      case 'hard': return 'hard-difficulty'
      default: return 'easy-difficulty'
    }
  }

  const resetTest = () => {
    setIsReading(false)
    setTestComplete(false)
    setTimeElapsed(0)
    setWpm(0)
    setComprehensionScore(0)
    setCurrentQuestion(0)
    setUserAnswers([])
    setShowResults(false)
  }

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = answerIndex
    setUserAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < selectedText.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      finishComprehensionTest()
    }
  }

  const finishComprehensionTest = () => {
    let correct = 0
    selectedText.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        correct++
      }
    })
    const score = Math.round((correct / selectedText.questions.length) * 100)
    setComprehensionScore(score)
    setShowResults(true)
    
    // Update the saved result with comprehension score
    const results = JSON.parse(localStorage.getItem('readingResults') || '[]')
    if (results.length > 0) {
      results[results.length - 1].comprehension = score
      localStorage.setItem('readingResults', JSON.stringify(results))
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getWPMFeedback = (wpm, difficulty) => {
    const ranges = {
      easy: { excellent: 250, good: 200, average: 150 },
      moderate: { excellent: 300, good: 250, average: 200 },
      hard: { excellent: 350, good: 300, average: 250 }
    }
    
    const range = ranges[difficulty.toLowerCase()] || ranges.easy
    
    if (wpm >= range.excellent) return { level: 'excellent', color: '#4CAF50' }
    if (wpm >= range.good) return { level: 'good', color: '#2196F3' }
    if (wpm >= range.average) return { level: 'average', color: '#FF9800' }
    return { level: 'needs improvement', color: '#F44336' }
  }

  if (!selectedText) {
    return <div className="loading">Loading reading test...</div>
  }

  return (
    <div className="reading-test">
      <div className="test-header">
        <h1>Reading Speed Test</h1>
        <div className="test-controls">
          <div className="difficulty-selector">
            <Filter size={20} />
            <span>Difficulty:</span>
            {getDifficultyLevels().map(difficulty => (
              <button 
                key={difficulty}
                className={`difficulty-btn ${getDifficultyColor(difficulty)} ${selectedDifficulty === difficulty ? 'active' : ''}`}
                onClick={() => handleDifficultyChange(difficulty)}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="test-mode-controls">
            <button 
              className="action-btn random-btn" 
              onClick={selectRandomText}
              title="Select Random Text"
            >
              <Shuffle size={20} />
              Random
            </button>
            
            <button 
              className="action-btn daily-btn" 
              onClick={selectDailyTest}
              disabled={loadingDailyTests}
              title="Today's Daily Test"
            >
              <Calendar size={20} />
              {loadingDailyTests ? 'Loading...' : 'Daily Test'}
            </button>
          </div>
        </div>
      </div>

      {!testComplete && !showResults && (
        <div className="test-setup">
          <div className="text-selection">
            <h3>Selected Text:</h3>
            <div className="text-info">
              <span className={`difficulty-badge ${getDifficultyColor(selectedText.difficulty)}`}>
                {selectedText.difficulty}
              </span>
              <span className="text-title">{selectedText.title}</span>
              {selectedText.isDaily && (
                <span className="daily-badge">
                  <Sparkles size={16} />
                  Daily Test
                </span>
              )}
              <span className="text-stats">
                ~{selectedText.text.split(' ').length} words | Target: {selectedText.estimatedWPM} WPM
              </span>
            </div>
          </div>

          <div className="reading-area">
            <div className="timer">
              <span>Time: {formatTime(timeElapsed)}</span>
              {isReading && <span className="reading-indicator">Reading...</span>}
            </div>
            
            <div className="text-content">
              <p>{selectedText.text}</p>
            </div>
            
            <div className="reading-controls">
              {!isReading ? (
                <button className="start-btn" onClick={startTest}>
                  <Play size={20} />
                  Start Reading
                </button>
              ) : (
                <button className="finish-btn" onClick={finishReading}>
                  <CheckCircle size={20} />
                  Finish Reading
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {testComplete && !showResults && selectedText.questions && (
        <div className="comprehension-test">
          <div className="question-header">
            <h3>Comprehension Test</h3>
            <p>Question {currentQuestion + 1} of {selectedText.questions.length}</p>
          </div>
          
          <div className="question-content">
            <h4>{selectedText.questions[currentQuestion].question}</h4>
            <div className="options">
              {selectedText.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>
          
          <div className="question-controls">
            <button 
              className="next-btn" 
              onClick={nextQuestion}
              disabled={userAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === selectedText.questions.length - 1 ? 'Finish Test' : 'Next Question'}
            </button>
          </div>
        </div>
      )}

      {showResults && (
        <div className="test-results">
          <h2>Test Results</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-value" style={{ color: getWPMFeedback(wpm, selectedText.difficulty).color }}>
                {wpm}
              </div>
              <div className="result-label">Words Per Minute</div>
              <div className="result-feedback">
                {getWPMFeedback(wpm, selectedText.difficulty).level}
              </div>
            </div>
            
            <div className="result-card">
              <div className="result-value">{comprehensionScore}%</div>
              <div className="result-label">Comprehension</div>
              <div className="result-feedback">
                {comprehensionScore >= 80 ? 'Excellent' : comprehensionScore >= 60 ? 'Good' : 'Needs Improvement'}
              </div>
            </div>
            
            <div className="result-card">
              <div className="result-value">{formatTime(timeElapsed)}</div>
              <div className="result-label">Reading Time</div>
              <div className="result-feedback">
                {selectedText.text.split(' ').length} words
              </div>
            </div>
          </div>
          
          <div className="test-summary">
            <h3>Test Summary</h3>
            <p><strong>Text:</strong> {selectedText.title}</p>
            <p><strong>Difficulty:</strong> <span className={`difficulty-badge ${getDifficultyColor(selectedText.difficulty)}`}>{selectedText.difficulty}</span></p>
            <p><strong>Mode:</strong> {testMode === 'daily' ? 'Daily Test' : 'Regular Test'}</p>
            {selectedText.isDaily && <p><strong>Generated:</strong> {selectedText.generated ? 'AI Generated' : 'Curated Content'}</p>}
          </div>
          
          <div className="results-actions">
            <button className="action-btn" onClick={resetTest}>
              <RotateCcw size={20} />
              Take Another Test
            </button>
            <button className="action-btn daily-btn" onClick={selectDailyTest}>
              <Calendar size={20} />
              Try Daily Test
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReadingTest
