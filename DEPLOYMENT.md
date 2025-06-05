# 晟治弗利个人网站部署指南

## 🚀 部署概览

本项目采用前后端分离架构，推荐以下部署方案：
- **前端**: 部署到 [Vercel](https://vercel.com) (免费、全球CDN)
- **后端**: 部署到 [Railway](https://railway.app) (免费额度、简单易用)

## 📦 前端部署 (Vercel)

### 1. 准备工作
确保前端已经构建完成：
```bash
cd client
npm run build
```

### 2. 部署到 Vercel

#### 方式一：通过 Vercel CLI (推荐)
1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 在 `client` 目录下执行：
```bash
cd client
vercel --prod
```

3. 按照提示完成部署设置

#### 方式二：通过 GitHub 自动部署
1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 使用 GitHub 账号登录
4. 选择 `client` 目录进行部署
5. 设置构建命令: `npm run build`
6. 设置输出目录: `build`

### 3. 自定义域名 (可选)
在 Vercel 控制台中可以绑定自定义域名

## 🔧 后端部署 (Railway)

### 1. 准备工作
确保后端代码已准备就绪，包含 `railway.json` 配置文件

### 2. 部署到 Railway

#### 方式一：通过 GitHub 连接 (推荐)
1. 访问 [railway.app](https://railway.app)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择 "Deploy from GitHub repo"
5. 选择包含 `server` 目录的仓库
6. 设置根目录为 `server`
7. Railway 会自动检测 Node.js 项目并部署

#### 方式二：通过 Railway CLI
1. 安装 Railway CLI：
```bash
npm i -g @railway/cli
```

2. 登录 Railway：
```bash
railway login
```

3. 在 `server` 目录下初始化项目：
```bash
cd server
railway init
railway up
```

### 3. 环境变量设置
在 Railway 控制台中设置以下环境变量：
- `NODE_ENV=production`
- `PORT` (Railway 会自动设置)

### 4. 获取后端 API 地址
部署完成后，Railway 会提供一个 `.railway.app` 域名

## 🔗 连接前后端

### 1. 更新前端 API 地址
将前端代码中的 API 请求地址更新为后端部署地址：

在 `client/src` 中的组件里，将：
```javascript
fetch('/api/articles')
```

更新为：
```javascript
fetch('https://your-backend-url.railway.app/api/articles')
```

### 2. 设置 CORS
后端已经配置了 CORS，支持跨域请求

### 3. 重新部署前端
更新 API 地址后，重新构建并部署前端

## 🌍 访问你的网站

部署完成后，你将获得：
- **前端地址**: `https://your-project.vercel.app`
- **后端地址**: `https://your-backend.railway.app`
- **API健康检查**: `https://your-backend.railway.app/api/health`

## 📊 监控和维护

### Vercel
- 访问 Vercel 控制台查看部署状态
- 查看访问日志和性能指标
- 设置自动部署（连接 GitHub）

### Railway
- 访问 Railway 控制台查看服务状态
- 查看日志和资源使用情况
- 监控 API 性能

## 🔧 故障排除

### 常见问题

1. **前端页面空白**
   - 检查构建是否成功
   - 确认 API 地址是否正确
   - 查看浏览器控制台错误

2. **API 请求失败**
   - 检查后端服务是否正常运行
   - 确认 CORS 配置
   - 检查 API 路径是否正确

3. **部署失败**
   - 检查 package.json 中的依赖
   - 确认 Node.js 版本兼容性
   - 查看部署日志错误信息

### 联系支持
如有问题，可以：
- 查看 Vercel/Railway 官方文档
- 访问相关社区论坛
- 联系技术支持

---

🎉 **恭喜！你的个人网站现在已经上线，全世界都可以访问了！** 