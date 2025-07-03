import { useState, useEffect } from 'react'
import { Clock, CheckCircle, XCircle, RotateCcw, BookOpen } from 'lucide-react'

const Practice = () => {
  const [currentPassage, setCurrentPassage] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [score, setScore] = useState(0)

  const passages = [
    {
      id: 1,
      title: "The Evolution of Artificial Intelligence",
      difficulty: "Medium",
      timeLimit: 10, // minutes
      text: `Artificial Intelligence (AI) has evolved from a theoretical concept to a practical technology that permeates nearly every aspect of modern life. The journey began in the 1950s when computer scientists like Alan Turing and John McCarthy laid the groundwork for what would become one of the most transformative technologies of the 21st century.

The early years of AI research were marked by ambitious goals and subsequent disappointments, leading to periods known as "AI winters" when funding and interest waned. However, the field experienced a renaissance in the 1980s with the development of expert systems, and again in the 2010s with the breakthrough in deep learning technologies.

Today's AI systems demonstrate capabilities that were once thought to be exclusively human: they can recognize speech and images, translate languages, play complex games, and even generate creative content. Machine learning algorithms, particularly deep neural networks, have enabled these advances by allowing computers to learn from vast amounts of data without explicit programming.

The impact of AI extends far beyond technology companies. Healthcare professionals use AI to diagnose diseases more accurately, financial institutions employ it to detect fraud, and autonomous vehicles promise to revolutionize transportation. However, these advances also raise important questions about privacy, employment, and the ethical implications of increasingly intelligent machines.

As we look to the future, AI is poised to become even more integrated into our daily lives. The development of artificial general intelligence (AGI) – machines that can understand, learn, and apply knowledge across a wide range of tasks like humans – remains a significant challenge. While some experts predict AGI within decades, others argue it may take much longer or may not be achievable at all.

The key to successful AI development lies in addressing current limitations while ensuring that these powerful technologies are developed responsibly. This includes creating AI systems that are transparent, fair, and aligned with human values, as well as preparing society for the changes that AI will inevitably bring.`,
      questions: [
        {
          question: "According to the passage, what characterized the early years of AI research?",
          options: [
            "Consistent progress and steady funding",
            "Ambitious goals followed by disappointments",
            "Focus on practical applications",
            "Collaboration between different industries"
          ],
          correct: 1,
          explanation: "The passage states that 'The early years of AI research were marked by ambitious goals and subsequent disappointments, leading to periods known as AI winters.'"
        },
        {
          question: "What enabled the recent advances in AI capabilities?",
          options: [
            "Expert systems developed in the 1980s",
            "Increased government funding",
            "Machine learning algorithms, particularly deep neural networks",
            "Collaboration with healthcare professionals"
          ],
          correct: 2,
          explanation: "The passage mentions that 'Machine learning algorithms, particularly deep neural networks, have enabled these advances by allowing computers to learn from vast amounts of data.'"
        },
        {
          question: "What is artificial general intelligence (AGI)?",
          options: [
            "AI systems that can recognize speech and images",
            "Machines that can understand, learn, and apply knowledge across a wide range of tasks like humans",
            "AI used in healthcare and finance",
            "The first generation of AI systems"
          ],
          correct: 1,
          explanation: "The passage defines AGI as 'machines that can understand, learn, and apply knowledge across a wide range of tasks like humans.'"
        },
        {
          question: "What does the passage suggest about the timeline for achieving AGI?",
          options: [
            "It will definitely be achieved within decades",
            "It's impossible to achieve",
            "Experts have differing opinions about when or if it will be achieved",
            "It has already been achieved"
          ],
          correct: 2,
          explanation: "The passage states that 'some experts predict AGI within decades, others argue it may take much longer or may not be achievable at all.'"
        },
        {
          question: "According to the passage, what is key to successful AI development?",
          options: [
            "Faster processing speeds",
            "More data collection",
            "Addressing limitations while ensuring responsible development",
            "Focus on commercial applications"
          ],
          correct: 2,
          explanation: "The passage concludes that 'The key to successful AI development lies in addressing current limitations while ensuring that these powerful technologies are developed responsibly.'"
        }
      ]
    },
    {
      id: 2,
      title: "Climate Change and Ocean Acidification",
      difficulty: "Hard",
      timeLimit: 12,
      text: `Ocean acidification, often referred to as the "other CO2 problem," represents one of the most significant yet underrecognized consequences of anthropogenic climate change. As atmospheric carbon dioxide levels continue to rise due to human activities, approximately 30% of this CO2 is absorbed by the world's oceans, leading to a chemical reaction that fundamentally alters seawater chemistry.

When CO2 dissolves in seawater, it forms carbonic acid, which subsequently releases hydrogen ions, thereby increasing the acidity of the ocean. Since the Industrial Revolution, ocean pH has dropped by approximately 0.1 units, representing a 30% increase in acidity. While this may seem modest, the logarithmic nature of the pH scale means this change is actually quite substantial.

The implications of ocean acidification extend far beyond simple chemistry. Marine organisms, particularly those that build shells or skeletons from calcium carbonate—such as corals, mollusks, and certain plankton—face significant challenges. As ocean acidity increases, it becomes increasingly difficult for these organisms to extract carbonate ions from seawater to build and maintain their calcium carbonate structures. In extreme cases, existing shells and skeletons may even begin to dissolve.

Coral reefs, which support approximately 25% of all marine species despite covering less than 1% of the ocean floor, are particularly vulnerable. The combination of ocean acidification and rising sea temperatures creates a double threat that has already led to widespread coral bleaching events. These ecosystems, which provide crucial services including coastal protection, fisheries support, and tourism revenue, face an uncertain future.

The economic implications are equally troubling. The global shellfish industry, valued at billions of dollars annually, is already experiencing impacts from ocean acidification. Pacific Northwest oyster farms have reported significant losses due to acidified waters, and similar problems are emerging in other regions. Commercial fisheries that depend on acid-sensitive species may face substantial disruptions as ocean chemistry continues to change.

Research into potential solutions is ongoing, but the scale of the problem presents significant challenges. Some scientists are investigating the possibility of marine geoengineering approaches, such as adding alkaline substances to seawater to counteract acidification. However, these interventions carry their own risks and uncertainties, and most experts agree that the most effective approach is to address the root cause by reducing CO2 emissions.

The interconnected nature of ocean systems means that acidification effects in one region can have cascading impacts across the globe. Arctic waters, which are naturally more susceptible to acidification due to their lower temperatures and unique chemistry, are experiencing particularly rapid changes. These changes could affect the entire Arctic food web, from microscopic plankton to large marine mammals.`,
      questions: [
        {
          question: "What percentage of atmospheric CO2 is absorbed by the oceans?",
          options: ["10%", "20%", "30%", "40%"],
          correct: 2,
          explanation: "The passage states that 'approximately 30% of this CO2 is absorbed by the world's oceans.'"
        },
        {
          question: "How much has ocean pH dropped since the Industrial Revolution?",
          options: ["0.05 units", "0.1 units", "0.2 units", "0.3 units"],
          correct: 1,
          explanation: "The passage mentions that 'ocean pH has dropped by approximately 0.1 units since the Industrial Revolution.'"
        },
        {
          question: "Why are coral reefs particularly vulnerable to ocean acidification?",
          options: [
            "They face only acidification as a threat",
            "They cover most of the ocean floor",
            "They face both acidification and rising sea temperatures",
            "They don't support many marine species"
          ],
          correct: 2,
          explanation: "The passage explains that 'The combination of ocean acidification and rising sea temperatures creates a double threat.'"
        },
        {
          question: "What is the primary challenge for marine organisms that build calcium carbonate structures?",
          options: [
            "Increased water temperature",
            "Difficulty extracting carbonate ions as acidity increases",
            "Lack of food sources",
            "Pollution in the water"
          ],
          correct: 1,
          explanation: "The passage states that 'As ocean acidity increases, it becomes increasingly difficult for these organisms to extract carbonate ions from seawater to build and maintain their calcium carbonate structures.'"
        },
        {
          question: "According to the passage, what do most experts agree is the most effective approach to addressing ocean acidification?",
          options: [
            "Marine geoengineering",
            "Adding alkaline substances to seawater",
            "Reducing CO2 emissions",
            "Protecting coral reefs"
          ],
          correct: 2,
          explanation: "The passage concludes that 'most experts agree that the most effective approach is to address the root cause by reducing CO2 emissions.'"
        }
      ]
    },
    {
      id: 3,
      title: "The Psychology of Decision Making",
      difficulty: "Easy",
      timeLimit: 8,
      text: `Human decision-making is far more complex and flawed than we typically realize. Traditional economic theory assumes that people make rational choices by carefully weighing costs and benefits, but decades of psychological research have revealed that our decisions are influenced by numerous cognitive biases and mental shortcuts, known as heuristics.

One of the most significant discoveries in decision-making research is the concept of bounded rationality, introduced by Herbert Simon. This theory suggests that rather than seeking optimal solutions, people typically seek solutions that are "good enough" – a process Simon termed "satisficing." This approach makes sense given our limited cognitive resources and the time constraints we face in daily life.

Cognitive biases play a crucial role in shaping our decisions. The availability heuristic, for example, leads us to overestimate the likelihood of events that are easily recalled, often because they are recent or emotionally significant. This is why people might overestimate the danger of airplane crashes (which receive extensive media coverage) while underestimating the risk of car accidents (which are more common but less newsworthy).

Another important bias is confirmation bias, which causes us to seek out information that confirms our existing beliefs while ignoring contradictory evidence. This bias can lead to poor decision-making in everything from personal relationships to business strategies. It's particularly problematic in today's information-rich environment, where we can easily find sources that support virtually any viewpoint.

The framing effect demonstrates how the way information is presented can dramatically influence our choices. The same information can lead to different decisions depending on whether it's framed in terms of gains or losses. For instance, a medical treatment described as having a "90% success rate" is more appealing than one with a "10% failure rate," even though these statements are mathematically equivalent.

Loss aversion, another fundamental bias, explains why people typically feel the pain of losing something more acutely than the pleasure of gaining something of equal value. This asymmetry in how we perceive gains and losses can lead to overly conservative decision-making and resistance to change, even when change would be beneficial.

Understanding these psychological principles can help us make better decisions. Techniques such as considering alternative perspectives, seeking diverse sources of information, and systematically evaluating options can help counteract our natural biases. However, it's important to recognize that these biases exist for good evolutionary reasons – they often lead to quick, adequate decisions in situations where extensive analysis would be impractical or impossible.`,
      questions: [
        {
          question: "What is 'satisficing' according to Herbert Simon?",
          options: [
            "Seeking optimal solutions to problems",
            "Seeking solutions that are 'good enough'",
            "Avoiding decision-making entirely",
            "Making decisions based on emotions"
          ],
          correct: 1,
          explanation: "The passage explains that satisficing means 'seeking solutions that are good enough' rather than optimal solutions."
        },
        {
          question: "What does the availability heuristic cause people to do?",
          options: [
            "Underestimate all risks",
            "Overestimate the likelihood of easily recalled events",
            "Make optimal decisions",
            "Ignore recent information"
          ],
          correct: 1,
          explanation: "The passage states that 'The availability heuristic leads us to overestimate the likelihood of events that are easily recalled.'"
        },
        {
          question: "How does confirmation bias affect decision-making?",
          options: [
            "It helps us make better decisions",
            "It causes us to seek information that confirms existing beliefs",
            "It makes us more objective",
            "It has no effect on decision-making"
          ],
          correct: 1,
          explanation: "The passage describes confirmation bias as causing 'us to seek out information that confirms our existing beliefs while ignoring contradictory evidence.'"
        },
        {
          question: "What does loss aversion explain?",
          options: [
            "Why people enjoy taking risks",
            "Why people feel the pain of losing more acutely than the pleasure of gaining",
            "Why people make optimal decisions",
            "Why people ignore losses"
          ],
          correct: 1,
          explanation: "The passage explains that loss aversion describes why 'people typically feel the pain of losing something more acutely than the pleasure of gaining something of equal value.'"
        }
      ]
    }
  ]

  const startTimer = (minutes) => {
    setTimeRemaining(minutes * 60)
    setIsActive(true)
  }

  const resetPractice = () => {
    setSelectedAnswers({})
    setShowResults(false)
    setTimeRemaining(null)
    setIsActive(false)
    setScore(0)
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }))
  }

  const submitAnswers = () => {
    const passage = passages[currentPassage]
    let correctCount = 0
    
    passage.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctCount++
      }
    })
    
    setScore(correctCount)
    setShowResults(true)
    setIsActive(false)
    
    // Save practice result
    const practiceResult = {
      date: new Date().toISOString(),
      passageTitle: passage.title,
      score: correctCount,
      totalQuestions: passage.questions.length,
      timeSpent: passage.timeLimit * 60 - (timeRemaining || 0)
    }
    
    const existingPractice = JSON.parse(localStorage.getItem('practiceResults') || '[]')
    existingPractice.push(practiceResult)
    localStorage.setItem('practiceResults', JSON.stringify(existingPractice))
  }
  // Timer effect
  useEffect(() => {
    let interval = null
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining => timeRemaining - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      submitAnswers()
    }
    return () => clearInterval(interval)
  }, [isActive, timeRemaining])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'green'
      case 'medium': return 'orange'
      case 'hard': return 'red'
      default: return 'gray'
    }
  }

  const currentPassageData = passages[currentPassage]

  return (
    <div className="practice-container">
      <div className="practice-header">
        <h1>Reading Comprehension Practice</h1>
        <p>Practice with exam-style RC passages</p>
      </div>

      <div className="passage-selection">
        <h2>Select a Passage</h2>
        <div className="passages-grid">
          {passages.map((passage, index) => (
            <div
              key={passage.id}
              className={`passage-card ${index === currentPassage ? 'selected' : ''}`}
              onClick={() => {
                setCurrentPassage(index)
                resetPractice()
              }}
            >
              <h3>{passage.title}</h3>
              <div className="passage-meta">
                <span className={`difficulty ${getDifficultyColor(passage.difficulty)}`}>
                  {passage.difficulty}
                </span>
                <span className="time-limit">
                  <Clock className="time-icon" />
                  {passage.timeLimit} min
                </span>
                <span className="question-count">
                  {passage.questions.length} questions
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="practice-area">
        {!isActive && !showResults && (
          <div className="practice-start">
            <h2>{currentPassageData.title}</h2>
            <div className="passage-info">
              <div className="info-item">
                <span className="label">Difficulty:</span>
                <span className={`value ${getDifficultyColor(currentPassageData.difficulty)}`}>
                  {currentPassageData.difficulty}
                </span>
              </div>
              <div className="info-item">
                <span className="label">Time Limit:</span>
                <span className="value">{currentPassageData.timeLimit} minutes</span>
              </div>
              <div className="info-item">
                <span className="label">Questions:</span>
                <span className="value">{currentPassageData.questions.length}</span>
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => startTimer(currentPassageData.timeLimit)}
            >
              <BookOpen className="btn-icon" />
              Start Practice
            </button>
          </div>
        )}

        {isActive && !showResults && (
          <div className="practice-active">
            <div className="practice-timer">
              <Clock className="timer-icon" />
              <span className="time-display">{formatTime(timeRemaining)}</span>
            </div>
            
            <div className="passage-content">
              <h2>{currentPassageData.title}</h2>
              <div className="passage-text">
                {currentPassageData.text}
              </div>
            </div>

            <div className="questions-section">
              <h3>Questions</h3>
              {currentPassageData.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="question-container">
                  <div className="question-header">
                    <span className="question-number">Question {questionIndex + 1}</span>
                  </div>
                  <div className="question-text">
                    {question.question}
                  </div>
                  <div className="options">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`option ${selectedAnswers[questionIndex] === optionIndex ? 'selected' : ''}`}
                        onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="submit-section">
              <button
                className="btn btn-primary"
                onClick={submitAnswers}
                disabled={Object.keys(selectedAnswers).length !== currentPassageData.questions.length}
              >
                Submit Answers
              </button>
            </div>
          </div>
        )}

        {showResults && (
          <div className="practice-results">
            <div className="results-header">
              <h2>Practice Results</h2>
              <div className="score-display">
                <span className="score">
                  {score} / {currentPassageData.questions.length}
                </span>
                <span className="percentage">
                  ({Math.round((score / currentPassageData.questions.length) * 100)}%)
                </span>
              </div>
            </div>

            <div className="detailed-results">
              {currentPassageData.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index]
                const isCorrect = userAnswer === question.correct
                
                return (
                  <div key={index} className="result-item">
                    <div className="result-header">
                      <span className="question-number">Question {index + 1}</span>
                      <span className={`result-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? <CheckCircle /> : <XCircle />}
                      </span>
                    </div>
                    <div className="question-text">{question.question}</div>
                    <div className="answer-comparison">
                      <div className="user-answer">
                        <span className="label">Your Answer:</span>
                        <span className={`answer ${isCorrect ? 'correct' : 'incorrect'}`}>
                          {userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="correct-answer">
                          <span className="label">Correct Answer:</span>
                          <span className="answer correct">
                            {question.options[question.correct]}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="explanation">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="results-actions">
              <button className="btn btn-primary" onClick={resetPractice}>
                <RotateCcw className="btn-icon" />
                Practice Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Practice
