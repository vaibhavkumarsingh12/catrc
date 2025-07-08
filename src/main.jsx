import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add error handling for the main app initialization
try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }
  
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (error) {
  console.error('Failed to initialize app:', error)
  // Show a basic error message if the app fails to initialize
  const rootElement = document.getElementById('root')
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        padding: 2rem; 
        text-align: center; 
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f8fafc;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      ">
        <h1 style="color: #ef4444; margin-bottom: 1rem;">App Failed to Load</h1>
        <p style="color: #6b7280; margin-bottom: 1rem;">
          There was an error initializing the SpeedRead Pro application.
        </p>
        <button 
          onclick="window.location.reload()"
          style="
            padding: 0.75rem 1.5rem;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 1rem;
          "
        >
          Retry
        </button>
      </div>
    `
  }
}
