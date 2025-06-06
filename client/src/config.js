// API配置
const config = {
  // 开发环境
  development: {
    API_BASE_URL: 'http://localhost:5000'
  },
  
  // 生产环境 - 使用Render部署的实际地址
  production: {
    API_BASE_URL: 'https://shengzhi-personal-website.onrender.com'
  }
};

// 根据环境变量选择配置
const currentConfig = config[process.env.NODE_ENV] || config.development;

export default currentConfig; 