import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Component } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ReadingTest from './pages/ReadingTest'
import Progress from './pages/Progress'
import Techniques from './pages/Techniques'
import Practice from './pages/Practice'
import './App.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc'
        }}>
          <h1 style={{ color: '#ef4444', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            We're sorry, but there was an error loading the application.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<ReadingTest />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/techniques" element={<Techniques />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
