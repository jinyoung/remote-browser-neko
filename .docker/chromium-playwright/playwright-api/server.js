const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { chromium } = require('playwright');

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

let browser = null;
let page = null;

// 브라우저 연결 함수
async function connectBrowser() {
  try {
    if (!browser) {
      console.log('Launching Playwright with connection to existing Chrome...');
      
      // CDP를 통해 기존 Chromium 인스턴스에 연결
      browser = await chromium.connectOverCDP('http://localhost:9222');
      console.log('Connected to browser');
      
      // CDP로 연결할 때는 contexts()를 먼저 사용해야 함
      const contexts = browser.contexts();
      console.log(`Found ${contexts.length} browser contexts`);
      
      // 컨텍스트가 없으면 새로 생성
      const context = contexts.length > 0 ? contexts[0] : await browser.newContext();
      
      // 컨텍스트의 페이지들 가져오기
      const pages = await context.pages();
      console.log(`Found ${pages.length} pages`);
      
      if (pages.length > 0) {
        page = pages[0];
        // 페이지가 로드될 때까지 기다림
        await page.waitForLoadState('domcontentloaded');
        console.log(`Connected to existing page: ${page.url()}`);
        
        try {
          const title = await page.title();
          console.log(`Page title: ${title}`);
        } catch (e) {
          console.warn('Could not get page title:', e.message);
        }
      } else {
        // 새 페이지 생성
        page = await context.newPage();
        console.log('Created new page');
      }
    }
    return { browser, page };
  } catch (error) {
    console.error('Failed to connect to browser:', error);
    throw error;
  }
}

// API 라우트 설정
app.get('/status', async (req, res) => {
  try {
    const isConnected = browser !== null;
    let title = null;
    let url = null;
    
    if (isConnected && page) {
      try {
        // 페이지가 로드될 때까지 기다림
        await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
        url = page.url();
        title = await page.title().catch(e => 'Unknown title: ' + e.message);
      } catch (e) {
        console.warn('Error getting page info:', e.message);
      }
    }
    
    res.json({
      status: 'OK',
      browserConnected: isConnected,
      currentPage: isConnected ? { title, url } : null
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/connect', async (req, res) => {
  try {
    await connectBrowser();
    let title = 'Unknown';
    
    try {
      if (page) {
        await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
        title = await page.title().catch(e => 'Unknown title');
      }
    } catch (e) {
      console.warn('Error getting page title:', e.message);
    }
    
    res.json({ 
      success: true, 
      message: 'Connected to browser',
      page: {
        title: title,
        url: page ? page.url() : 'about:blank'
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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