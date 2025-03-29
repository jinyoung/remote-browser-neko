# Playwright Chrome Debugger

이 프로젝트는 Playwright를 사용하여 디버그 모드로 실행 중인 Chrome 브라우저에 연결하는 방법을 보여줍니다.

## 설치 방법

```bash
# 종속성 설치
npm install
```

## 사용 방법

### 1. Chrome 브라우저를 디버그 모드로 실행

먼저 Chrome 브라우저를 디버그 모드로 실행해야 합니다:

#### macOS:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

#### Windows:
```cmd
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
```

#### Linux:
```bash
google-chrome --remote-debugging-port=9222
```

별도의 사용자 프로필을 사용하려면 다음과 같이 추가할 수 있습니다:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="/tmp/chrome-debug-profile"
```

### 2. Playwright 스크립트 실행

Chrome이 디버그 모드로 실행된 상태에서 다음 명령어로 Playwright 스크립트를 실행할 수 있습니다:

```bash
# 기본 스크립트 실행
npm run start

# 고급 기능을 사용한 스크립트 실행
npm run advanced

# 디버그 모드로 실행 (PWDEBUG=1)
npm run debug

# 고급 스크립트를 디버그 모드로 실행
npm run debug:advanced
```

## 주요 기능

- **기본 스크립트** (`src/index.ts`): 실행 중인 Chrome 브라우저에 연결하여 새 페이지를 열고 example.com으로 이동합니다.
- **고급 스크립트** (`src/advanced.ts`): 다양한 디버깅 옵션을 사용하여 GitHub를 검색하고 스크린샷을 찍는 등의 작업을 수행합니다.

## 주요 코드 설명

```typescript
// Chrome 디버거에 연결
const browser = await chromium.connectOverCDP('http://localhost:9222');

// 새 페이지 생성
const page = await browser.newPage();

// 웹사이트로 이동
await page.goto('https://example.com');

// 브라우저 연결 종료 (브라우저는 계속 실행됨)
await browser.close();
```

## 디버깅 옵션

- `slowMo`: 각 동작 사이에 일정 시간 지연을 추가합니다.
- `timeout`: 작업 제한 시간을 설정합니다.
- `PWDEBUG=1`: Playwright의 디버그 모드를 활성화합니다.

## 참고 사항

- Chrome 브라우저가 디버그 모드로 실행 중이어야 합니다 (`--remote-debugging-port=9222`).
- Playwright 스크립트는 브라우저를 종료하지 않고 연결만 끊습니다. 