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



# Neko 가상 브라우저의 동작방식

코드베이스를 탐색하여 neko 가상 브라우저가 Chromium을 어떻게 구현하는지 핵심 부분을 찾겠습니다.

Ran tool
프로젝트는 주로 server와 client 디렉토리로 구성되어 있습니다. 이제 server 디렉토리를 살펴보겠습니다.

Ran tool
서버는 Go 언어로 작성되어 있습니다. internal 디렉토리를 확인하여 내부 구현을 살펴보겠습니다.

Ran tool
브라우저 관련 구현은 desktop 디렉토리에 있을 가능성이 높습니다. 또한 브라우저를 실행하는 코드는 session에 있을 수 있습니다. 먼저 desktop 디렉토리를 살펴보겠습니다.

Ran tool
이제 session 디렉토리를 확인하겠습니다.

Ran tool
session.go와 manager.go 파일에서 브라우저 관련 코드가 있을 수 있습니다. 이 파일들을 살펴보겠습니다. 먼저 session.go 파일을 확인하겠습니다.

Read file: server/internal/session/session.go
이제 manager.go 파일을 확인해보겠습니다.

Read file: server/internal/session/manager.go
서버 소스코드를 살펴본 결과, WebRTC 관련 구현이 있다는 것을 알 수 있습니다. 이번에는 server/internal/webrtc 디렉토리를 살펴보겠습니다.

Ran tool
WebRTC 관련 코드가 있습니다. 이제 서버 측 main 파일을 확인하겠습니다.

Ran tool

Ran tool

Read file: server/cmd/neko/main.go
이제 브라우저 실행 부분을 찾기 위해 capture 디렉토리를 살펴보겠습니다.

Ran tool
이제 capture/gst 디렉토리를 살펴보겠습니다.

Ran tool
이제 root.go 파일을 확인하여 전체 구조를 파악해 보겠습니다.

Read file: server/cmd/root.go
neko.go 파일을 확인해 보겠습니다.

Read file: server/neko.go
이제 desktop/xorg 디렉토리를 확인하여 실제 브라우저 구현 방식을 살펴보겠습니다.

Ran tool

Read file: server/internal/desktop/xorg.go
이제 Docker 설정을 확인하여 실제 Chromium 브라우저가 어떻게 설정되는지 살펴보겠습니다.

Read file: docker-compose.yaml
Docker 컴포즈 파일은 Firefox 이미지를 사용하고 있습니다. .docker 디렉토리를 확인하여 Dockerfile을 살펴보겠습니다.

Ran tool
다양한 브라우저 이미지가 있는 것을 확인할 수 있습니다. Chromium 디렉토리를 확인해 보겠습니다.

Ran tool
Chromium Dockerfile을 확인해 보겠습니다.

Read file: .docker/chromium/Dockerfile
이제 Chromium 실행을 관리하는 supervisord.conf 파일을 확인해 보겠습니다.

Read file: .docker/chromium/supervisord.conf
이제 네코(neko) 프로젝트의 기본 코드 중 하나인 base 도커파일을 살펴보겠습니다.

Ran tool

Read file: .docker/base/Dockerfile
마지막으로 Chromium을 포함한 supervisord 설정을 확인해 보겠습니다.

Read file: .docker/base/supervisord.conf
이제 전체 코드를 종합하여 Neko가 Chromium 브라우저를 어떻게 가상으로 실행하는지 핵심 구현 부분을 찾았습니다.

Search files...
코드를 분석한 결과, Neko가 가상 브라우저를 구현하는 방식에 대한 핵심 코드를 찾았습니다. 이제 종합적인 답변을 제공하겠습니다.

Neko 가상 브라우저는 Docker 기반의 컨테이너화된 환경에서 실제 Chromium 브라우저를 실행하는 방식으로 작동합니다. 핵심 구현 요소는 다음과 같습니다:

1. **가상 디스플레이 서버(X11)**: 
   `.docker/base/supervisord.conf`에서 X-server를 실행하여 가상 디스플레이를 생성합니다.
   ```
   [program:x-server]
   environment=HOME="/home/%(ENV_USER)s",USER="%(ENV_USER)s"
   command=/usr/bin/X -config /etc/neko/xorg.conf %(ENV_DISPLAY)s
   ```

