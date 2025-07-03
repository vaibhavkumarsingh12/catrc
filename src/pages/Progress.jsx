import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { TrendingUp, Calendar, Target, Award } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Progress = () => {
  const [readingResults, setReadingResults] = useState([])
  const [stats, setStats] = useState({
    totalTests: 0,
    averageWPM: 0,
    bestWPM: 0,
    improvement: 0,
    currentStreak: 0
  })

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem('readingResults') || '[]')
    setReadingResults(results)
    calculateStats(results)
  }, [])

  const calculateStats = (results) => {
    if (results.length === 0) return

    const totalTests = results.length
    const averageWPM = Math.round(results.reduce((sum, result) => sum + result.wpm, 0) / totalTests)
    const bestWPM = Math.max(...results.map(result => result.wpm))
    
    // Calculate improvement (compare first and last test)
    const improvement = results.length > 1 ? 
      Math.round(((results[results.length - 1].wpm - results[0].wpm) / results[0].wpm) * 100) : 0

    // Calculate current streak (consecutive days)
    const currentStreak = calculateStreak(results)

    setStats({
      totalTests,
      averageWPM,
      bestWPM,
      improvement,
      currentStreak
    })
  }

  const calculateStreak = (results) => {
    if (results.length === 0) return 0
    
    const today = new Date()
    const uniqueDates = [...new Set(results.map(result => 
      new Date(result.date).toDateString()
    ))].sort((a, b) => new Date(b) - new Date(a))
    
    let streak = 0
    let currentDate = new Date(today)
    
    for (const dateStr of uniqueDates) {
      const testDate = new Date(dateStr)
      const diffDays = Math.floor((currentDate - testDate) / (1000 * 60 * 60 * 24))
      
      if (diffDays === streak) {
        streak++
        currentDate = testDate
      } else {
        break
      }
    }
    
    return streak
  }

  const getChartData = () => {
    if (readingResults.length === 0) return null

    const last30Results = readingResults.slice(-30)
    const labels = last30Results.map(result => 
      new Date(result.date).toLocaleDateString()
    )
    const data = last30Results.map(result => result.wpm)

    return {
      labels,
      datasets: [
        {
          label: 'Reading Speed (WPM)',
          data,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.1,
          fill: true,
        },
      ],
    }
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Reading Speed Progress (Last 30 Tests)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Words Per Minute'
        }
      }
    }
  }

  const getProgressInsights = () => {
    if (readingResults.length === 0) return []

    const insights = []
    
    if (stats.improvement > 0) {
      insights.push({
        type: 'positive',
        text: `Great progress! You've improved by ${stats.improvement}% since your first test.`
      })
    }
    
    if (stats.currentStreak > 0) {
      insights.push({
        type: 'positive',
        text: `You're on a ${stats.currentStreak}-day streak! Keep it up!`
      })
    }
    
    if (stats.bestWPM > 300) {
      insights.push({
        type: 'achievement',
        text: `Excellent! Your best speed of ${stats.bestWPM} WPM is above average.`
      })
    }
    
    if (readingResults.length >= 10) {
      insights.push({
        type: 'milestone',
        text: `You've completed ${stats.totalTests} tests! Consistency is key to improvement.`
      })
    }
    
    return insights
  }

  const getRecommendations = () => {
    const recommendations = []
    
    if (stats.averageWPM < 200) {
      recommendations.push("Try the skimming technique to increase your speed")
      recommendations.push("Practice eliminating subvocalization")
    } else if (stats.averageWPM < 300) {
      recommendations.push("Work on peripheral vision exercises")
      recommendations.push("Practice chunking words together")
    } else {
      recommendations.push("Focus on maintaining comprehension at high speeds")
      recommendations.push("Try speed reading with complex texts")
    }
    
    return recommendations
  }

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Your Reading Progress</h1>
        <p>Track your improvement over time</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Target />
          </div>
          <div className="stat-content">
            <h3>{stats.totalTests}</h3>
            <p>Total Tests</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp />
          </div>
          <div className="stat-content">
            <h3>{stats.averageWPM}</h3>
            <p>Average WPM</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Award />
          </div>
          <div className="stat-content">
            <h3>{stats.bestWPM}</h3>
            <p>Best WPM</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Calendar />
          </div>
          <div className="stat-content">
            <h3>{stats.currentStreak}</h3>
            <p>Day Streak</p>
          </div>
        </div>
      </div>

      {readingResults.length > 0 ? (
        <>
          <div className="chart-container">
            <Line data={getChartData()} options={chartOptions} />
          </div>

          <div className="insights-section">
            <h2>Progress Insights</h2>
            <div className="insights-grid">
              {getProgressInsights().map((insight, index) => (
                <div key={index} className={`insight-card ${insight.type}`}>
                  <p>{insight.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="recommendations-section">
            <h2>Recommendations</h2>
            <div className="recommendations-list">
              {getRecommendations().map((recommendation, index) => (
                <div key={index} className="recommendation-item">
                  <span className="recommendation-bullet">•</span>
                  <span>{recommendation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-tests">
            <h2>Recent Tests</h2>
            <div className="tests-table">
              <div className="table-header">
                <span>Date</span>
                <span>Text</span>
                <span>WPM</span>
                <span>Time</span>
              </div>
              {readingResults.slice(-10).reverse().map((result, index) => (
                <div key={index} className="table-row">
                  <span>{new Date(result.date).toLocaleDateString()}</span>
                  <span>{result.textTitle}</span>
                  <span>{result.wpm}</span>
                  <span>{Math.floor(result.timeElapsed / 60)}:{(result.timeElapsed % 60).toString().padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="no-data">
          <div className="no-data-content">
            <TrendingUp className="no-data-icon" />
            <h2>No Test Data Yet</h2>
            <p>Take your first reading speed test to start tracking your progress!</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/test'}>
              Take Your First Test
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Progress
