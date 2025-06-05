@echo off
echo 🚀 晟治弗利个人网站部署脚本
echo.

echo 📦 步骤1: 构建前端...
cd client
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 前端构建失败！
    pause
    exit /b 1
)
echo ✅ 前端构建成功！
echo.

echo 📋 步骤2: 检查后端配置...
cd ../server
if exist railway.json (
    echo ✅ Railway配置文件存在
) else (
    echo ❌ 缺少Railway配置文件
)
echo.

echo 🌐 部署选项:
echo 1. 安装Vercel CLI (前端部署)
echo 2. 安装Railway CLI (后端部署)
echo 3. 查看部署指南
echo 4. 退出
echo.

set /p choice=请选择操作 (1-4): 

if "%choice%"=="1" (
    echo 安装Vercel CLI...
    npm install -g vercel
    echo.
    echo 📝 接下来请手动执行:
    echo cd client
    echo vercel --prod
)

if "%choice%"=="2" (
    echo 安装Railway CLI...
    npm install -g @railway/cli
    echo.
    echo 📝 接下来请手动执行:
    echo cd server
    echo railway login
    echo railway init
    echo railway up
)

if "%choice%"=="3" (
    echo 📖 请查看 DEPLOYMENT.md 文件获取详细部署指南
    start DEPLOYMENT.md
)

if "%choice%"=="4" (
    exit /b 0
)

echo.
echo 🎉 部署准备完成！
echo 📋 详细步骤请参考 DEPLOYMENT.md 文件
pause 