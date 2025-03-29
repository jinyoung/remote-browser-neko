import { chromium } from '@playwright/test';

/**
 * Connect to Chrome debugger with advanced options
 */
async function advancedDebugger() {
  console.log('Starting advanced debugger connection...');
  
  try {
    // Connect to Chrome with advanced options
    const browser = await chromium.connectOverCDP('http://localhost:9222', {
      slowMo: 1000, // Add a 1 second delay between actions
      timeout: 30000, // 30 seconds timeout for operations
    });
    console.log('Connected to Chrome debugger successfully');
    
    // Create a new page with devtools open
    const context = await browser.newContext({ 
      viewport: { width: 1280, height: 720 }
    });
    const page = await context.newPage();
    console.log('Created new page');
    
    // Navigate to a website
    console.log('Navigating to GitHub...');
    await page.goto('https://github.com');
    console.log('Navigation complete');
    
    // Interact with the page
    console.log('Interacting with page elements...');
    
    // Find the search input
    const searchInput = page.locator('[name="q"]');
    await searchInput.fill('playwright');
    await searchInput.press('Enter');
    console.log('Search performed');
    
    // Wait for the results page to load
    await page.waitForURL('**/search?q=playwright**');
    console.log('Search results loaded');
    
    // Take a screenshot
    await page.screenshot({ path: 'github-search.png', fullPage: true });
    console.log('Screenshot saved as github-search.png');
    
    // Demonstrate debugging pause
    console.log('\nPausing execution for debugging (check your browser)');
    console.log('Press any key to continue...');
    await new Promise(resolve => process.stdin.once('data', resolve));
    
    // Continue with more actions
    console.log('Continuing execution...');
    await page.click('.repo-list-item a:first-child');
    console.log('Clicked on first search result');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Take another screenshot
    await page.screenshot({ path: 'repo-page.png' });
    console.log('Screenshot of repository page saved as repo-page.png');
    
    // Close the connection
    console.log('\nPress any key to close the connection...');
    await new Promise(resolve => process.stdin.once('data', resolve));
    await browser.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error:', error);
    console.log('Make sure Chrome is running with --remote-debugging-port=9222');
  }
}

// Run the function
advancedDebugger(); 