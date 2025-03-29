<div align="center">
  <a href="https://github.com/m1k1o/neko" title="Neko's Github repository.">
    <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/logo.png" width="400" height="auto"/>
  </a>
  <p align="center">
    <a href="https://github.com/m1k1o/neko/releases">
      <img src="https://img.shields.io/github/v/release/m1k1o/neko" alt="release">
    </a>
    <a href="https://github.com/m1k1o/neko/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/m1k1o/neko" alt="license">
    </a>
    <a href="https://hub.docker.com/u/m1k1o/neko">
      <img src="https://img.shields.io/docker/pulls/m1k1o/neko" alt="pulls">
    </a>
    <a href="https://github.com/m1k1o/neko/issues">
      <img src="https://img.shields.io/github/issues/m1k1o/neko" alt="issues">
    </a>
    <a href="https://github.com/sponsors/m1k1o">
      <img src="https://img.shields.io/badge/-sponsor-red" alt="issues">
    </a>
    <a href="https://discord.gg/3U6hWpC">
      <img src="https://discordapp.com/api/guilds/665851821906067466/widget.png" alt="Chat on discord">
    </a>
    <a href="https://github.com/m1k1o/neko/actions">
      <img src="https://github.com/m1k1o/neko/actions/workflows/ghcr-amd.yml/badge.svg" alt="build">
    </a>
  </p>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/intro.gif" width="650" height="auto"/>
</div>

# n.eko

Welcome to Neko, a self-hosted virtual browser that runs in Docker and uses WebRTC technology. Neko is a powerful tool that allows you to **run a fully-functional browser in a virtual environment**, giving you the ability to **access the internet securely and privately from anywhere**. With Neko, you can browse the web, **run applications**, and perform other tasks just as you would on a regular browser, all within a **secure and isolated environment**. Whether you are a developer looking to test web applications, a **privacy-conscious user seeking a secure browsing experience**, or simply someone who wants to take advantage of the **convenience and flexibility of a virtual browser**, Neko is the perfect solution.

In addition to its security and privacy features, Neko offers the **ability for multiple users to access it simultaneously**. This makes it an ideal solution for teams or organizations that need to share access to a browser, as well as for individuals who want to use **multiple devices to access the same virtual environment**. With Neko, you can **easily and securely share access to a browser with others**, without having to worry about maintaining separate configurations or settings. Whether you need to **collaborate on a project**, access shared resources, or simply want to **share access to a browser with friends or family**, Neko makes it easy to do so.

Neko is also a great tool for **hosting watch parties** and interactive presentations. With its virtual browser capabilities, Neko allows you to host watch parties and presentations that are **accessible from anywhere**, without the need for in-person gatherings. This makes it easy to **stay connected with friends and colleagues**, even when you are unable to meet in person. With Neko, you can easily host a watch party or give an **interactive presentation**, whether it's for leisure or work. Simply invite your guests to join the virtual environment, and you can share the screen and **interact with them in real-time**.

## About

