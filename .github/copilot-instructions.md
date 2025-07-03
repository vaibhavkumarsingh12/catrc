<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# SpeedRead Pro - Reading Speed Improvement App

This is a React-based web application designed to help users improve their reading speed for competitive exams like CAT, GMAT, GRE, and other standardized tests.

## Project Overview

The app includes the following key features:
- **Reading Speed Testing**: Accurate WPM measurement with comprehension tracking
- **Progress Tracking**: Visual charts showing daily improvement using Chart.js
- **Reading Techniques**: Comprehensive guide to proven speed reading methods
- **Practice Tests**: Real exam-like RC passages with questions and explanations
- **Local Storage**: All data is stored locally in the browser

## Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Styling**: Custom CSS with modern design patterns
- **State Management**: React hooks (useState, useEffect)
- **Data Persistence**: Browser localStorage

## Key Components

### Pages
- `Home`: Landing page with features overview and quick actions
- `ReadingTest`: Interactive reading speed test with timer and comprehension questions
- `Progress`: Progress tracking with charts and insights
- `Techniques`: Comprehensive guide to speed reading techniques
- `Practice`: RC practice with exam-style passages and detailed feedback

### Components
- `Navigation`: Responsive navigation with active state management

## Code Guidelines

When working with this codebase:

1. **State Management**: Use React hooks for state management. Store test results and progress data in localStorage.

2. **Styling**: Follow the existing CSS variable system defined in App.css. Use consistent naming conventions and responsive design patterns.

3. **Data Structure**: 
   - Reading test results are stored as: `{ date, wpm, timeElapsed, textTitle }`
   - Practice results are stored as: `{ date, passageTitle, score, totalQuestions, timeSpent }`

4. **Performance**: Optimize for performance by using proper React patterns and avoiding unnecessary re-renders.

5. **Accessibility**: Ensure all interactive elements are keyboard accessible and have proper ARIA labels.

6. **Responsive Design**: All components should work well on mobile, tablet, and desktop screens.

## Features to Maintain

- **Timer functionality**: Accurate timing for reading tests
- **Local data persistence**: All user data should persist between sessions
- **Progress visualization**: Charts should update dynamically with new data
- **Comprehensive technique guides**: Keep detailed explanations for each reading technique
- **Exam-specific tips**: Maintain separate sections for different competitive exams

## Future Enhancements

Consider these areas for future development:
- User authentication and cloud sync
- More advanced analytics and insights
- Additional practice passages and question types
- Gamification features and achievements
- Export/import functionality for data
- Social features for comparing progress with others
