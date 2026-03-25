@echo off
setlocal
set "ROOT=%~dp0"
set "NODE_HOME=%ROOT%.tools\node\node-v24.14.0-win-x64"
set "PATH=%NODE_HOME%;%PATH%"
call "%NODE_HOME%\npm.cmd" run preview -- --host