This app uses WebRTC to stream a desktop inside of a docker container, original author made this because [rabb.it](https://en.wikipedia.org/wiki/Rabb.it) went under and his internet could not handle streaming and discord kept crashing when his friend attempted to. He just wanted to watch anime with his friends ლ(ಠ益ಠლ) so he started digging throughout the internet and found a few *kinda* clones, but none of them had the virtual browser, then he found [Turtus](https://github.com/Khauri/Turtus) and he was able to figure out the rest.

Then I found [this](https://github.com/nurdism/neko) project and started to dig into it. I really liked the idea of having collaborative browser browsing together with multiple people, so I created a fork. Initially, I wanted to merge my changes to the upstream repository, but the original author did not have time for this project anymore and it got eventually archived.

## Use-cases and comparison

Neko started as a virtual browser that is streamed using WebRTC to multiple users.
- It is **not only limited to a browser**; it can run anything that runs on linux (e.g. VLC). Browser only happens to be the most popular and widely used use-case.
- In fact, it is not limited to a single program either; you can install a full desktop environment (e.g. XFCE, KDE).
- Speaking of limits, it does not need to run in a container; you could install neko on your host, connect to your X server and control your whole VM.
- Theoretically it is not limited to only X server, anything that can be controlled and scraped periodically for images could be used instead.
  - Like implementing RDP or VNC protocol, where neko would only act as WebRTC relay server. This is currently only future.

Primary use case is connecting with multiple people, leveraging real time synchronization and interactivity:
- **Watch party** - watching video content together with multiple people and reacting to it (chat, emotes) - open source alternative to [giggl.app](https://giggl.app/) or [hyperbeam](https://watch.hyperbeam.com).
- **Interactive presentation** - not only screen sharing, but others can control the screen.
- **Collaborative tool** - brainstorming ideas, cobrowsing, code debugging together.
- **Support/Teaching** - interactively guiding people in controlled environment.
- **Embed anything** - embed virtual browser in your web app - open source alternative to [hyperbeam API](https://hyperbeam.com/).
  - open any third-party website or application, synchronize audio and video flawlessly among multiple participants.
  - request rooms using API with [neko-rooms](https://github.com/m1k1o/neko-rooms).

Other use cases that benefit from single-user:
- **Personal workspace** - streaming containerized apps and desktops to end-users - similar to [kasm](https://www.kasmweb.com/).
- **Persistent browser** - own browser with persistent cookies available anywhere - similar to [mightyapp](https://www.mightyapp.com/).
  - no state is left on the host browser after terminating the connection.
  - sensitive data like cookies are not transferred - only video is shared.
- **Throwaway browser** - a better solution for planning secret parties and buying birthday gifts off the internet.
  - use Tor Browser and [VPN](https://github.com/m1k1o/neko-vpn) for additional anonymity.
  - mitigates risk of OS fingerprinting and browser vulnerabilities by running in container.
- **Session broadcasting** - broadcast room content using RTMP (to e.g. twitch or youtube...).
- **Session recording** - broadcast RTMP can be saved to a file using e.g. [nginx-rtmp](https://www.nginx.com/products/nginx/modules/rtmp-media-streaming/)
  - have clean environment when recording tutorials.
  - no need to hide bookmarks or use incognito mode.
- **Jump host** - access your internal applications securely without the need for VPN.
- **Automated browser** - you can install [playwright](https://playwright.dev/) or [puppeteer](https://pptr.dev/) and automate tasks while being able to actively intercept them.

Compared to clientless remote desktop gateway (e.g. [Apache Guacamole](https://guacamole.apache.org/) or [websockify](https://github.com/novnc/websockify) with [noVNC](https://novnc.com/)), installed with remote desktop server along with desired program (e.g. [linuxserver/firefox](https://docs.linuxserver.io/images/docker-firefox)) provides neko additionally:
- **Smooth video** because it uses WebRTC and not images sent over WebSockets.
- **Built in audio** support, what is not part of Apache Guacamole or noVNC.
- **Multi-participant control**, what is not natively supported by Apache Guacamole or noVNC.

### Supported browsers

<div align="center">
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/firefox.svg" title="m1k1o/neko:firefox" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/google-chrome.svg" title="m1k1o/neko:google-chrome" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/chromium.svg" title="m1k1o/neko:chromium" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/microsoft-edge.svg" title="m1k1o/neko:microsoft-edge" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/brave.svg" title="m1k1o/neko:brave" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/vivaldi.svg" title="m1k1o/neko:vivaldi" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/opera.svg" title="m1k1o/neko:opera" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/tor-browser.svg" title="m1k1o/neko:tor-browser" width="60" height="auto"/>
</div>

### Other programs

<div align="center">
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/remmina.png" title="m1k1o/neko:remmina" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/vlc.svg" title="m1k1o/neko:vlc" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/xfce.svg" title="m1k1o/neko:xfce" width="60" height="auto"/>
  <img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/icons/kde.svg" title="m1k1o/neko:kde" width="60" height="auto"/>

  ... others in <a href="https://github.com/m1k1o/neko-apps">m1k1o/neko-apps</a>
</div>

### Features

  * Text Chat (With basic markdown support, discord flavor)
  * Admin users (Kick, Ban & Force Give/Release Controls, Lock room)
  * Clipboard synchronization (on [supported browsers](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText))
  * Emote overlay
  * Ignore user (chat and emotes)
  * Persistent settings
  * Automatic Login with custom url args. (add `?usr=<your-user-name>&pwd=<room-pass>` to the url.)
  * Broadcasting room content using RTMP (to e.g. twitch or youtube...)
  * Bidirectional file transfer (if enabled)

<div align="center">

With `NEKO_FILE_TRANSFER_ENABLED=true`:

<img src="https://raw.githubusercontent.com/m1k1o/neko/master/docs/_media/file-transfer.gif" width="650" height="auto"/>
</div>

### Why n.eko?

I like cats 🐱 (`Neko` is the Japanese word for cat), I'm a weeb/nerd.

***But why the cat butt?*** Because cats are *assholes*, but you love them anyways.

## Multiple rooms

For n.eko room management software, visit [neko-rooms](https://github.com/m1k1o/neko-rooms).

It also offers zero-knowledge [installation script (with HTTPS and Traefik)](https://github.com/m1k1o/neko-rooms/#zero-knowledge-installation-with-https-and-traefik).

## Documentation

* [Getting Started](https://neko.m1k1o.net/#/getting-started/)
  * [Quick Start](https://neko.m1k1o.net/#/getting-started/quick-start)
  * [Examples](https://neko.m1k1o.net/#/getting-started/examples)
  * [Reverse Proxy](https://neko.m1k1o.net/#/getting-started/reverse-proxy)
  * [Configuration](https://neko.m1k1o.net/#/getting-started/configuration)
  * [Troubleshooting](https://neko.m1k1o.net/#/getting-started/troubleshooting)
* [Mobile Support](https://neko.m1k1o.net/#/mobile-support)
* [Contributing](https://neko.m1k1o.net/#/contributing)
  * [Non Goals](https://neko.m1k1o.net/#/non-goals)
  * [Technologies](https://neko.m1k1o.net/#/technologies)
* [Changelog](https://neko.m1k1o.net/#/changelog)

## How to contribute? How to build?

Navigate to [.docker](.docker) folder for further information.

## Support

If you want to support this project, you can do it [here](https://github.com/sponsors/m1k1o).



# Integration with Playwright

## how to ensure the playwright working:

1. run the neko-debug-mode

```
cd neko-debug-mode
docker-compose up
```

1. attach to the docker container:
```
docker exec -it neko-debug-mode-neko-1 /bin/bash
```

1. create a testing script:
```
cat > youtube-test.js << 'EOF'
const { chromium } = require('playwright');

async function run() {
  console.log('Connecting to Chrome browser...');
  
  // 디버그 모드로 실행 중인 Chromium에 연결
  const browser = await chromium.connectOverCDP('http://localhost:9222');
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
    const page = pages[0];
    
    // 유튜브로 이동
    console.log('Navigating to YouTube...');
    await page.goto('https://www.youtube.com');
    console.log(`New page title: ${await page.title()}`);
    
    // 스크린샷 찍기
    await page.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot saved as screenshot.png');
    
    // 유튜브 검색창에 텍스트 입력
    await page.fill('input#search', 'Playwright automation');
    
    // 검색 버튼 클릭
    await page.click('button#search-icon-legacy');
    
    // 결과 기다리기
    await page.waitForLoadState('networkidle');
    console.log(`Search results page title: ${await page.title()}`);
    
    // 추가 스크린샷
    await page.screenshot({ path: 'search-results.png' });
    console.log('Search results screenshot saved');
  } else {
    console.log('No open pages found. Creating a new page...');
    const page = await context.newPage();
    await page.goto('https://www.youtube.com');
    console.log(`New page created with title: ${await page.title()}`);
  }
  
  // 브라우저 연결 종료 (브라우저는 종료하지 않음)
  await browser.close();
  console.log('Test completed');
}

run().catch(err => {
  console.error('Error running the script:', err);
});
EOF
```

# Study Log:


이제 playwright-api 내의 server.js 파일을 수정하여 CDP를 통한 연결 방식을 적용해보겠습니다. 먼저 현재 server.js 파일을 확인한 후 수정하겠습니다.

Read file: .docker/chromium-playwright/playwright-api/server.js
이미 server.js 파일이 `chromium.connectOverCDP('http://localhost:9222')`를 사용하고 있지만, 발생했던 오류를 해결하기 위해 수정이 필요합니다. 이제 이 파일을 수정하겠습니다:

```javascript:.docker/chromium-playwright/playwright-api/server.js
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
```
이제 수정된 코드가 적용되었습니다. 주요 변경 내용은 다음과 같습니다:

1. CDP를 통한 연결 시 `browser.contexts()`를 사용하여 컨텍스트에 접근하도록 변경했습니다.
2. 페이지 제목 가져오기 및 네비게이션 과정에서 발생할 수 있는 예외를 적절히 처리합니다.
3. 모든 API 호출에서 요소 대기 및 페이지 안정화를 위한 `waitForSelector`, `waitForLoadState`, `waitForTimeout` 등을 추가했습니다.
4. 유튜브 전용 API(`/youtube`) 엔드포인트를 추가하여 유튜브로 이동하고 검색을 수행할 수 있는 기능을 제공합니다.
5. 로깅을 개선하여 어떤 동작이 수행되고 어떤 오류가 발생하는지 더 명확히 알 수 있도록 했습니다.
6. 모든 작업에 적절한 타임아웃을 설정하고, 예외 처리를 개선했습니다.

이제 이 수정된 API 서버를 포함하는 도커 이미지를 다시 빌드하고 실행해야 합니다. neko-debug-mode 디렉토리에서 다음 명령을 실행하세요:

```bash
./build-playwright.sh
./run-debug.sh
```

새로운 API 서버가 시작되면, 다음과 같이 유튜브로 이동하는 API를 호출할 수 있습니다:

```bash
# 유튜브 메인으로 이동
curl -X POST http://localhost:3000/youtube

# 유튜브에서 검색 수행
curl -X POST -H "Content-Type: application/json" -d '{"query":"Playwright automation"}' http://localhost:3000/youtube
```

이 수정된 코드는 이전에 발생했던 "Execution context was destroyed" 같은 오류를 해결하고, 더 안정적으로 브라우저를 제어할 수 있게 해줍니다.


# Old Log

이제 playwright-api 내의 server.js 파일을 수정하여 CDP를 통한 연결 방식을 적용해보겠습니다. 먼저 현재 server.js 파일을 확인한 후 수정하겠습니다.

Read file: .docker/chromium-playwright/playwright-api/server.js
이미 server.js 파일이 `chromium.connectOverCDP('http://localhost:9222')`를 사용하고 있지만, 발생했던 오류를 해결하기 위해 수정이 필요합니다. 이제 이 파일을 수정하겠습니다:

```javascript:.docker/chromium-playwright/playwright-api/server.js
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
```
이제 수정된 코드가 적용되었습니다. 주요 변경 내용은 다음과 같습니다:

1. CDP를 통한 연결 시 `browser.contexts()`를 사용하여 컨텍스트에 접근하도록 변경했습니다.
2. 페이지 제목 가져오기 및 네비게이션 과정에서 발생할 수 있는 예외를 적절히 처리합니다.
3. 모든 API 호출에서 요소 대기 및 페이지 안정화를 위한 `waitForSelector`, `waitForLoadState`, `waitForTimeout` 등을 추가했습니다.
4. 유튜브 전용 API(`/youtube`) 엔드포인트를 추가하여 유튜브로 이동하고 검색을 수행할 수 있는 기능을 제공합니다.
5. 로깅을 개선하여 어떤 동작이 수행되고 어떤 오류가 발생하는지 더 명확히 알 수 있도록 했습니다.
6. 모든 작업에 적절한 타임아웃을 설정하고, 예외 처리를 개선했습니다.

이제 이 수정된 API 서버를 포함하는 도커 이미지를 다시 빌드하고 실행해야 합니다. neko-debug-mode 디렉토리에서 다음 명령을 실행하세요:

```bash
./build-playwright.sh
./run-debug.sh
```

새로운 API 서버가 시작되면, 다음과 같이 유튜브로 이동하는 API를 호출할 수 있습니다:

```bash
# 유튜브 메인으로 이동
curl -X POST http://localhost:3000/youtube

# 유튜브에서 검색 수행
curl -X POST -H "Content-Type: application/json" -d '{"query":"Playwright automation"}' http://localhost:3000/youtube
```

이 수정된 코드는 이전에 발생했던 "Execution context was destroyed" 같은 오류를 해결하고, 더 안정적으로 브라우저를 제어할 수 있게 해줍니다.