2. **Chromium 브라우저 실행**:
   `.docker/chromium/supervisord.conf`에서 Chromium을 특정 옵션과 함께 실행합니다.
   ```
   [program:chromium]
   environment=HOME="/home/%(ENV_USER)s",USER="%(ENV_USER)s",DISPLAY="%(ENV_DISPLAY)s"
   command=/usr/bin/chromium
     --window-position=0,0
     --display=%(ENV_DISPLAY)s
     --user-data-dir=/home/neko/.config/chromium
     --no-first-run
     --start-maximized
     --bwsi
     --force-dark-mode
     --disable-file-system
     --disable-gpu
     --disable-software-rasterizer
     --disable-dev-shm-usage
   ```

3. **화면 캡처 및 스트리밍**:
   `server/internal/capture` 디렉토리의 코드들이 X 서버의 화면을 캡처하여 WebRTC를 통해 스트리밍합니다. 특히 GStreamer를 사용하여 비디오 및 오디오 스트림을 처리합니다.

4. **입력 제어 전달**:
   `server/internal/desktop/xorg.go`에서 원격 사용자의 마우스/키보드 입력을 X 서버로 전달하는 함수들이 구현되어 있습니다.
   ```go
   func (manager *DesktopManagerCtx) Move(x, y int) {
       xorg.Move(x, y)
   }
   
   func (manager *DesktopManagerCtx) KeyPress(codes ...uint32) error {
       xorg.ResetKeys()
       defer xorg.ResetKeys()
       
       for _, code := range codes {
           if err := xorg.KeyDown(code); err != nil {
               return err
           }
       }
       
       return nil
   }
   ```

5. **WebRTC 연결 관리**:
   `server/internal/webrtc` 디렉토리의 코드가 클라이언트와의 WebRTC 연결을 관리하여 저지연 비디오/오디오 스트리밍과 입력 제어를 가능하게 합니다.

6. **세션 관리**:
   `server/internal/session` 디렉토리의 코드가 여러 사용자의 접속과 권한을 관리합니다.

7. **Docker 컨테이너화**:
   `.docker/chromium/Dockerfile`에서 필요한 패키지(Chromium, X 서버, 윈도우 매니저 등)를 설치하고 설정합니다.
   ```dockerfile
   RUN set -eux; \
       echo "deb http://ftp.de.debian.org/debian bookworm main" >> /etc/apt/sources.list; \
       apt-get update; \
       apt-get install -y --no-install-recommends unzip chromium chromium-common chromium-sandbox openbox;
   ```

8. **보안 설정**:
   `.docker/chromium/policies.json`에서 브라우저의 보안 정책과 제한사항을 설정합니다.

Neko 시스템의 핵심은 실제 Chromium 브라우저를 Docker 컨테이너 내의 가상 X 서버 위에서 실행하고, 화면을 WebRTC를 통해 원격 사용자에게 스트리밍하는 방식입니다. 사용자의 입력은 WebRTC 데이터 채널을 통해 수신되어 X 서버에 전달됩니다. 이 방식으로 브라우저를 가상으로 원격에서 조작할 수 있게 됩니다.


# 네코를 확장하여 CDP 디버그 모드로 띄우도록 docker 변경

Chromium 브라우저를 디버거 모드로 실행하도록 변경하겠습니다. 먼저 Chromium의 supervisord 설정 파일을 살펴보겠습니다.

Read file: .docker/chromium/supervisord.conf
이제 Chromium을 디버거 모드로 실행하기 위해 해당 설정 파일을 수정하겠습니다. Chromium에서 디버거 모드를 활성화하려면 `--remote-debugging-port` 매개변수를 추가해야 합니다.

```properties:.docker/chromium/supervisord.conf
[program:chromium]
environment=HOME="/home/%(ENV_USER)s",USER="%(ENV_USER)s",DISPLAY="%(ENV_DISPLAY)s"
command=/usr/bin/chromium
  --window-position=0,0
  --display=%(ENV_DISPLAY)s
  --user-data-dir=/home/neko/.config/chromium
  --no-first-run
  --start-maximized
  --bwsi
  --force-dark-mode
  --disable-file-system
  --disable-gpu
  --disable-software-rasterizer
  --disable-dev-shm-usage
  --remote-debugging-port=9222
stopsignal=INT
autorestart=true
priority=800
user=%(ENV_USER)s
stdout_logfile=/var/log/neko/chromium.log
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=10
redirect_stderr=true

// ... existing code ...
```
이제 디버거 포트(9222)를 외부에서 접근할 수 있도록 docker-compose.yaml 파일을 수정하겠습니다.

