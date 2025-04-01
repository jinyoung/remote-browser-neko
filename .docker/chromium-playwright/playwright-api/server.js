const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { chromium } = require('playwright');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

let browser = null;
let context = null;
let page = null;

// 브라우저 연결 함수
async function connectBrowser() {
  try {
      browser = await chromium.connectOverCDP('http://localhost:9222');
    context = browser.contexts()[0];
    page = context.pages()[0];
    if (!page) {
        page = await context.newPage();
    }
    return { success: true, message: 'Connected to browser' };
  } catch (error) {
    console.error('Failed to connect to browser:', error);
    return { success: false, message: error.message };
  }
}

// Initialize browser connection
connectBrowser();

// API 라우트 설정
app.get('/status', async (req, res) => {
  try {
    const isConnected = browser !== null;
    let title = '';
    let url = '';
    
    if (isConnected && page) {
      title = await page.title();
        url = page.url();
    }
    
    res.json({
      connected: isConnected,
      title,
      url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/connect', async (req, res) => {
  const result = await connectBrowser();
  res.json(result);
});

app.post('/navigate', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
    
    if (!page) {
      await connectBrowser();
    }
    
    console.log(`Navigating to ${url}...`);
    
    // 네비게이션 타임아웃 늘리기 및 페이지 로드 대기
    await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    
    // 추가로 안정화 대기
    await page.waitForTimeout(2000).catch(() => {});
    
    let title = 'Unknown';
    try {
      title = await page.title();
    } catch (e) {
      console.warn('Error getting page title after navigation:', e.message);
    }
    
    res.json({ 
      success: true, 
      message: `Navigated to ${url}`,
      title: title,
      url: page.url()
    });
  } catch (error) {
    console.error('Navigation error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/click', async (req, res) => {
  try {
    const { selector } = req.body;
    if (!selector) {
      return res.status(400).json({ error: 'Selector is required' });
    }
    
    if (!page) {
      await connectBrowser();
    }
    
    // 요소가 표시될 때까지 기다림
    await page.waitForSelector(selector, { 
      state: 'visible',
      timeout: 10000
    }).catch(e => {
      throw new Error(`Element not found: ${selector} - ${e.message}`);
    });
    
    await page.click(selector);
    
    // 클릭 후 안정화를 위해 잠시 대기
    await page.waitForTimeout(1000).catch(() => {});
    
    res.json({ 
      success: true, 
      message: `Clicked on element with selector: ${selector}`,
      currentUrl: page.url()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/type', async (req, res) => {
  try {
    const { selector, text } = req.body;
    if (!selector || !text) {
      return res.status(400).json({ error: 'Selector and text are required' });
    }
    
    if (!page) {
      await connectBrowser();
    }
    
    // 요소가 표시될 때까지 기다림
    await page.waitForSelector(selector, { 
      state: 'visible',
      timeout: 10000
    }).catch(e => {
      throw new Error(`Element not found: ${selector} - ${e.message}`);
    });
    
    await page.fill(selector, text);
    
    res.json({ 
      success: true, 
      message: `Typed text into element with selector: ${selector}`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/screenshot', async (req, res) => {
  try {
    if (!page) {
      await connectBrowser();
    }
    
    // 페이지가 안정적인 상태가 될 때까지 기다림
    await page.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1000).catch(() => {});
    
    const screenshot = await page.screenshot({ type: 'jpeg' });
    res.set('Content-Type', 'image/jpeg');
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/eval', async (req, res) => {
  try {
    const { script } = req.body;
    if (!script) {
      return res.status(400).json({ error: 'Script is required' });
    }
    
    if (!page) {
      await connectBrowser();
    }
    
    // 페이지가 안정적인 상태인지 확인
    await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
    
    const result = await page.evaluate(script);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 브라우저의 열린 페이지 목록 가져오기
app.get('/pages', async (req, res) => {
  try {
    if (!browser) {
      await connectBrowser();
    }
    
    // CDP 연결을 통한 컨텍스트 가져오기
    const contexts = browser.contexts();
    
    // 각 컨텍스트의 페이지 수집
    let allPages = [];
    for (const context of contexts) {
      const contextPages = await context.pages();
      allPages = allPages.concat(contextPages);
    }
    
    // 페이지 정보 수집
    const pagesInfo = await Promise.all(allPages.map(async (p) => {
      try {
        await p.waitForLoadState('domcontentloaded', { timeout: 3000 }).catch(() => {});
        const url = p.url();
        let title = 'Unknown';
        
        try {
          title = await p.title();
        } catch (e) {
          console.warn(`Error getting title for page ${url}:`, e.message);
        }
        
        return { url, title };
      } catch (e) {
        return {
          url: 'unknown',
          title: 'Error',
          error: e.message
        };
      }
    }));
    
    res.json({ pages: pagesInfo });
  } catch (error) {
    console.error('Error getting pages:', error);
    res.status(500).json({ error: error.message });
  }
});

// 유튜브로 이동하는 편의 API
app.post('/youtube', async (req, res) => {
  try {
    const { query } = req.body;
    
    if (!page) {
      await connectBrowser();
    }
    
    // 유튜브로 이동
    console.log('Navigating to YouTube...');
    await page.goto('https://www.youtube.com', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    // 페이지 안정화 대기
    await page.waitForTimeout(2000).catch(() => {});
    
    // 검색어가 제공된 경우 검색 실행
    if (query) {
      try {
        // 유튜브 검색창 대기
        await page.waitForSelector('input#search', { 
          state: 'visible',
          timeout: 10000 
        });
        
        // 검색창에 텍스트 입력
        await page.fill('input#search', query);
        
        // 검색 버튼 클릭
        await page.click('button#search-icon-legacy');
        
        // 결과 기다리기
        await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
        await page.waitForTimeout(2000).catch(() => {});
        
        const title = await page.title().catch(() => 'YouTube Search Results');
        res.json({ 
          success: true, 
          message: `Navigated to YouTube and searched for "${query}"`,
          title: title,
          url: page.url()
        });
      } catch (searchError) {
        console.error('Error during YouTube search:', searchError);
        res.json({ 
          success: true, 
          message: `Navigated to YouTube but search failed: ${searchError.message}`,
          title: await page.title().catch(() => 'YouTube'),
          url: page.url()
        });
      }
    } else {
      // 검색 없이 유튜브 메인으로만 이동
      const title = await page.title().catch(() => 'YouTube');
      res.json({ 
        success: true, 
        message: 'Navigated to YouTube',
        title: title,
        url: page.url() 
      });
    }
  } catch (error) {
    console.error('YouTube navigation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Command endpoint using browser-use
app.post('/command', async (req, res) => {
  try {
    const { command } = req.body;
    if (!command) {
      return res.status(400).json({ error: 'Command is required' });
    }

    // Use browser-use to process the command
    const pythonProcess = spawn('/opt/browser-use-env/bin/python', [
      '-c',
      `from browser_use import Agent; from langchain_openai import ChatOpenAI; import asyncio; async def run(): agent = Agent(task="${command}", llm=ChatOpenAI(model="gpt-4")); result = await agent.run(); print(result); asyncio.run(run())`
    ]);

    let output = '';
    let error = '';

    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
      console.log(`Python output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      error += data.toString();
      console.error(`Python error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        return res.status(500).json({ error: `Command failed: ${error}` });
      }
      
      res.json({ 
        success: true, 
        output: output.trim(),
        message: 'Command executed successfully'
      });
    });

  } catch (error) {
    console.error('Error executing command:', error);
    res.status(500).json({ error: error.message });
  }
});

// 서버 시작
app.listen(port, '0.0.0.0', async () => {
  console.log(`Playwright API server listening on port ${port}`);
  
  // 서버가 시작되면 Chromium에 연결 시도
  try {
    await connectBrowser();
  } catch (error) {
    console.error('Failed to connect to browser on startup:', error);
    console.log('Please make sure Chromium is running with --remote-debugging-port=9222');
    console.log('Will retry connection when API is called');
  }
});

// 종료 시 리소스 정리
process.on('SIGINT', async () => {
  if (browser) {
    await browser.close();
    console.log('Browser connection closed');
  }
  process.exit(0);
}); 