@echo off
REM Start the compiled server with AUDD_TOKEN set for this process
REM *** IMPORTANTE: Altere o token abaixo para usar um token AudD diferente ***
REM *** Esta alteração será automaticamente aplicada em todo o sistema ***
setlocal
set "AUDD_TOKEN=dedd3859464b7bd712cd83e14be921cd"
cd /d "%~dp0"
node dist\server.js
