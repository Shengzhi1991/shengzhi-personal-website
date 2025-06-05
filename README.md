# 晟治弗利个人网站

> 现代化个人网站，展示AI实战培训、自媒体影响力和专业作品集

## 🌟 网站特色

- **Bento Grid设计风格** - 现代化网格布局
- **超大字体视觉冲击** - 突出重要数据和信息
- **#E31937红色高亮** - 统一的品牌色彩
- **响应式设计** - 完美支持桌面端和移动端
- **Apple风格动效** - 流畅的交互体验
- **中英文混合排版** - 专业的视觉层次

## 📊 核心数据展示

- **10W+** 自媒体粉丝（跨平台影响力）
- **1000+** AI实战培训学员
- **5+** 年AI领域深耕经验
- **500强** 企业项目合伙人

## 🛠 技术栈

### 前端
- **React 18** - 现代化前端框架
- **CSS3** - 自定义样式系统
- **Framer Motion** - 动画效果库
- **Font Awesome** - 图标库
- **Google Fonts** - 字体资源

### 后端
- **Node.js** - 服务器运行环境
- **Express.js** - Web应用框架
- **SQLite** - 轻量级数据库
- **CORS** - 跨域资源共享
- **Helmet** - 安全中间件

## 🚀 快速开始

### 本地开发

1. **克隆项目**
```bash
git clone <repository-url>
cd shengzhi-personal-website
```

2. **安装依赖**
```bash
npm run install-all
```

3. **启动开发服务器**
```bash
npm start
```

4. **访问网站**
- 前端: http://localhost:3000
- 后端API: http://localhost:5000

### 生产部署

#### 🌐 一键部署

运行部署脚本：
```bash
deploy.bat
```

#### 🔧 手动部署

1. **前端部署 (Vercel)**
```bash
cd client
npm run build
npx vercel --prod
```

2. **后端部署 (Railway)**
```bash
cd server
npm install -g @railway/cli
railway login
railway init
railway up
```

详细部署指南请参考：[DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 项目结构

```
shengzhi-personal-website/
├── client/                 # 前端代码
│   ├── public/            # 静态资源
│   ├── src/               # 源代码
│   │   ├── components/    # React组件
│   │   ├── config.js      # 配置文件
│   │   ├── index.css      # 全局样式
│   │   └── App.js         # 主应用组件
│   ├── build/             # 构建输出
│   └── vercel.json        # Vercel配置
├── server/                # 后端代码
│   ├── server.js          # Express服务器
│   ├── package.json       # 后端依赖
│   ├── railway.json       # Railway配置
│   └── website.db         # SQLite数据库
├── DEPLOYMENT.md          # 详细部署指南
├── deploy.bat             # 部署脚本
└── README.md              # 项目说明
```

## 🎨 设计系统

### 颜色变量
```css
--primary-color: #E31937;        /* 主色调 */
--primary-light: rgba(227, 25, 55, 0.1);  /* 浅色背景 */
--text-primary: #1a1a1a;         /* 主文字 */
--text-secondary: #666;          /* 次要文字 */
--background: #ffffff;           /* 背景色 */
--surface: #f8f9fa;             /* 卡片背景 */
```

### 字体大小
- **超大标题**: `clamp(3rem, 8vw, 8rem)`
- **大数字**: `clamp(2.5rem, 6vw, 5rem)`
- **章节标题**: `clamp(2rem, 5vw, 4rem)`
- **正文**: `16px` (基准字体)

## 📱 响应式断点

- **桌面端**: `> 768px`
- **平板端**: `769px - 1024px`
- **移动端**: `< 768px`
- **小屏幕**: `< 480px`

## 🌐 API接口

### 获取文章列表
```
GET /api/articles
```

### 获取统计数据
```
GET /api/stats
```

### 健康检查
```
GET /api/health
```

## 🔒 环境配置

### 开发环境
```javascript
API_BASE_URL: 'http://localhost:5000'
```

### 生产环境
```javascript
API_BASE_URL: 'https://your-backend-url.railway.app'
```

## 📈 SEO优化

- 语义化HTML结构
- Meta标签优化
- 响应式图片
- 快速加载速度
- 移动端友好

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 📄 许可证

MIT License

## 📞 联系方式

- **今日头条**: [晟治弗利](https://www.toutiao.com/c/user/token/MS4wLjABAAAAHCVo9XSrsXcPg3KoTS8S2uNUfGEmSmQo8JLFmTwc3Dk/)
- **微信公众号**: [扫码关注](https://d1.v3z.cn/Z98Enr)
- **抖音**: [AI实战分享](https://www.douyin.com/user/MS4wLjABAAAAvHvsMfDXVVjYyaJat6Iw8q8MSVcqrosEgUI5fgZbA9A)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！ 