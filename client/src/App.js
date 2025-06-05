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

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 获取文章数据
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/api/articles`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('获取文章失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();

    // 初始化 Framer Motion
    if (window.Motion) {
      console.log('Framer Motion loaded successfully');
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
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