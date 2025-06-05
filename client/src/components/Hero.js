import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-bg"></div>
          
          {/* 英雄标题 */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="title-en" style={{ marginBottom: '1rem', opacity: 0.8 }}>
              AI Practitioner & Media Influencer
            </p>
            <h1 className="hero-title" style={{ marginBottom: '2rem' }}>
              晟治弗利
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }}>
              AI实战培训讲师 • 自媒体博主 • 世界500强公司项目合伙人
              <br />
              专注AI实践，AIP打造、AI媒体营销、AI办公提效
            </p>
          </div>

          {/* 统计数据 */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="mega-number">10W+</div>
              <div className="stat-label">自媒体粉丝</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                跨平台影响力
              </p>
            </div>
            
            <div className="stat-card">
              <div className="mega-number">1000+</div>
              <div className="stat-label">培训学员</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                AI实战技能提升
              </p>
            </div>
            
            <div className="stat-card">
              <div className="mega-number">5+</div>
              <div className="stat-label">年实战经验</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                AI领域深耕
              </p>
            </div>
            
            <div className="stat-card">
              <div className="mega-number">500强</div>
              <div className="stat-label">企业合伙人</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                项目合作经验
              </p>
            </div>
          </div>

          {/* 核心服务 */}
          <div style={{
            background: 'var(--surface)',
            padding: '3rem',
            borderRadius: '24px',
            margin: '4rem 0',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>
              核心服务领域
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  icon: 'fas fa-chalkboard-teacher',
                  title: 'AI实战培训',
                  description: '专业的AI工具使用和提示词工程培训'
                },
                {
                  icon: 'fas fa-cogs',
                  title: 'AIP产品打造',
                  description: '从概念到落地的AI产品全流程服务'
                },
                {
                  icon: 'fas fa-bullhorn',
                  title: 'AI媒体营销',
                  description: '基于AI技术的内容创作和传播策略'
                },
                {
                  icon: 'fas fa-handshake',
                  title: '企业AI咨询',
                  description: '为企业提供AI战略和数字化转型服务'
                }
              ].map((service, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'var(--primary-color)',
                    fontSize: '1.5rem'
                  }}>
                    <i className={service.icon}></i>
                  </div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    {service.title}
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 社交媒体链接 */}
          <div style={{ textAlign: 'center' }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              关注我的自媒体平台
            </h4>
            <div className="social-links" style={{ justifyContent: 'center' }}>
              <a 
                href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAHCVo9XSrsXcPg3KoTS8S2uNUfGEmSmQo8JLFmTwc3Dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="今日头条"
              >
                <i className="fas fa-newspaper"></i>
              </a>
              
              <a 
                href="https://d1.v3z.cn/Z98Enr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="微信公众号"
              >
                <i className="fab fa-weixin"></i>
              </a>
              
              <a 
                href="https://www.douyin.com/user/MS4wLjABAAAAvHvsMfDXVVjYyaJat6Iw8q8MSVcqrosEgUI5fgZbA9A"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="抖音号"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 