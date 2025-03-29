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