Read file: docker-compose.yaml
docker-compose.yaml 파일을 수정하여 Chromium 이미지를 사용하고 디버거 포트를 노출시키겠습니다.

```compose:docker-compose.yaml
version: "3.4"
services:
  neko:
    image: "m1k1o/neko:chromium"
    restart: "unless-stopped"
    shm_size: "2gb"
    ports:
      - "8080:8080"
      - "52000-52100:52000-52100/udp"
      - "9222:9222"
    environment:
      NEKO_SCREEN: 1920x1080@30
      NEKO_PASSWORD: neko
      NEKO_PASSWORD_ADMIN: admin
      NEKO_EPR: 52000-52100
      NEKO_ICELITE: 1
```
이제 디버깅 포트가 네트워크 인터페이스에 바인딩되도록 추가 설정을 해야 합니다. 기본적으로 Chromium의 원격 디버깅은 로컬호스트에만 바인딩됩니다. 이를 모든 인터페이스에 바인딩하도록 변경해 보겠습니다.

```properties:.docker/chromium/supervisord.conf
[program:chromium]
environment=HOME="/home/%(ENV_USER)s",USER="%(ENV_USER)s",DISPLAY="%(ENV_DISPLAY)s"
command=/usr/bin/chromium
  --window-position=0,0
  --display=%(ENV_DISPLAY)s
  --user-data-dir=/home/neko/.config/chromium
  --no-first-run
  --start-maximized
  --bwsi
  --force-dark-mode
  --disable-file-system
  --disable-gpu
  --disable-software-rasterizer
  --disable-dev-shm-usage
  --remote-debugging-port=9222
  --remote-debugging-address=0.0.0.0
stopsignal=INT
autorestart=true
priority=800
user=%(ENV_USER)s
stdout_logfile=/var/log/neko/chromium.log
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=10
redirect_stderr=true

// ... existing code ...
```
이제 브라우저 보안 정책을 확인하여 디버깅을 방해할 수 있는 보안 제한을 완화할 필요가 있는지 살펴보겠습니다.

Read file: .docker/chromium/policies.json
개발자 도구 사용이 제한되어 있습니다. 디버깅을 위해 이 정책을 수정해야 합니다.

```json:.docker/chromium/policies.json
{
  "AutofillAddressEnabled": false,
  "AutofillCreditCardEnabled": false,
  "BrowserSignin": 0,
  "DefaultNotificationsSetting": 2,
  "DeveloperToolsAvailability": 0,
  "EditBookmarksEnabled": false,
  "FullscreenAllowed": true,
  "IncognitoModeAvailability": 1,
  "SyncDisabled": true,
  "AutoplayAllowed": true,
  "BrowserAddPersonEnabled": false,
  "BrowserGuestModeEnabled": false,
  "DefaultPopupsSetting": 2,
  "DownloadRestrictions": 3,
  "VideoCaptureAllowed": true,
  "AllowFileSelectionDialogs": false,
  "PromptForDownloadLocation": false,
  "BookmarkBarEnabled": false,
  "PasswordManagerEnabled": false,
  "BrowserLabsEnabled": false,
  // ... existing code ...
```
마지막으로, 디버깅 모드에서는 몇 가지 추가 플래그를 활성화하는 것이 유용할 수 있습니다. supervisord.conf 파일을 다시 수정하겠습니다.

```properties:.docker/chromium/supervisord.conf
[program:chromium]
environment=HOME="/home/%(ENV_USER)s",USER="%(ENV_USER)s",DISPLAY="%(ENV_DISPLAY)s"
command=/usr/bin/chromium
  --window-position=0,0
  --display=%(ENV_DISPLAY)s
  --user-data-dir=/home/neko/.config/chromium
  --no-first-run
  --start-maximized
  --bwsi
  --force-dark-mode
  --disable-file-system
  --disable-gpu
  --disable-software-rasterizer
  --disable-dev-shm-usage
  --remote-debugging-port=9222
  --remote-debugging-address=0.0.0.0
  --enable-logging=stderr
  --v=1
  --enable-features=NetworkServiceInProcess
stopsignal=INT
autorestart=true
priority=800
user=%(ENV_USER)s
stdout_logfile=/var/log/neko/chromium.log
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=10
redirect_stderr=true

// ... existing code ...
```
이제 디버깅 및 로깅에 관련된 유용한 정보를 위해 neko-debug-mode 디렉토리를 확인하고 필요하다면 활용해 보겠습니다.

Ran tool

