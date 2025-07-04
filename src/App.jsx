import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ReadingTest from './pages/ReadingTest'
import Progress from './pages/Progress'
import Techniques from './pages/Techniques'
import Practice from './pages/Practice'
import './App.css'

function App() {
  return (
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
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
