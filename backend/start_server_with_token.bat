@echo off
REM Start the compiled server with AUDD_TOKEN set for this process
setlocal
set "AUDD_TOKEN=fef661ca7836bd9cef7b4bd669f3feda"
cd /d "%~dp0"
node dist\server.js
