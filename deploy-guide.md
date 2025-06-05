# 🚀 晟治弗利个人网站 - 快速部署指南

## 📦 准备工作
✅ 前端已构建完成 (`client/build` 文件夹已生成)
✅ 后端配置文件已准备 (`server/railway.json`)
✅ 部署配置文件已创建 (`client/vercel.json`)

## 🌐 方案一：GitHub + 自动部署（推荐）

### 1. 推送代码到GitHub
```bash
git init
git add .
git commit -m "Initial commit: 晟治弗利个人网站"
git branch -M main
git remote add origin https://github.com/你的用户名/shengzhi-personal-website.git
git push -u origin main
```

### 2. 前端部署到Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择你的GitHub仓库
5. 设置：
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. 点击 "Deploy"

### 3. 后端部署到Railway
1. 访问 [railway.app](https://railway.app)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择 "Deploy from GitHub repo"
5. 选择你的仓库
6. 设置：
   - **Root Directory**: `server`
   - Railway会自动检测Node.js项目
7. 点击 "Deploy"

## 🔗 方案二：直接CLI部署

### 前端 (Vercel)
```bash
cd client
vercel --prod
# 按提示登录并配置
```

### 后端 (Railway)
```bash
cd server
# 访问 railway.app 下载CLI
# 或使用网页版部署
```

## 📝 部署后配置

### 1. 获取后端API地址
部署完成后，Railway会提供类似这样的地址：
`https://your-project-name.railway.app`

### 2. 更新前端API配置
编辑 `client/src/config.js`：
```javascript
production: {
  API_BASE_URL: 'https://your-backend-url.railway.app'
}
```

### 3. 重新部署前端
更新配置后，重新部署前端以应用新的API地址。

## 🎉 完成！
部署完成后，您将获得：
- **前端地址**: `https://your-project.vercel.app`
- **后端地址**: `https://your-backend.railway.app`

## 📞 需要帮助？
如果遇到问题，可以：
1. 查看平台的部署日志
2. 检查API配置是否正确
3. 确认所有文件都已正确上传

---
🌟 您的个人网站即将上线，展示您的AI实战培训成果和10W+粉丝影响力！ 