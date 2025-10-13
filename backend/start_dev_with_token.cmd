@echo off
REM Este script inicia o servidor em modo de desenvolvimento usando o token do arquivo .bat
setlocal

REM Lê o token do arquivo .bat
for /f %%i in ('node read_token.js') do (
  set AUDD_TOKEN=%%i
)

REM Inicia o servidor com o token lido
echo Iniciando servidor com token: %AUDD_TOKEN%
call npx ts-node src/server.ts