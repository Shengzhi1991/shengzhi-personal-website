import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import config from './config';

// 组件导入
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BentoGrid from './components/BentoGrid';
import Articles from './components/Articles';
import Footer from './components/Footer';

// 默认文章数据（API无法连接时使用）
const defaultArticles = [
  {
    id: 1,
    title: "AI实战训练：从零基础到企业应用的完整路径",
    summary: "详细介绍如何系统性地学习AI技术，包括理论基础、实践项目和企业应用场景。涵盖机器学习、深度学习、自然语言处理等核心技术栈的学习方法和实战经验。",
    category: "AI训练",
    tags: "人工智能,机器学习,企业培训,实战项目",
    created_at: "2024-01-15"
  },
  {
    id: 2,
    title: "自媒体内容创作的AI工具应用指南",
    summary: "分享如何利用AI工具提升内容创作效率，包括文案生成、图片设计、视频剪辑等环节的AI应用技巧。帮助创作者解放生产力，专注于创意和价值输出。",
    category: "内容创作",
    tags: "自媒体,AI工具,内容创作,效率提升",
    created_at: "2024-01-10"
  },
  {
    id: 3,
    title: "企业数字化转型中的AI应用策略",
    summary: "深入探讨企业如何制定AI应用策略，从业务分析到技术选型，从试点项目到规模化部署。结合实际案例分析AI在不同行业中的落地经验和最佳实践。",
    category: "企业咨询",
    tags: "数字化转型,AI策略,企业应用,案例分析",
    created_at: "2024-01-05"
  }
];

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 获取文章数据
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/api/articles`);
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          // API响应失败，使用默认数据
          setArticles(defaultArticles);
        }
      } catch (error) {
        // API连接失败，使用默认数据
        setArticles(defaultArticles);
      } finally {
        setIsLoading(false);
      }
    };

    // 设置超时，避免长时间等待
    const timeoutId = setTimeout(() => {
      setArticles(defaultArticles);
      setIsLoading(false);
    }, 5000); // 5秒超时

    fetchArticles();

    // 初始化 Framer Motion
    if (window.Motion) {
      // Framer Motion loaded successfully
    }

    // 清理超时
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          正在加载网站内容...
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <BentoGrid />
            <Articles articles={articles} />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 