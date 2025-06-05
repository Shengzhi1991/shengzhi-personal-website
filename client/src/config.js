// API配置
const config = {
  // 开发环境
  development: {
    API_BASE_URL: 'http://localhost:5000'
  },
  
  // 生产环境 - 部署后需要更新这个地址
  production: {
    API_BASE_URL: 'https://your-backend-url.railway.app'
  }
};

// 根据环境变量选择配置
const currentConfig = config[process.env.NODE_ENV] || config.development;

export default currentConfig; 