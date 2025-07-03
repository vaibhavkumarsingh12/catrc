import { Link, useLocation } from 'react-router-dom'
import { Home, Timer, TrendingUp, BookOpen, PenTool } from 'lucide-react'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/test', label: 'Speed Test', icon: Timer },
    { path: '/progress', label: 'Progress', icon: TrendingUp },
    { path: '/techniques', label: 'Techniques', icon: BookOpen },
    { path: '/practice', label: 'Practice', icon: PenTool }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Timer className="logo-icon" />
          <span className="logo-text">SpeedRead Pro</span>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <IconComponent className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
