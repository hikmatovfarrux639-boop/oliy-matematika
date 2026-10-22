@echo off
chcp 65001 > nul
title Oliy Matematika Platformasi (Astro)
echo ======================================================================
echo       OLIY MATEMATIKA PLATFORMASI ISHGA TUSHMOQDA...
echo ======================================================================
echo.
echo 1. Loyiha papkasiga o'tilmoqda...
cd /d "C:\Users\asus\.gemini\antigravity\scratch\oliy-matematika"

echo 2. Brauzer ochilmoqda: http://localhost:4321 ...
timeout /t 2 /nobreak > nul
start http://localhost:4321

echo 3. Astro serveri ishga tushirilmoqda...
echo (Serverni to'xtatish uchun shu oynani yopsangiz yoki Ctrl+C bossangiz bo'ladi)
echo.
call npm run dev
pause
