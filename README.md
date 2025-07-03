# SpeedRead Pro - Reading Speed Improvement App

A comprehensive React-based web application designed to help users improve their reading speed and comprehension for competitive exams like CAT, GMAT, GRE, and other standardized tests.

## 🚀 Features

### 📊 Reading Speed Testing
- Accurate Words Per Minute (WPM) measurement
- Comprehension tracking with multiple-choice questions
- Multiple text samples with varying difficulty levels
- Real-time timer and progress tracking

### 📈 Progress Tracking
- Visual charts showing reading speed improvement over time
- Daily streak tracking and motivation
- Detailed statistics and insights
- Performance analytics with personalized recommendations

### 🎯 Reading Techniques
- Comprehensive guide to proven speed reading methods
- Step-by-step instructions for each technique
- Difficulty levels from beginner to advanced
- Exam-specific tips for CAT, GMAT, GRE, and more

### 📚 Practice Tests
- Real exam-like Reading Comprehension passages
- Timed practice sessions with detailed feedback
- Multiple difficulty levels and topics
- Comprehensive explanations for all answers

### 💾 Data Persistence
- All progress data stored locally in your browser
- No account required - completely private
- Export/import functionality for data backup

## 🚀 New Features Added

### 📅 Daily Tests with AI Generation
- **API Integration**: Integrated Google AI API (Gemini) to generate fresh reading passages daily
- **Automatic Content**: New tests are automatically generated every day with varying difficulty levels
- **Fallback System**: If API fails, the system uses curated content from the expanded database
- **Smart Caching**: Daily tests are cached locally to avoid repeated API calls

### 🎯 Enhanced Test Database
- **Expanded Content**: Added 20+ new reading passages across all difficulty levels
- **Easy Level**: 5 tests (previously 3)
- **Moderate Level**: 5 tests (previously 3) 
- **Hard Level**: 10 tests (previously 4)
- **Total Tests**: 20 comprehensive reading tests with questions

### 🔧 API Service Features
- **Google AI Integration**: Uses Gemini model to generate contextual reading passages
- **Difficulty-Specific Generation**: Tailors vocabulary, sentence complexity, and concepts based on difficulty
- **Automatic Question Generation**: Creates 4 multiple-choice questions per passage
- **Topic Diversity**: Covers 20+ topics including technology, science, economics, and more

### 🏠 Enhanced Home Page
- **Daily Statistics**: Shows available daily tests by difficulty level
- **Personal Progress**: Displays user's average WPM and comprehension scores
- **API Status**: Indicates how many tests are AI-generated vs curated
- **Real-time Updates**: Statistics update based on user's test history

### 📊 Improved Reading Test Interface
- **Daily Test Mode**: Special mode for AI-generated daily content
- **Test Mode Indicators**: Visual badges showing regular vs daily tests
- **Enhanced Results**: Shows test source (AI-generated or curated)
- **Better Navigation**: Quick access to different test types

### 🔐 API Key Management
- **Secure Integration**: API key is properly managed in service layer
- **Error Handling**: Graceful fallback when API is unavailable
- **Rate Limiting**: Intelligent daily generation to avoid API limits

### 💾 Data Management
- **Enhanced Storage**: Improved local storage with test metadata
- **Progress Tracking**: Better tracking of daily vs regular test performance
- **Statistics Engine**: Comprehensive analytics for user progress

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Styling**: Custom CSS with modern design system
- **State Management**: React hooks (useState, useEffect)
- **Data Storage**: Browser localStorage

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd speedread-pro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Usage

### Taking a Reading Speed Test

1. Navigate to the "Speed Test" page
2. Select a text sample from the available options
3. Click "Start Reading" to begin the timer
4. Read the passage at your normal pace
5. Click "Finish Reading" when complete
6. Answer the comprehension questions
7. View your WPM score and comprehension results

### Tracking Your Progress

1. Visit the "Progress" page to see your improvement over time
2. View detailed statistics including:
   - Average WPM
   - Best performance
   - Daily streak
   - Improvement percentage
3. Get personalized recommendations based on your performance

### Learning Speed Reading Techniques

1. Go to the "Techniques" page
2. Browse through various speed reading methods
3. Click on any technique to see detailed instructions
4. Practice the techniques during your reading sessions

### Practicing with RC Passages

1. Navigate to the "Practice" page
2. Choose a passage based on difficulty level
3. Set a timer and start reading
4. Answer the questions after reading
5. Review detailed explanations for each answer

### Daily Tests:
1. Click "Daily Test" button in Reading Test page
2. System automatically selects from today's generated content
3. Complete test normally with WPM and comprehension tracking
4. Results are marked as "Daily Test" for progress tracking

### API Key:
The API key `AIzaSyD_1b6SIjt7IKCJnEfjmHZQ9Khn3GsqTb0` is integrated and ready to use.

### Test Generation:
- Tests are generated once per day automatically
- Each difficulty level gets 3 new tests daily
- Content covers diverse topics suitable for competitive exams
- All tests include comprehension questions for complete evaluation

## 🎯 Reading Techniques Included

- **Eliminate Subvocalization**: Stop the inner voice that slows you down
- **Chunking/Grouping**: Read groups of words instead of individual words
- **Skimming**: Quickly identify main ideas and key information
- **Scanning**: Rapidly locate specific information
- **Peripheral Vision Training**: Expand your visual field
- **Meta-Guiding**: Use guides to maintain reading pace

## 📊 Performance Metrics

The app tracks various metrics to help you improve:

- **Words Per Minute (WPM)**: Your reading speed
- **Comprehension Score**: Understanding retention percentage
- **Reading Time**: Total time spent reading
- **Daily Streak**: Consecutive days of practice
- **Improvement Rate**: Progress over time

## 📈 Statistics

### Current Test Database:
- **Easy**: 5 tests (1,200+ words total)
- **Moderate**: 5 tests (1,800+ words total)  
- **Hard**: 10 tests (4,000+ words total)
- **Total**: 20 tests with 80+ comprehension questions

### Daily Generation:
- **Per Day**: 9 new tests (3 per difficulty)
- **Word Count**: 250-480 words per test
- **Questions**: 4 multiple choice per test
- **Topics**: 20+ diverse subjects for exam preparation

## 🎨 Design Features

- **Modern UI**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme**: Comfortable reading experience
- **Accessibility**: Full keyboard navigation and screen reader support

## 🔧 Development

### Project Structure

```
src/
├── components/
│   └── Navigation.jsx
├── pages/
│   ├── Home.jsx
│   ├── ReadingTest.jsx
│   ├── Progress.jsx
│   ├── Techniques.jsx
│   └── Practice.jsx
├── utils/
├── data/
├── App.jsx
├── App.css
└── main.jsx
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Future Enhancements

- [ ] User authentication and cloud sync
- [ ] More advanced analytics and insights
- [ ] Additional practice passages and question types
- [ ] Gamification features and achievements
- [ ] Social features for comparing progress
- [ ] Mobile app version
- [ ] Offline mode support
- [ ] Custom text upload functionality

## 🤝 Support

If you encounter any issues or have suggestions for improvement, please:

1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Provide steps to reproduce the problem
4. Include your browser and OS information

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by speed reading research and techniques
- Built with modern React ecosystem
- Designed for competitive exam preparation
- Community-driven improvements and feedback

---

**Start your journey to faster reading today!** 🚀📚+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
