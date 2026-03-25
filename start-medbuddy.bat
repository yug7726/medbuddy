@echo off
setlocal
set "ROOT=%~dp0"
set "NODE_HOME=%ROOT%.tools\node\node-v24.14.0-win-x64"
set "PATH=%NODE_HOME%;%PATH%"
start "MedBuddy Emergency API" /min "%NODE_HOME%\node.exe" "%ROOT%server\emergency-server.mjs"
call "%NODE_HOME%\npm.cmd" run dev -- --host 127.0.0.1 --port 4173
