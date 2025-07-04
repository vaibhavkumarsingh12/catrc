# 🚀 SpeedRead Pro - CAT RC Reading Speed Improvement App

A comprehensive React-based web application designed to help students improve their reading speed and comprehension for competitive exams like CAT, GMAT, GRE, and other standardized tests.

![React](https://img.shields.io/badge/React-18-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0-green.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## 🌟 Features

### 📊 Reading Speed Testing
- **Accurate WPM Measurement**: Real-time calculation with timer functionality
- **Comprehension Tracking**: Multiple-choice questions to ensure understanding
- **Difficulty Levels**: Easy, Moderate, and Hard passages
- **Progress Analytics**: Track improvement over time

### 🤖 AI-Powered Daily Tests
- **Google AI Integration**: Fresh content generated daily using Gemini API
- **Smart Content Generation**: Difficulty-specific vocabulary and complexity
- **Automatic Question Creation**: AI generates relevant comprehension questions
- **Fallback System**: Curated content when API is unavailable

### 📈 Progress Tracking
- **Visual Charts**: Interactive progress visualization using Chart.js
- **Performance Metrics**: WPM trends, comprehension scores, and improvement tracking
- **Test History**: Complete record of all attempts with detailed analytics
- **Goal Setting**: Personal targets and achievement tracking

### 🎯 Reading Techniques
- **Comprehensive Guide**: 6+ proven speed reading methods
- **Technique Training**: 
  - Eliminating Subvocalization
  - Chunking and Word Grouping
  - Skimming and Scanning
  - Peripheral Vision Training
  - Meta-guiding Techniques
  - Active Reading Strategies

### 📚 Practice Sessions
- **RC Practice**: Exam-style reading comprehension passages
- **Timed Sessions**: Simulate real exam conditions
- **Detailed Feedback**: Explanations for answers and performance analysis
- **Difficulty Progression**: Adaptive difficulty based on performance

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Styling**: Custom CSS with modern design patterns
- **State Management**: React hooks (useState, useEffect)
- **Data Persistence**: Browser localStorage
- **API Integration**: Google Gemini AI

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhavkumarsingh12/catrc.git
   cd catrc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📱 Usage

### 🏠 Home Page
- View overall statistics and progress
- Quick access to daily tests
- API status and content generation metrics

### ⚡ Speed Test
1. Select difficulty level (Easy/Moderate/Hard)
2. Choose between regular tests or daily AI-generated content
3. Read the passage at your normal pace
4. Answer comprehension questions
5. Get detailed WPM and comprehension results

### 📊 Progress Tracking
- View WPM improvement over time
- Analyze comprehension trends
- Filter results by difficulty or test type
- Export progress data

### 🎓 Learning Techniques
- Access comprehensive speed reading guides
- Practice specific techniques
- Learn exam-specific strategies

## 🔧 API Integration

### Google AI Configuration
The app integrates with Google's Gemini AI to generate fresh reading content:

- **Daily Content**: 9 new tests generated daily (3 per difficulty)
- **Smart Prompts**: Difficulty-specific content generation
- **Quality Control**: Automatic validation and fallback systems
- **Rate Optimization**: Efficient API usage with caching

### Data Structure
```javascript
// Test Result Example
{
  date: "2025-07-03T10:30:00.000Z",
  wpm: 280,
  timeElapsed: 120,
  textTitle: "Climate Change Solutions",
  difficulty: "Moderate",
  comprehension: 85,
  testMode: "daily",
  isDaily: true,
  generated: true
}
```

## 📊 Content Database

### Reading Tests
- **Easy Level**: 5 tests (250-300 words)
- **Moderate Level**: 5 tests (350-400 words)  
- **Hard Level**: 10 tests (450-500 words)
- **Total**: 20+ comprehensive tests

### Topics Covered
- Science and Technology
- Economics and Business
- Environmental Issues
- Social Sciences
- Literature and Arts
- Current Affairs
- Philosophy and Ethics

## 🎨 Design Features

### User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Styling**: Clean, professional interface
- **Accessibility**: ARIA labels and keyboard navigation
- **Dark/Light Theme**: Comfortable reading experience

### Performance
- **Fast Loading**: Optimized bundle size with Vite
- **Smooth Animations**: CSS transitions and micro-interactions
- **Efficient Caching**: Local storage optimization
- **Error Boundaries**: Graceful error handling

## 📈 Analytics & Insights

### Performance Metrics
- **Reading Speed**: WPM tracking across difficulty levels
- **Comprehension Rate**: Accuracy percentage analysis
- **Improvement Trends**: Daily, weekly, and monthly progress
- **Test Completion**: Success rates and engagement metrics

### Competitive Exam Focus
- **CAT RC Preparation**: Specific strategies for CAT reading comprehension
- **Time Management**: Techniques for exam time constraints
- **Question Types**: Practice with various RC question formats
- **Score Improvement**: Targeted training for score enhancement

## 🔜 Future Enhancements

- [ ] User authentication and cloud sync
- [ ] Social features and leaderboards
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Offline functionality
- [ ] Gamification features
- [ ] Personalized learning paths
- [ ] Integration with exam prep platforms

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vaibhav Kumar Singh**
- GitHub: [@vaibhavkumarsingh12](https://github.com/vaibhavkumarsingh12)

## 🙏 Acknowledgments

- Google AI for content generation capabilities
- React and Vite communities for excellent tools
- Chart.js for beautiful data visualization
- Lucide React for modern icons

## 📞 Support

If you find this project helpful, please give it a ⭐ on GitHub!

For questions or support, please open an issue in the GitHub repository.

---

**Made with ❤️ for competitive exam aspirants**
