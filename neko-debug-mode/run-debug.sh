#!/bin/bash

# 기존 컨테이너 중지
docker-compose -f docker-compose.yml down

# 디버그 모드로 실행
echo "Starting Neko in debug mode with Chromium remote debugging enabled on port 9222"
docker-compose -f docker-compose.yml up -d

echo "Chromium remote debugging URL: http://localhost:9222"
echo "You can connect to this URL with Chrome DevTools or any compatible debugger"
echo "Neko interface available at: http://localhost:8080" 