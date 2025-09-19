#!/bin/bash

# Threads Token Refresh Script
# This script should be run via cron every 25 days

# 프로젝트 디렉토리로 이동
cd /home/lua1012/LuaBerry_PortfolioSite

# 환경 설정
ENV_FILE=".env"
LOG_FILE="/home/lua1012/LuaBerry_PortfolioSite/cron-token-refresh.log"

# .env 파일에서 현재 토큰 읽기
CURRENT_TOKEN=$(grep "THREAD_ACCESS_TOKEN=" $ENV_FILE | cut -d'"' -f2)

# 현재 시간 로그
echo "============================================" >> "$LOG_FILE"
echo "Cron job started at: $(date)" >> "$LOG_FILE"

if [ -z "$CURRENT_TOKEN" ]; then
    echo "❌ Error: THREAD_ACCESS_TOKEN not found in .env file" >> "$LOG_FILE"
    exit 1
fi

echo "🔄 Refreshing Threads access token..." >> "$LOG_FILE"

# API 호출로 토큰 갱신
RESPONSE=$(curl -s -X GET "https://graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=$CURRENT_TOKEN")

# 응답에서 새로운 토큰과 만료 시간 추출
NEW_TOKEN=$(echo $RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)
EXPIRES_IN=$(echo $RESPONSE | grep -o '"expires_in":[0-9]*' | cut -d':' -f2)

# 에러 체크
if [ -z "$NEW_TOKEN" ] || [ "$NEW_TOKEN" = "null" ]; then
    echo "❌ Token refresh failed:" >> "$LOG_FILE"
    echo "$RESPONSE" >> "$LOG_FILE"
    exit 1
fi

echo "✅ Token refreshed successfully. Expires in: $EXPIRES_IN seconds ($((EXPIRES_IN / 86400)) days)" >> "$LOG_FILE"

# .env 파일의 토큰 업데이트
sed -i "s/THREAD_ACCESS_TOKEN=\"[^\"]*\"/THREAD_ACCESS_TOKEN=\"$NEW_TOKEN\"/" $ENV_FILE

echo "💾 Token saved to .env file" >> "$LOG_FILE"

# 다음 갱신 예상 날짜 계산
NEXT_REFRESH_DATE=$(date -d "+$((EXPIRES_IN / 86400 - 5)) days" '+%Y-%m-%d %H:%M:%S')
echo "📅 Next refresh recommended: $NEXT_REFRESH_DATE" >> "$LOG_FILE"

echo "Token refresh completed successfully at: $(date)" >> "$LOG_FILE"
echo "============================================" >> "$LOG_FILE"

exit 0