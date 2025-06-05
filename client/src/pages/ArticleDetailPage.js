import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/articles/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error('文章获取失败:', error);
        setError('文章不存在或加载失败');
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  // 简单的Markdown渲染器
  const renderContent = (content) => {
    if (!content) return '';
    
    return content
      .split('\n')
      .map((line, index) => {
        // 处理标题
        if (line.startsWith('# ')) {
          return <h1 key={index} className="section-title mt-4 mb-3">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="card-title mt-3 mb-2">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="card-title" style={{ fontSize: '1.2rem' }}>{line.slice(4)}</h3>;
        }
        
        // 处理列表
        if (line.startsWith('- ')) {
          return (
            <div key={index} className="flex items-start gap-2 mb-1">
              <span style={{ color: 'var(--primary-red)', marginTop: '0.5rem' }}>•</span>
              <span>{line.slice(2)}</span>
            </div>
          );
        }
        
        // 处理数字列表
        if (/^\d+\.\s/.test(line)) {
          const match = line.match(/^(\d+)\.\s(.+)/);
          if (match) {
            return (
              <div key={index} className="flex items-start gap-2 mb-1">
                <span style={{ color: 'var(--primary-red)', fontWeight: '600', minWidth: '1.5rem' }}>
                  {match[1]}.
                </span>
                <span>{match[2]}</span>
              </div>
            );
          }
        }
        
        // 处理粗体
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="card-text mb-2">
              {parts.map((part, idx) => 
                idx % 2 === 1 ? 
                  <strong key={idx} style={{ color: 'var(--text-primary)' }}>{part}</strong> : 
                  part
              )}
            </p>
          );
        }
        
        // 普通段落
        if (line.trim()) {
          return <p key={index} className="card-text mb-2">{line}</p>;
        }
        
        // 空行
        return <div key={index} style={{ height: '1rem' }}></div>;
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="page-transition">
        <section className="section">
          <div className="container text-center">
            <h1 className="section-title mb-3">文章未找到</h1>
            <p className="card-text mb-4">{error || '请检查文章链接是否正确'}</p>
            <Link to="/articles" className="btn btn-primary">
              <i className="fas fa-arrow-left"></i>
              返回文章列表
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* 文章头部 */}
      <section className="section-large">
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* 返回按钮 */}
          <div className="mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem' }}
            >
              <i className="fas fa-arrow-left"></i>
              返回
            </button>
          </div>

          {/* 文章元信息 */}
          <div className="text-center mb-4">
            <span 
              className="subtitle-en mb-3"
              style={{ 
                background: 'var(--primary-red-light)', 
                padding: '6px 16px', 
                borderRadius: '12px',
                fontSize: '0.875rem',
                display: 'inline-block'
              }}
            >
              {article.category}
            </span>
            
            <h1 className="section-title mb-3">{article.title}</h1>
            
            <div className="flex items-center justify-center gap-4 text-center">
              <div className="subtitle-en">
                <i className="fas fa-calendar-alt"></i>
                {new Date(article.created_at).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="subtitle-en">
                <i className="fas fa-user"></i>
                AA
              </div>
            </div>

            {/* 标签 */}
            {article.tags && (
              <div className="mt-3">
                <div className="flex flex-wrap justify-center gap-2">
                  {article.tags.split(',').map((tag, idx) => (
                    <span 
                      key={idx}
                      className="subtitle-en"
                      style={{ 
                        background: 'var(--bg-secondary)', 
                        padding: '4px 12px', 
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        color: 'var(--text-tertiary)'
                      }}
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 摘要 */}
          {article.summary && (
            <div 
              className="card mb-4"
              style={{ 
                background: 'var(--primary-red-light)',
                border: 'none'
              }}
            >
              <div className="flex items-start gap-3">
                <i className="fas fa-quote-left icon-medium" style={{ color: 'var(--primary-red)', marginTop: '0.25rem' }}></i>
                <div>
                  <div className="subtitle-en mb-1" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                    Article Summary
                  </div>
                  <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    {article.summary}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 文章内容 */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              {renderContent(article.content)}
            </div>
          </div>
        </div>
      </section>

      {/* 文章底部 */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center">
            <h3 className="card-title mb-3">感谢阅读</h3>
            <p className="card-text mb-4">
              如果这篇文章对你有帮助，欢迎分享或查看更多内容
            </p>
            <div className="flex justify-center gap-3">
              <Link to="/articles" className="btn btn-primary">
                <i className="fas fa-list"></i>
                更多文章
              </Link>
              <Link to="/products" className="btn btn-secondary">
                <i className="fas fa-cube"></i>
                查看产品
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage; 