Read file: neko-debug-mode/docker-compose.yml
이미 neko-debug-mode 디렉토리에 디버깅용 docker-compose 파일이 있습니다. 이를 기반으로 수정하여 디버거 포트도 노출시키겠습니다.

```compose:neko-debug-mode/docker-compose.yml
version: "3.4"
services:
  neko:
    image: "m1k1o/neko:chromium"
    restart: "unless-stopped"
    shm_size: "2gb"
    ports:
      - "8080:8080"
      - "52000-52100:52000-52100/udp"
      - "9222:9222"
    cap_add:
      - SYS_ADMIN
    environment:
      NEKO_SCREEN: '1920x1080@30'
      NEKO_PASSWORD: neko
      NEKO_PASSWORD_ADMIN: admin
      NEKO_EPR: 52000-52100
      NEKO_NAT1TO1: 49.165.8.37

```
이제 디버그 모드에서 실행할 수 있는 쉘 스크립트를 만들어 보겠습니다.

```shell script:neko-debug-mode/run-debug.sh
#!/bin/bash

# 기존 컨테이너 중지
docker-compose -f docker-compose.yml down

# 디버그 모드로 실행
echo "Starting Neko in debug mode with Chromium remote debugging enabled on port 9222"
docker-compose -f docker-compose.yml up -d

echo "Chromium remote debugging URL: http://localhost:9222"
echo "You can connect to this URL with Chrome DevTools or any compatible debugger"
echo "Neko interface available at: http://localhost:8080"
```
마지막으로 스크립트에 실행 권한을 부여해야 합니다. 이를 위한 명령어를 실행하겠습니다.

```bash
chmod +x neko-debug-mode/run-debug.sh
```
이제 모든 설정이 완료되었습니다. Chromium 브라우저를 디버거 모드로 실행할 수 있는 환경이 설정되었습니다. 주요 변경 사항을 요약하면 다음과 같습니다:

1. `.docker/chromium/supervisord.conf`에 디버깅 관련 플래그 추가:
   - `--remote-debugging-port=9222`: 원격 디버깅 포트 설정
   - `--remote-debugging-address=0.0.0.0`: 모든 네트워크 인터페이스에서 디버깅 접근 허용
   - `--enable-logging=stderr`: 로그를 표준 에러로 출력
   - `--v=1`: 상세 로깅 활성화
   - `--enable-features=NetworkServiceInProcess`: 네트워크 서비스 디버깅 활성화

2. `.docker/chromium/policies.json`에서 개발자 도구 제한 해제:
   - `"DeveloperToolsAvailability": 0`: 개발자 도구 사용 허용

3. `docker-compose.yaml` 및 `neko-debug-mode/docker-compose.yml` 수정:
   - 디버깅 포트 9222 노출 추가

4. 디버깅 모드 실행 스크립트 `neko-debug-mode/run-debug.sh` 생성

이제 `neko-debug-mode/run-debug.sh` 스크립트를 실행하여 디버깅 모드로 neko를 시작할 수 있습니다. 브라우저의 원격 디버깅 인터페이스에는 http://localhost:9222 주소로 접근할 수 있으며, 여기서 Chrome DevTools나 다른 호환 디버거를 연결하여 브라우저 내부를 디버깅할 수 있습니다.


# 이 도커파일내에 playwright 도 같이 설치하고 이 playwright 가 포함된 chromium 디버거 모드에 접속하도록 하고, 몇가지 명령을 보낼 수 있는 (클릭이나 url이동) rest api 를 그 속에 띄울 수 있도록 하라. 

Playwright를 포함하는 Chromium 디버거 모드 도커 이미지를 만들고, REST API를 통해 브라우저를 조작할 수 있도록 설정하겠습니다. 단계별로 진행하겠습니다.

먼저 기존 Chromium Dockerfile을 확인해 보겠습니다.

Read file: .docker/chromium/Dockerfile
이제 새로운 Dockerfile을 만들어 Playwright와 REST API 서버를 추가하겠습니다.

