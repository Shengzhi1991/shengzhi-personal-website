import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={{
      background: '#1a1a1a',
      color: 'white',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* 个人信息 */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              fontFamily: "'Noto Sans SC', sans-serif"
            }}>
              晟治弗利
            </h3>
            <p style={{
              color: '#ccc',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              AI实战培训讲师 • 自媒体博主 • 世界500强公司项目合伙人
              <br />
              专注AI实践，AIP打造、AI媒体营销、AI办公提效
            </p>
            
            {/* 统计数据 */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#E31937',
                  lineHeight: 1
                }}>
                  10W+
                </div>
                <div style={{ fontSize: '0.9rem', color: '#999' }}>
                  粉丝关注
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#E31937',
                  lineHeight: 1
                }}>
                  1000+
                </div>
                <div style={{ fontSize: '0.9rem', color: '#999' }}>
                  培训学员
                </div>
              </div>
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#E31937'
            }}>
              联系方式
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(227, 25, 55, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E31937'
                }}>
                  <i className="fas fa-newspaper"></i>
                </div>
                <div>
                  <div style={{ fontWeight: '500' }}>今日头条</div>
                  <div style={{ fontSize: '0.9rem', color: '#999' }}>主力平台</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(227, 25, 55, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E31937'
                }}>
                  <i className="fab fa-weixin"></i>
                </div>
                <div>
                  <div style={{ fontWeight: '500' }}>微信公众号</div>
                  <div style={{ fontSize: '0.9rem', color: '#999' }}>专业内容</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(227, 25, 55, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E31937'
                }}>
                  <i className="fab fa-tiktok"></i>
                </div>
                <div>
                  <div style={{ fontWeight: '500' }}>抖音号</div>
                  <div style={{ fontSize: '0.9rem', color: '#999' }}>视频分享</div>
                </div>
              </div>
            </div>
          </div>

          {/* 专业领域 */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#E31937'
            }}>
              专业领域
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {[
                'AI实战培训',
                'AIP产品打造',
                'AI媒体营销',
                'AI办公提效',
                '企业AI咨询',
                '自媒体运营'
              ].map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <i className="fas fa-check-circle" style={{ color: '#E31937' }}></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 社交媒体链接 */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            <a 
              href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAHCVo9XSrsXcPg3KoTS8S2uNUfGEmSmQo8JLFmTwc3Dk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#E31937';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-newspaper"></i>
            </a>
            
            <a 
              href="https://d1.v3z.cn/Z98Enr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#E31937';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-weixin"></i>
            </a>
            
            <a 
              href="https://www.douyin.com/user/MS4wLjABAAAAvHvsMfDXVVjYyaJat6Iw8q8MSVcqrosEgUI5fgZbA9A"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#E31937';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <div style={{
            color: '#999',
            fontSize: '0.9rem'
          }}>
            © 2024 晟治弗利. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 