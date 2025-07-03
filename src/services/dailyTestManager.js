// Daily Test Manager - Handles daily test generation and management
import { apiService } from '../services/apiService.js';
import { readingTestData } from '../data/readingTestData.js';

export class DailyTestManager {
  constructor() {
    this.storageKey = 'speedread_daily_tests';
    this.lastGeneratedKey = 'speedread_last_generated';
  }

  // Check if we need to generate new daily tests
  shouldGenerateNewTests() {
    const lastGenerated = localStorage.getItem(this.lastGeneratedKey);
    if (!lastGenerated) return true;
    
    const lastDate = new Date(lastGenerated);
    const today = new Date();
    
    // Generate new tests if it's a new day
    return lastDate.toDateString() !== today.toDateString();
  }

  // Get stored daily tests
  getStoredDailyTests() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Store daily tests
  storeDailyTests(tests) {
    localStorage.setItem(this.storageKey, JSON.stringify(tests));
    localStorage.setItem(this.lastGeneratedKey, new Date().toISOString());
  }

  // Generate new daily tests using API
  async generateDailyTests() {
    try {
      const topics = [
        'Sustainable Technology and Green Innovation',
        'Space Exploration and Interplanetary Travel',
        'Genetic Engineering and CRISPR Technology',
        'Artificial Intelligence and Machine Learning Ethics',
        'Quantum Computing and Information Security',
        'Renewable Energy and Climate Solutions',
        'Medical Breakthroughs and Personalized Medicine',
        'Urban Planning and Smart City Development',
        'Behavioral Economics and Decision Making',
        'Neuroscience and Brain-Computer Interfaces',
        'Biotechnology and Synthetic Biology',
        'Digital Privacy and Data Protection',
        'Ocean Conservation and Marine Ecosystems',
        'Educational Technology and E-Learning',
        'Cryptocurrency and Blockchain Technology',
        'Robotics and Automation in Industry',
        'Mental Health and Psychological Research',
        'Environmental Science and Biodiversity',
        'Social Media and Human Communication',
        'Architecture and Sustainable Design'
      ];

      const dailyTests = [];
      const difficulties = ['easy', 'moderate', 'hard'];

      // Generate 3 tests per difficulty (9 total daily tests)
      for (let i = 0; i < 3; i++) {
        for (const difficulty of difficulties) {
          const randomTopic = topics[Math.floor(Math.random() * topics.length)];
          const wordCount = this.getWordCountForDifficulty(difficulty);
          
          try {
            const generated = await apiService.generateReadingPassage(difficulty, randomTopic, wordCount);
            
            dailyTests.push({
              id: `daily_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
              title: randomTopic,
              difficulty: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
              level: difficulty,
              estimatedWPM: this.getEstimatedWPM(difficulty),
              text: generated.passage,
              questions: generated.questions,
              isDaily: true,
              date: new Date().toISOString().split('T')[0],
              generated: true
            });
          } catch (error) {
            console.warn(`Failed to generate ${difficulty} test for ${randomTopic}:`, error);
            // Fall back to existing content if API fails
            const fallbackTest = this.getFallbackTest(difficulty, randomTopic);
            if (fallbackTest) {
              dailyTests.push(fallbackTest);
            }
          }
        }
      }

      return dailyTests;
    } catch (error) {
      console.error('Error generating daily tests:', error);
      return this.getFallbackDailyTests();
    }
  }

  // Get fallback test from existing data
  getFallbackTest(difficulty, topic) {
    const existingTests = readingTestData.filter(test => test.level === difficulty);
    const randomTest = existingTests[Math.floor(Math.random() * existingTests.length)];
    
    if (randomTest) {
      return {
        ...randomTest,
        id: `daily_fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title: topic,
        isDaily: true,
        date: new Date().toISOString().split('T')[0],
        generated: false
      };
    }
    return null;
  }

  // Get fallback daily tests from existing data
  getFallbackDailyTests() {
    const tests = [];
    const difficulties = ['easy', 'moderate', 'hard'];
    
    difficulties.forEach(difficulty => {
      const existingTests = readingTestData.filter(test => test.level === difficulty);
      // Select 3 random tests from each difficulty
      for (let i = 0; i < 3; i++) {
        const randomTest = existingTests[Math.floor(Math.random() * existingTests.length)];
        if (randomTest) {
          tests.push({
            ...randomTest,
            id: `daily_fallback_${Date.now()}_${i}_${difficulty}`,
            isDaily: true,
            date: new Date().toISOString().split('T')[0],
            generated: false
          });
        }
      }
    });
    
    return tests;
  }

  // Get word count based on difficulty
  getWordCountForDifficulty(difficulty) {
    const wordCounts = {
      easy: 280,
      moderate: 380,
      hard: 480
    };
    return wordCounts[difficulty] || 300;
  }

  // Get estimated WPM based on difficulty
  getEstimatedWPM(difficulty) {
    const wpmRanges = {
      easy: 190,
      moderate: 260,
      hard: 340
    };
    return wpmRanges[difficulty] || 200;
  }

  // Get today's daily tests
  async getTodaysDailyTests() {
    if (this.shouldGenerateNewTests()) {
      const newTests = await this.generateDailyTests();
      this.storeDailyTests(newTests);
      return newTests;
    } else {
      return this.getStoredDailyTests();
    }
  }

  // Get daily tests by difficulty
  async getDailyTestsByDifficulty(difficulty) {
    const dailyTests = await this.getTodaysDailyTests();
    return dailyTests.filter(test => test.level === difficulty);
  }

  // Get a random daily test by difficulty
  async getRandomDailyTest(difficulty) {
    const tests = await this.getDailyTestsByDifficulty(difficulty);
    return tests[Math.floor(Math.random() * tests.length)];
  }

  // Get daily test statistics
  async getDailyTestStats() {
    const tests = await this.getTodaysDailyTests();
    const stats = {
      easy: tests.filter(t => t.level === 'easy').length,
      moderate: tests.filter(t => t.level === 'moderate').length,
      hard: tests.filter(t => t.level === 'hard').length,
      total: tests.length,
      generated: tests.filter(t => t.generated).length,
      fallback: tests.filter(t => !t.generated).length
    };
    return stats;
  }
}

export const dailyTestManager = new DailyTestManager();
