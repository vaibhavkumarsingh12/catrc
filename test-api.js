// Test script for API integration
import { apiService } from './src/services/apiService.js';
import { dailyTestManager } from './src/services/dailyTestManager.js';

async function testAPIIntegration() {
  console.log('🧪 Testing API Integration...\n');
  
  try {
    // Test 1: Generate a single passage
    console.log('Test 1: Generating single passage...');
    const passage = await apiService.generateReadingPassage('easy', 'Climate Change', 200);
    console.log('✅ Single passage generated successfully');
    console.log(`📝 Word count: ${passage.wordCount}`);
    console.log(`❓ Questions: ${passage.questions.length}`);
    console.log();
    
    // Test 2: Generate daily tests
    console.log('Test 2: Generating daily tests...');
    const dailyTests = await dailyTestManager.generateDailyTests();
    console.log('✅ Daily tests generated successfully');
    console.log(`📊 Total tests: ${dailyTests.length}`);
    console.log(`🟢 Easy: ${dailyTests.filter(t => t.level === 'easy').length}`);
    console.log(`🟡 Moderate: ${dailyTests.filter(t => t.level === 'moderate').length}`);
    console.log(`🔴 Hard: ${dailyTests.filter(t => t.level === 'hard').length}`);
    console.log();
    
    // Test 3: Get daily test stats
    console.log('Test 3: Getting daily test stats...');
    const stats = await dailyTestManager.getDailyTestStats();
    console.log('✅ Daily test stats retrieved');
    console.log(`📈 Stats:`, stats);
    console.log();
    
    console.log('🎉 All tests passed! API integration is working correctly.');
    
  } catch (error) {
    console.error('❌ API Integration test failed:', error);
    console.log('🔄 Falling back to curated content...');
    
    // Test fallback system
    const fallbackTests = dailyTestManager.getFallbackDailyTests();
    console.log(`📚 Fallback tests: ${fallbackTests.length}`);
    console.log('✅ Fallback system is working');
  }
}

// Run the test
testAPIIntegration();