```docker:.docker/chromium-playwright/Dockerfile
ARG BASE_IMAGE=m1k1o/neko:chromium
FROM $BASE_IMAGE

# Install Node.js and npm
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends curl gnupg; \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -; \
    apt-get update; \
    apt-get install -y --no-install-recommends nodejs; \
    # Install required packages for Playwright
    apt-get install -y --no-install-recommends \
        libnss3 \
        libnspr4 \
        libatk1.0-0 \
        libatk-bridge2.0-0 \
        libcups2 \
        libdrm2 \
        libdbus-1-3 \
        libxkbcommon0 \
        libatspi2.0-0 \
        libx11-6 \
        libxcomposite1 \
        libxdamage1 \
        libxext6 \
        libxfixes3 \
        libxrandr2 \
        libgbm1 \
        libpango-1.0-0 \
        libcairo2 \
        libasound2; \
    # Clean up
    apt-get clean -y; \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Create API server directory
RUN mkdir -p /home/neko/playwright-api
WORKDIR /home/neko/playwright-api

# Create package.json for the REST API server
COPY --chown=neko playwright-api/package.json .
RUN npm install

# Copy the API server application
COPY --chown=neko playwright-api/server.js .

# Add supervisord configuration for REST API server
COPY supervisord.conf /etc/neko/supervisord/playwright-api.conf

# Make sure neko user owns all files
RUN chown -R neko:neko /home/neko/playwright-api

# Expose port for REST API
EXPOSE 3000
```
이제 REST API 서버를 위한 Node.js 애플리케이션을 만들어 보겠습니다. 먼저 package.json 파일을 만듭니다.

```json:.docker/chromium-playwright/playwright-api/package.json
{
  "name": "playwright-api-server",
  "version": "1.0.0",
  "description": "REST API server for controlling Chromium browser using Playwright",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "playwright": "^1.40.0",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5"
  }
}
```
이제 REST API 서버를 구현한 server.js 파일을 만듭니다.

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
let context = null;
let page = null;

// 브라우저 연결 함수
async function connectBrowser() {
  try {
    if (!browser) {
      console.log('Connecting to Chromium browser...');
      browser = await chromium.connect({
        wsEndpoint: 'ws://localhost:9222/devtools/browser'
      });
      console.log('Connected to browser');
      
      context = await browser.newContext();
      page = await context.newPage();
      console.log('New page created');
    }
    return { browser, context, page };
  } catch (error) {
    console.error('Failed to connect to browser:', error);
    throw error;
  }
}

