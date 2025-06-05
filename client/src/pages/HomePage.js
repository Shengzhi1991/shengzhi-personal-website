import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    products: 0,
    articles: 0,
    experience: '5+',
    location: '佛山'
  });
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, productsRes, articlesRes] = await Promise.all([
          axios.get('/api/stats'),
          axios.get('/api/products'),
          axios.get('/api/articles?limit=3')
        ]);
        
        setStats(statsRes.data);
        setProducts(productsRes.data.slice(0, 3));
        setArticles(articlesRes.data);
        setLoading(false);
      } catch (error) {
        console.error('数据获取失败:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="section-large">
        <div className="bento-container">
          <div className="bento-grid-large">
            {/* 主标题区域 */}
            <div className="bento-item bento-item-hero highlight-gradient flex items-center">
              <div>
                <div className="subtitle-en mb-2">Data Analyst & AI Developer</div>
                <h1 className="hero-title text-white mb-3">
                  数据驱动
                  <br />
                  AI创新
                </h1>
                <p className="subtitle-en text-white" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                  From Consumer Insights to AI Products
                </p>
              </div>
            </div>

            {/* 统计数据 */}
            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{stats.products}</div>
              <div className="card-title mb-1">产品</div>
              <div className="subtitle-en">Products</div>
            </div>

            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{stats.articles}</div>
              <div className="card-title mb-1">文章</div>
              <div className="subtitle-en">Articles</div>
            </div>

            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{stats.experience}</div>
              <div className="card-title mb-1">年经验</div>
              <div className="subtitle-en">Years</div>
            </div>

            {/* 个人介绍 */}
            <div className="bento-item bento-item-medium">
              <i className="fas fa-user-tie icon-large mb-3"></i>
              <h3 className="card-title">关于我</h3>
              <div className="subtitle-en mb-2">About Me</div>
              <p className="card-text">
                我是AA，常住{stats.location}的独立开发者。专注于数据分析、消费者洞察和AI产品开发。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title mb-2">我的产品</h2>
            <div className="subtitle-en">Featured Products</div>
          </div>
          
          <div className="bento-grid">
            {products.map((product, index) => (
              <div key={product.id} className="bento-item card">
                <i className="fas fa-cube icon-large mb-3"></i>
                <h3 className="card-title">{product.name}</h3>
                <div className="subtitle-en mb-2">{product.category}</div>
                <p className="card-text mb-3">{product.description}</p>
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  访问 <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">
              查看所有产品 <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 最新文章 */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title mb-2">最新观点</h2>
            <div className="subtitle-en">Latest Insights</div>
          </div>
          
          <div className="bento-grid">
            {articles.map((article, index) => (
              <div key={article.id} className="bento-item card">
                <i className="fas fa-lightbulb icon-large mb-3"></i>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-text mb-3">{article.summary}</p>
                <Link 
                  to={`/articles/${article.id}`} 
                  className="btn btn-secondary"
                >
                  阅读 <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/articles" className="btn btn-primary">
              查看所有文章 <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 