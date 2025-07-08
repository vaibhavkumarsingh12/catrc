// API Service for Google AI integration
const GOOGLE_API_KEY = 'AIzaSyD_1b6SIjt7IKCJnEfjmHZQ9Khn3GsqTb0';
const GOOGLE_AI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export class APIService {
  constructor() {
    this.apiKey = GOOGLE_API_KEY;
  }

  // Generate new reading passages using Google AI
  async generateReadingPassage(difficulty, topic, wordCount = 300) {
    try {
      const prompt = this.createPrompt(difficulty, topic, wordCount);
      
      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(`${GOOGLE_AI_ENDPOINT}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return this.parseGeneratedContent(data);
    } catch (error) {
      console.error('Error generating reading passage:', error);
      throw error;
    }
  }

  // Create prompt for different difficulty levels
  createPrompt(difficulty, topic, wordCount) {
    const difficultySpecs = {
      easy: {
        vocabulary: 'simple, everyday vocabulary',
        sentences: 'short to medium sentences (10-15 words)',
        concepts: 'basic concepts and familiar topics',
        wpm: '180-220'
      },
      moderate: {
        vocabulary: 'intermediate vocabulary with some technical terms',
        sentences: 'medium to long sentences (15-25 words)',
        concepts: 'more complex ideas requiring deeper understanding',
        wpm: '220-280'
      },
      hard: {
        vocabulary: 'advanced vocabulary with specialized terminology',
        sentences: 'complex sentences with multiple clauses (25+ words)',
        concepts: 'sophisticated concepts requiring critical thinking',
        wpm: '280-350'
      }
    };

    const spec = difficultySpecs[difficulty];
    
    return `Generate a ${difficulty} level reading passage about "${topic}" with exactly ${wordCount} words. 

Requirements:
- Use ${spec.vocabulary}
- Write ${spec.sentences}
- Include ${spec.concepts}
- Target reading speed: ${spec.wpm} WPM
- Format as a cohesive, informative passage suitable for competitive exam preparation
- Make it engaging and educational
- Include specific facts, examples, or case studies where relevant

Also generate 4 multiple-choice comprehension questions based on the passage:
- Each question should have 4 options
- Questions should test understanding, inference, and analysis
- Indicate the correct answer

Format the response as:
PASSAGE:
[the passage text]

QUESTIONS:
1. [Question 1]
A) [Option A]
B) [Option B] 
C) [Option C]
D) [Option D]
Correct: [A/B/C/D]

[Continue for all 4 questions]`;
  }

  // Parse the generated content from Google AI
  parseGeneratedContent(data) {
    try {
      const content = data.candidates[0].content.parts[0].text;
      const sections = content.split('QUESTIONS:');
      
      if (sections.length !== 2) {
        throw new Error('Invalid response format');
      }

      const passage = sections[0].replace('PASSAGE:', '').trim();
      const questionsSection = sections[1].trim();
      
      const questions = this.parseQuestions(questionsSection);
      
      return {
        passage,
        questions,
        wordCount: passage.split(/\s+/).length
      };
    } catch (error) {
      console.error('Error parsing generated content:', error);
      throw error;
    }
  }

  // Parse questions from the generated content
  parseQuestions(questionsText) {
    const questions = [];
    const questionBlocks = questionsText.split(/\d+\.\s+/).filter(block => block.trim());
    
    questionBlocks.forEach(block => {
      const lines = block.split('\n').filter(line => line.trim());
      if (lines.length >= 6) {
        const question = lines[0].trim();
        const options = [
          lines[1].replace(/^[A-D]\)\s*/, '').trim(),
          lines[2].replace(/^[A-D]\)\s*/, '').trim(),
          lines[3].replace(/^[A-D]\)\s*/, '').trim(),
          lines[4].replace(/^[A-D]\)\s*/, '').trim()
        ];
        const correctLine = lines.find(line => line.toLowerCase().includes('correct:'));
        const correct = correctLine ? ['A', 'B', 'C', 'D'].indexOf(correctLine.split(':')[1].trim().toUpperCase()) : 0;
        
        questions.push({
          question,
          options,
          correct: correct >= 0 ? correct : 0
        });
      }
    });
    
    return questions;
  }

  // Generate daily test content
  async generateDailyTests(count = 5) {
    const topics = [
      'Climate Change and Environmental Science',
      'Artificial Intelligence and Machine Learning',
      'Space Exploration and Astronomy',
      'Biotechnology and Genetic Engineering',
      'Renewable Energy Technologies',
      'Behavioral Psychology and Human Cognition',
      'Global Economic Trends',
      'Urban Planning and Smart Cities',
      'Medical Breakthroughs and Healthcare',
      'Digital Privacy and Cybersecurity',
      'Sustainable Agriculture',
      'Ocean Conservation',
      'Quantum Computing',
      'Social Media and Communication',
      'Educational Technology'
    ];

    const difficulties = ['easy', 'moderate', 'hard'];
    const tests = [];

    for (let i = 0; i < count; i++) {
      for (const difficulty of difficulties) {
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        const wordCount = difficulty === 'easy' ? 250 : difficulty === 'moderate' ? 350 : 450;
        
        try {
          const generated = await this.generateReadingPassage(difficulty, randomTopic, wordCount);
          tests.push({
            id: Date.now() + Math.random(),
            title: randomTopic,
            difficulty: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
            level: difficulty,
            estimatedWPM: this.getEstimatedWPM(difficulty),
            text: generated.passage,
            questions: generated.questions,
            isDaily: true,
            date: new Date().toISOString().split('T')[0]
          });
        } catch (error) {
          console.error(`Failed to generate ${difficulty} test for ${randomTopic}:`, error);
        }
      }
    }

    return tests;
  }

  // Get estimated WPM based on difficulty
  getEstimatedWPM(difficulty) {
    const wpmRanges = {
      easy: 200,
      moderate: 250,
      hard: 320
    };
    return wpmRanges[difficulty] || 200;
  }
}

export const apiService = new APIService();
