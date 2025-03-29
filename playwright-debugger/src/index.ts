import { chromium } from '@playwright/test';

/**
 * Connect to an already running Chrome instance in debug mode
 * Make sure Chrome is already running with --remote-debugging-port=9222
 */
async function connectToDebugger() {
  console.log('Connecting to Chrome debugger...');
  
  try {
    // Connect to the running Chrome instance
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    console.log('Connected to Chrome debugger successfully');
    
    // Get the list of pages
    const contexts = browser.contexts();
    console.log(`Found ${contexts.length} browser context(s)`);
    
    // Create a new page
    const page = await browser.newPage();
    console.log('Created new page');
    
    // Navigate to a website
    console.log('Navigating to example.com...');
    await page.goto('https://example.com');
    console.log('Navigation complete');
    
    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot taken and saved as screenshot.png');
    
    // Wait for user input before closing
    console.log('Press any key to close the connection...');
    await new Promise(resolve => process.stdin.once('data', resolve));
    
    // Close the connection (but not the actual browser)
    await browser.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error connecting to Chrome debugger:', error);
    console.log('Make sure Chrome is running with --remote-debugging-port=9222');
    console.log('For example on Mac, run:');
    console.log('/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222');
  }
}

// Run the function
connectToDebugger(); 