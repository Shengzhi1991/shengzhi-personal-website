import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('文章数据获取失败:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const categories = ['all', ...new Set(articles.map(a => a.category))];
  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(a => a.category === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <section className="section-large">
        <div className="container">
          {/* 页面标题 */}
          <div className="text-center mb-4">
            <h1 className="section-title mb-2">我的观点</h1>
            <div className="subtitle-en mb-3">My Insights</div>
            <p className="card-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
              分享关于AI、数据分析、消费者洞察和产品开发的思考与实践经验。
            </p>
          </div>

          {/* 分类过滤器 */}
          <div className="text-center mb-4">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.875rem' }}
                >
                  {category === 'all' ? '全部' : category}
                </button>
              ))}
            </div>
          </div>

          {/* 文章网格 */}
          <div className="bento-grid">
            {filteredArticles.map((article, index) => (
              <div key={article.id} className="bento-item card">
                <div className="flex items-start justify-between mb-3">
                  <span 
                    className="subtitle-en"
                    style={{ 
                      background: 'var(--primary-red-light)', 
                      padding: '4px 12px', 
                      borderRadius: '8px',
                      fontSize: '0.75rem'
                    }}
                  >
                    {article.category}
                  </span>
                  <i className="fas fa-lightbulb icon-medium"></i>
                </div>

                <h3 className="card-title mb-2">{article.title}</h3>
                <p className="card-text mb-3">{article.summary}</p>

                {/* 标签 */}
                {article.tags && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.split(',').map((tag, idx) => (
                        <span 
                          key={idx}
                          className="subtitle-en"
                          style={{ 
                            background: 'var(--bg-secondary)', 
                            padding: '2px 8px', 
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            color: 'var(--text-tertiary)'
                          }}
                        >
                          #{tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 文章信息和阅读按钮 */}
                <div className="flex items-center justify-between">
                  <div className="subtitle-en" style={{ fontSize: '0.875rem' }}>
                    {new Date(article.created_at).toLocaleDateString('zh-CN')}
                  </div>
                  <Link 
                    to={`/articles/${article.id}`} 
                    className="btn btn-primary"
                    style={{ fontSize: '0.875rem' }}
                  >
                    阅读全文 <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>

                <div className="highlight-overlay"></div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center mt-4">
              <p className="card-text">该分类下暂无文章</p>
            </div>
          )}
        </div>
      </section>

      {/* 文章统计 */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="bento-grid-large">
            <div className="bento-item bento-item-wide text-center highlight-gradient">
              <h2 className="section-title text-white mb-3">知识分享</h2>
              <div className="subtitle-en text-white mb-4" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Knowledge Sharing
              </div>
              <p className="text-white mb-4" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                通过文章分享，传递有价值的观点和实践经验
              </p>
            </div>
            
            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{articles.length}</div>
              <div className="card-title mb-1">总文章数</div>
              <div className="subtitle-en">Total Articles</div>
            </div>

            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{categories.length - 1}</div>
              <div className="card-title mb-1">文章类别</div>
              <div className="subtitle-en">Categories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage; 