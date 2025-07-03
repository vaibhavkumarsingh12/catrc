import { useState } from 'react'
import { BookOpen, Eye, Zap, Target, Brain, Clock } from 'lucide-react'

const Techniques = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null)

  const techniques = [
    {
      id: 1,
      title: "Eliminate Subvocalization",
      icon: Brain,
      difficulty: "Beginner",
      description: "Stop the inner voice that reads words in your head",
      fullDescription: "Subvocalization is the habit of pronouncing words in your head as you read. This significantly slows down your reading speed because you're limited to speaking pace (around 150-200 WPM).",
      steps: [
        "Become aware of your inner voice while reading",
        "Hum or chew gum while reading to occupy your vocal cords",
        "Practice reading while counting numbers mentally",
        "Focus on understanding concepts rather than individual words",
        "Gradually increase your reading speed to outpace your inner voice"
      ],
      tips: [
        "Start with familiar, easy texts",
        "Practice for short periods (10-15 minutes) initially",
        "Don't worry about comprehension initially - it will improve with practice"
      ],
      timeToMaster: "2-4 weeks"
    },
    {
      id: 2,
      title: "Chunking/Grouping",
      icon: Eye,
      difficulty: "Beginner",
      description: "Read groups of words instead of individual words",
      fullDescription: "Instead of reading word by word, train your eyes to capture groups of words or phrases in a single fixation. This reduces the number of eye movements needed.",
      steps: [
        "Start by reading two words at a time",
        "Gradually increase to 3-4 words per fixation",
        "Practice with short phrases and common word combinations",
        "Use your peripheral vision to capture more words",
        "Focus on meaningful word groups (phrases, clauses)"
      ],
      tips: [
        "Use a finger or pen to guide your eyes in chunks",
        "Practice with newspaper columns (natural chunking)",
        "Don't regress - keep moving forward"
      ],
      timeToMaster: "3-6 weeks"
    },
    {
      id: 3,
      title: "Skimming",
      icon: Zap,
      difficulty: "Intermediate",
      description: "Quickly identify main ideas and key information",
      fullDescription: "Skimming involves reading quickly to get the gist of the text without reading every word. It's particularly useful for competitive exams where you need to process large amounts of information quickly.",
      steps: [
        "Read the title, headings, and subheadings first",
        "Look for topic sentences (usually first sentence of paragraphs)",
        "Focus on keywords and key phrases",
        "Pay attention to transition words (however, therefore, in conclusion)",
        "Read the first and last paragraphs completely"
      ],
      tips: [
        "Look for repeated words or concepts",
        "Pay attention to italicized or bolded text",
        "Use your prior knowledge to fill in gaps"
      ],
      timeToMaster: "2-3 weeks"
    },
    {
      id: 4,
      title: "Scanning",
      icon: Target,
      difficulty: "Intermediate",
      description: "Quickly locate specific information in text",
      fullDescription: "Scanning is a technique used to find specific information quickly. Your eyes move rapidly over the text until you find what you're looking for.",
      steps: [
        "Identify what specific information you're looking for",
        "Move your eyes quickly across the text",
        "Look for keywords, numbers, names, or dates",
        "Use text features like bullet points, lists, or highlighted text",
        "Stop when you find the target information"
      ],
      tips: [
        "Have a clear question in mind before scanning",
        "Don't read every word - let your eyes jump around",
        "Use context clues to narrow down search areas"
      ],
      timeToMaster: "1-2 weeks"
    },
    {
      id: 5,
      title: "Peripheral Vision Training",
      icon: Eye,
      difficulty: "Advanced",
      description: "Expand your visual field to capture more text",
      fullDescription: "By training your peripheral vision, you can see and process more words in a single glance, dramatically increasing your reading speed.",
      steps: [
        "Practice focusing on the center of a line while trying to see words on the sides",
        "Use a finger to trace down the middle of a column while reading",
        "Practice reading by focusing only on the center of each line",
        "Gradually increase the width of text you can process",
        "Train with progressively narrower columns"
      ],
      tips: [
        "Start with short lines or narrow columns",
        "Practice with familiar content first",
        "Don't strain your eyes - take regular breaks"
      ],
      timeToMaster: "6-8 weeks"
    },
    {
      id: 6,
      title: "Meta-Guiding",
      icon: Clock,
      difficulty: "Advanced",
      description: "Use your finger or a pointer to guide your reading pace",
      fullDescription: "Meta-guiding involves using your finger, pen, or cursor to guide your eyes and maintain a steady, fast reading pace.",
      steps: [
        "Use your finger to underline each line as you read",
        "Move your finger slightly faster than your comfortable reading speed",
        "Gradually increase the speed of your finger movement",
        "Practice smooth, continuous movements",
        "Eventually, try reading without the guide"
      ],
      tips: [
        "Keep the movement smooth and consistent",
        "Don't let your finger lag behind your eyes",
        "Practice with different types of text"
      ],
      timeToMaster: "4-6 weeks"
    }
  ]

  const examTips = [
    {
      title: "CAT Reading Comprehension",
      tips: [
        "Read the questions first to know what to look for",
        "Focus on the main idea and tone of the passage",
        "Don't get stuck on difficult words - use context",
        "Practice with 400-600 word passages regularly"
      ]
    },
    {
      title: "GMAT Reading",
      tips: [
        "Identify the passage structure (cause-effect, compare-contrast, etc.)",
        "Take notes on main points while reading",
        "Pay attention to author's attitude and purpose",
        "Time yourself: 2-3 minutes for reading, 1 minute per question"
      ]
    },
    {
      title: "GRE Reading",
      tips: [
        "Focus on logical structure and argument flow",
        "Look for signal words that indicate relationships",
        "Practice with complex, academic vocabulary",
        "Don't spend too much time on any single passage"
      ]
    }
  ]

  return (
    <div className="techniques-container">
      <div className="techniques-header">
        <h1>Reading Speed Techniques</h1>
        <p>Master these proven methods to dramatically improve your reading speed</p>
      </div>

      <div className="techniques-grid">
        {techniques.map((technique) => {
          const IconComponent = technique.icon
          return (
            <div
              key={technique.id}
              className={`technique-card ${selectedTechnique?.id === technique.id ? 'selected' : ''}`}
              onClick={() => setSelectedTechnique(technique)}
            >
              <div className="technique-icon">
                <IconComponent />
              </div>
              <h3>{technique.title}</h3>
              <p className="technique-description">{technique.description}</p>
              <div className="technique-meta">
                <span className={`difficulty ${technique.difficulty.toLowerCase()}`}>
                  {technique.difficulty}
                </span>
                <span className="time-to-master">{technique.timeToMaster}</span>
              </div>
            </div>
          )
        })}
      </div>

      {selectedTechnique && (
        <div className="technique-details">
          <div className="technique-details-header">
            <h2>{selectedTechnique.title}</h2>
            <button
              className="close-button"
              onClick={() => setSelectedTechnique(null)}
            >
              ×
            </button>
          </div>
          
          <div className="technique-content">
            <div className="technique-overview">
              <h3>Overview</h3>
              <p>{selectedTechnique.fullDescription}</p>
            </div>

            <div className="technique-steps">
              <h3>Step-by-Step Guide</h3>
              <ol>
                {selectedTechnique.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="technique-tips">
              <h3>Pro Tips</h3>
              <ul>
                {selectedTechnique.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="technique-practice">
              <h3>Practice Schedule</h3>
              <p>
                <strong>Time to Master:</strong> {selectedTechnique.timeToMaster}
              </p>
              <p>
                <strong>Daily Practice:</strong> 15-20 minutes
              </p>
              <p>
                <strong>Recommended:</strong> Combine with other techniques for best results
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="exam-specific-tips">
        <h2>Exam-Specific Tips</h2>
        <div className="exam-tips-grid">
          {examTips.map((exam, index) => (
            <div key={index} className="exam-tip-card">
              <h3>{exam.title}</h3>
              <ul>
                {exam.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="general-tips">
        <h2>General Reading Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>Before Reading</h3>
            <ul>
              <li>Preview the text structure</li>
              <li>Set a purpose for reading</li>
              <li>Activate prior knowledge</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>During Reading</h3>
            <ul>
              <li>Stay focused and avoid distractions</li>
              <li>Don't regress or re-read</li>
              <li>Trust your comprehension</li>
            </ul>
          </div>
          <div className="tip-card">
            <h3>After Reading</h3>
            <ul>
              <li>Summarize key points</li>
              <li>Connect to prior knowledge</li>
              <li>Practice with similar texts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techniques
