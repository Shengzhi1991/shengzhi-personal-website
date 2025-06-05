import React from 'react';

const Articles = ({ articles = [] }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="articles" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="title-en">Featured Articles</p>
          <h2 className="title-zh">精华文章</h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '1rem auto'
          }}>
            分享AI实战经验，探索技术前沿，助力个人和企业数字化转型
          </p>
        </div>

        {articles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div className="loading-spinner"></div>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              正在加载精华文章...
            </p>
          </div>
        ) : (
          <div className="bento-grid">
            {articles.map((article, index) => (
              <div 
                key={article.id} 
                className={`bento-card article-card ${index === 0 ? 'large' : ''}`}
              >
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span>{formatDate(article.created_at)}</span>
                </div>
                
                <h3 className="card-title">{article.title}</h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {article.summary}
                </p>

                {/* 标签 */}
                {article.tags && (
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem'
                  }}>
                    {article.tags.split(',').map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        style={{
                          background: 'var(--primary-light)',
                          color: 'var(--primary-color)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* 阅读更多按钮 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--primary-color)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <span>阅读全文</span>
                  <i className="fas fa-arrow-right"></i>
                </div>

                {/* 装饰性图形 */}
                <div className="line-graphic" style={{
                  top: '1rem',
                  right: '1rem',
                  width: '60px',
                  height: '60px',
                  opacity: '0.05'
                }}>
                  <svg viewBox="0 0 100 100">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" />
                    <path d="M35,35 L65,35 L65,65 L35,65 Z" />
                  </svg>
                </div>
              </div>
            ))}

            {/* 查看更多文章卡片 */}
            <div className="bento-card" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--primary-light), var(--primary-medium))',
              border: '2px dashed var(--primary-color)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--primary-color)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: 'white',
                fontSize: '2rem'
              }}>
                <i className="fas fa-plus"></i>
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                更多精彩内容
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                关注我的自媒体平台，获取最新AI实战分享
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <a 
                  href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAHCVo9XSrsXcPg3KoTS8S2uNUfGEmSmQo8JLFmTwc3Dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="fas fa-newspaper"></i>
                </a>
                <a 
                  href="https://d1.v3z.cn/Z98Enr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="fab fa-weixin"></i>
                </a>
                <a 
                  href="https://www.douyin.com/user/MS4wLjABAAAAvHvsMfDXVVjYyaJat6Iw8q8MSVcqrosEgUI5fgZbA9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles; 