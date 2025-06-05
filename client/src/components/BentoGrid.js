import React from 'react';

const BentoGrid = () => {
  return (
    <section id="work" style={{ padding: '4rem 0', background: '#fafafa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="title-en">Portfolio & Projects</p>
          <h2 className="title-zh">作品展示</h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '1rem auto'
          }}>
            致力于AI技术的实际应用，通过创新产品和内容为用户创造价值
          </p>
        </div>

        <div className="bento-grid">
          {/* 主要作品展示 */}
          <div className="bento-card large featured">
            <div className="card-subtitle">Featured Project</div>
            <h3 className="card-title">AI实战培训体系</h3>
            <div className="mega-number" style={{ color: 'rgba(255,255,255,0.9)' }}>
              1000+
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              已培训学员超过1000人，涵盖AI工具使用、提示词工程、AI办公提效等核心技能
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                AI工具使用
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                提示词工程
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                办公提效
              </span>
            </div>
          </div>

          {/* 自媒体影响力 */}
          <div className="bento-card">
            <div className="card-subtitle">Media Influence</div>
            <h3 className="card-title">自媒体矩阵</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
              <div className="mega-number" style={{ fontSize: '4rem' }}>10W+</div>
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>总粉丝数</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>跨平台影响力</div>
              </div>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>今日头条</span>
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>主力平台</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>微信公众号</span>
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>专业内容</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>抖音</span>
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>视频分享</span>
              </div>
            </div>
          </div>

          {/* AI产品开发 */}
          <div className="bento-card">
            <div className="card-subtitle">Product Development</div>
            <h3 className="card-title">AI产品矩阵</h3>
            <div className="icon-large">
              <i className="fas fa-robot"></i>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              深度参与多款AI产品的策划与开发，专注于解决实际业务问题
            </p>
            <div style={{ 
              background: 'var(--surface)',
              padding: '1rem',
              borderRadius: '12px'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>核心技能</div>
              <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                • AIP产品打造<br/>
                • AI媒体营销策略<br/>
                • AI办公自动化<br/>
                • 用户体验优化
              </div>
            </div>
          </div>

          {/* 企业合作 */}
          <div className="bento-card tall">
            <div className="card-subtitle">Enterprise Partnership</div>
            <h3 className="card-title">企业合作</h3>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-light), var(--primary-medium))',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center',
              margin: '1rem 0'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: 'var(--primary-color)',
                marginBottom: '0.5rem'
              }}>
                500强
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>
                项目合伙人
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              与多家世界500强企业建立深度合作关系，提供AI解决方案和战略咨询
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)' }}></i>
                <span>AI战略咨询</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)' }}></i>
                <span>企业培训</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)' }}></i>
                <span>产品孵化</span>
              </div>
            </div>
          </div>

          {/* 专业认证 */}
          <div className="bento-card">
            <div className="card-subtitle">Professional Certification</div>
            <h3 className="card-title">专业资质</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary-light)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: 'var(--primary-color)',
                  fontSize: '1.5rem'
                }}>
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>培训讲师</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary-light)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: 'var(--primary-color)',
                  fontSize: '1.5rem'
                }}>
                  <i className="fas fa-star"></i>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>行业专家</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid; 