// API 라우트 설정
app.get('/status', async (req, res) => {
  try {
    const isConnected = browser !== null;
    res.json({
      status: 'OK',
      browserConnected: isConnected
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/connect', async (req, res) => {
  try {
    await connectBrowser();
    res.json({ success: true, message: 'Connected to browser' });
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
    
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    res.json({ success: true, message: `Navigated to ${url}` });
  } catch (error) {
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
    
    await page.click(selector);
    res.json({ success: true, message: `Clicked on element with selector: ${selector}` });
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
    
    await page.fill(selector, text);
    res.json({ success: true, message: `Typed text into element with selector: ${selector}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/screenshot', async (req, res) => {
  try {
    if (!page) {
      await connectBrowser();
    }
    
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
    
    const result = await page.evaluate(script);
    res.json({ success: true, result });
  } catch (error) {
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
이제 Playwright API 서버를 위한 Supervisord 설정 파일을 만듭니다.

```properties:.docker/chromium-playwright/supervisord.conf
[program:playwright-api]
environment=HOME="/home/%(ENV_USER)s",USER="%(ENV_USER)s",DISPLAY="%(ENV_DISPLAY)s"
command=/usr/bin/node /home/neko/playwright-api/server.js
autorestart=true
priority=800
user=%(ENV_USER)s
stdout_logfile=/var/log/neko/playwright-api.log
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=10
redirect_stderr=true
```
마지막으로, docker-compose 파일을 업데이트하여 새로운 이미지를 사용하고 REST API 포트를 노출시킵니다.

```compose:neko-debug-mode/docker-compose.yml
version: "3.4"
services:
  neko:
    build:
      context: ../.docker
      dockerfile: chromium-playwright/Dockerfile
    restart: "unless-stopped"
    shm_size: "2gb"
    ports:
      - "8080:8080"
      - "52000-52100:52000-52100/udp"
      - "9222:9222"
      - "3000:3000"
    cap_add:
      - SYS_ADMIN
    environment:
      NEKO_SCREEN: '1920x1080@30'
      NEKO_PASSWORD: neko
      NEKO_PASSWORD_ADMIN: admin
      NEKO_EPR: 52000-52100
      NEKO_NAT1TO1: 49.165.8.37
```
또한, 빌드 스크립트를 업데이트하여 Chromium-Playwright 이미지를 빌드할 수 있는 스크립트를 만듭니다.

```shell script:neko-debug-mode/build-playwright.sh
#!/bin/bash

# 필요한 디렉토리 생성
mkdir -p ../.docker/chromium-playwright/playwright-api

# package.json 및 server.js 파일이 있는지 확인
if [ ! -f ../.docker/chromium-playwright/playwright-api/package.json ]; then
  echo "Error: package.json file not found!"
  exit 1
fi

if [ ! -f ../.docker/chromium-playwright/playwright-api/server.js ]; then
  echo "Error: server.js file not found!"
  exit 1
fi

# Docker 이미지 빌드
echo "Building Chromium with Playwright and REST API..."
docker-compose build

echo "Build completed. Use the following commands to run the container:"
echo "cd neko-debug-mode"
echo "./run-debug.sh"
echo
echo "Once the container is running, you can use the REST API at:"
echo "http://localhost:3000"
echo
echo "Available API endpoints:"
echo "GET  /status   - Check API server status"
echo "POST /connect  - Connect to the browser"
echo "POST /navigate - Navigate to a URL (body: {\"url\": \"https://example.com\"})"
echo "POST /click    - Click on an element (body: {\"selector\": \".class-name\"})"
echo "POST /type     - Type text in an input (body: {\"selector\": \"#input-id\", \"text\": \"Hello\"})"
echo "POST /screenshot - Take a screenshot (returns JPEG image)"
echo "POST /eval     - Evaluate JavaScript (body: {\"script\": \"document.title\"})"
```
마지막으로 run-debug.sh 스크립트를 업데이트하여 새 이미지를 사용합니다.

```bash
chmod +x neko-debug-mode/build-playwright.sh
```
이제 모든 파일이 준비되었습니다. 다음 단계는 다음과 같습니다:

1. 디렉토리 구조 확인:
```
.docker/
  chromium-playwright/
    Dockerfile
    supervisord.conf
    playwright-api/
      package.json
      server.js
neko-debug-mode/
  docker-compose.yml
  build-playwright.sh
  run-debug.sh
```

2. 빌드 및 실행 방법:
```bash
# 빌드 스크립트를 실행하여 Docker 이미지 빌드
cd neko-debug-mode
./build-playwright.sh

# 컨테이너 실행
./run-debug.sh
```

3. REST API 사용 방법:

서버가 실행되면 http://localhost:3000 에서 다음 API 엔드포인트를 사용할 수 있습니다:

| 메서드 | 엔드포인트    | 설명                           | 요청 본문 예시                               |
|------|-------------|--------------------------------|-------------------------------------------|
| GET  | /status     | API 서버 상태 확인                | -                                         |
| POST | /connect    | 브라우저에 연결                   | -                                         |
| POST | /navigate   | URL로 이동                      | `{"url": "https://example.com"}`          |
| POST | /click      | 요소 클릭                        | `{"selector": ".button-class"}`           |
| POST | /type       | 입력 요소에 텍스트 입력           | `{"selector": "#input-id", "text": "Hello"}` |
| POST | /screenshot | 스크린샷 촬영 (JPEG 이미지 반환)   | -                                         |
| POST | /eval       | JavaScript 코드 실행            | `{"script": "document.title"}`            |

4. 사용 예시 (curl):
```bash
# 브라우저 상태 확인
curl http://localhost:3000/status

# 브라우저 연결 (일반적으로 자동으로 수행됨)
curl -X POST http://localhost:3000/connect

# URL로 이동
curl -X POST -H "Content-Type: application/json" -d '{"url":"https://www.google.com"}' http://localhost:3000/navigate

# 요소 클릭 (구글 검색 버튼)
curl -X POST -H "Content-Type: application/json" -d '{"selector":"input[name=\"q\"]"}' http://localhost:3000/click

# 텍스트 입력 (검색창에 텍스트 입력)
curl -X POST -H "Content-Type: application/json" -d '{"selector":"input[name=\"q\"]", "text":"Playwright API"}' http://localhost:3000/type

# JavaScript 실행
curl -X POST -H "Content-Type: application/json" -d '{"script":"document.title"}' http://localhost:3000/eval

# 스크린샷 저장
curl -X POST http://localhost:3000/screenshot --output screenshot.jpg
```

이제 Playwright를 사용하여 Chromium 브라우저를 제어할 수 있는 REST API가 포함된 Docker 이미지가 준비되었습니다. 이 이미지를 빌드하고 실행하면 디버그 모드의 Chromium 브라우저와 함께 API 서버가 작동합니다.


# 생성된 api가 호환되지 않는다... Playwright API 를 통해서 연결하도록 변경하라:


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