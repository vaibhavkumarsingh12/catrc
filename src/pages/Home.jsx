import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Timer, TrendingUp, BookOpen, PenTool, Target, Award, BarChart3, Calendar, Sparkles, Database } from 'lucide-react'
import { dailyTestManager } from '../services/dailyTestManager'
import { getTestStats } from '../data/readingTestData'

const Home = () => {
  const [dailyStats, setDailyStats] = useState(null)
  const [testStats, setTestStats] = useState(null)
  const [userStats, setUserStats] = useState(null)
  const [loadingDaily, setLoadingDaily] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      // Load daily test stats
      const dailyTestStats = await dailyTestManager.getDailyTestStats()
      setDailyStats(dailyTestStats)
      
      // Load overall test stats
      const overallStats = getTestStats()
      setTestStats(overallStats)
      
      // Load user stats from localStorage
      const results = JSON.parse(localStorage.getItem('readingResults') || '[]')
      if (results.length > 0) {
        const avgWPM = Math.round(results.reduce((sum, result) => sum + result.wpm, 0) / results.length)
        const avgComprehension = Math.round(results.reduce((sum, result) => sum + (result.comprehension || 0), 0) / results.length)
        const testsCompleted = results.length
        const dailyTests = results.filter(r => r.isDaily).length
        
        setUserStats({
          avgWPM,
          avgComprehension,
          testsCompleted,
          dailyTests
        })
      }
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoadingDaily(false)
    }
  }

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Your Reading Speed
            <span className="hero-subtitle">for Competitive Exams</span>
          </h1>
          <p className="hero-description">
            Boost your reading comprehension and speed with our comprehensive training program. 
            Perfect for competitive exams like CAT, GMAT, GRE, and more.
          </p>
          <div className="hero-buttons">
            <Link to="/test" className="btn btn-primary">
              <Timer className="btn-icon" />
              Start Speed Test
            </Link>
            <Link to="/techniques" className="btn btn-secondary">
              <BookOpen className="btn-icon" />
              Learn Techniques
            </Link>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-card">
            <Target className="stat-icon" />
            <div className="stat-content">
              <h3>{userStats?.avgWPM || 250}+</h3>
              <p>{userStats ? 'Your Avg WPM' : 'Target WPM'}</p>
            </div>
          </div>
          <div className="stat-card">
            <Award className="stat-icon" />
            <div className="stat-content">
              <h3>{userStats?.avgComprehension || 95}%</h3>
              <p>{userStats ? 'Your Comprehension' : 'Success Rate'}</p>
            </div>
          </div>
          <div className="stat-card">
            <BarChart3 className="stat-icon" />
            <div className="stat-content">
              <h3>{testStats?.total || 20}+</h3>
              <p>Reading Tests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Tests Section */}
      <div className="daily-tests-section">
        <div className="section-header">
          <h2>
            <Calendar className="section-icon" />
            Today's Daily Tests
          </h2>
          <p>Fresh AI-generated content updated daily</p>
        </div>
        
        {loadingDaily ? (
          <div className="loading-card">
            <div className="spinner"></div>
            <p>Loading today's tests...</p>
          </div>
        ) : (
          <div className="daily-stats-grid">
            {dailyStats && (
              <>
                <div className="daily-stat-card easy-difficulty">
                  <h3>Easy Level</h3>
                  <div className="stat-value">{dailyStats.easy}</div>
                  <p>Tests Available</p>
                </div>
                <div className="daily-stat-card moderate-difficulty">
                  <h3>Moderate Level</h3>
                  <div className="stat-value">{dailyStats.moderate}</div>
                  <p>Tests Available</p>
                </div>
                <div className="daily-stat-card hard-difficulty">
                  <h3>Hard Level</h3>
                  <div className="stat-value">{dailyStats.hard}</div>
                  <p>Tests Available</p>
                </div>
                <div className="daily-stat-card api-status">
                  <Sparkles className="stat-icon-small" />
                  <h3>AI Generated</h3>
                  <div className="stat-value">{dailyStats.generated}</div>
                  <p>Fresh Content</p>
                </div>
              </>
            )}
          </div>
        )}
        
        <div className="daily-actions">
          <Link to="/test" className="btn btn-primary">
            <Calendar className="btn-icon" />
            Try Daily Test
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Timer />
            </div>
            <h3>Speed Testing</h3>
            <p>Accurate WPM measurement with comprehension tracking</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp />
            </div>
            <h3>Progress Tracking</h3>
            <p>Visual charts showing your daily improvement</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <BookOpen />
            </div>
            <h3>Proven Techniques</h3>
            <p>Scientific methods to increase reading speed</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <PenTool />
            </div>
            <h3>Practice Tests</h3>
            <p>Real exam-like RC passages for practice</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/test" className="action-card">
            <Timer className="action-icon" />
            <h3>Take Speed Test</h3>
            <p>Measure your current reading speed</p>
          </Link>
          <Link to="/progress" className="action-card">
            <TrendingUp className="action-icon" />
            <h3>View Progress</h3>
            <p>Check your improvement over time</p>
          </Link>
          <Link to="/practice" className="action-card">
            <PenTool className="action-icon" />
            <h3>Practice RC</h3>
            <p>Solve reading comprehension passages</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
