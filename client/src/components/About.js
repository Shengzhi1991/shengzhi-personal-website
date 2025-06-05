import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: '4rem 0', background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="title-en">About Me</p>
          <h2 className="title-zh">关于我</h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '1rem auto'
          }}>
            深耕AI领域，致力于将前沿技术转化为实际价值
          </p>
        </div>

        <div className="bento-grid">
          {/* 个人简介 */}
          <div className="bento-card large">
            <div className="card-subtitle">Personal Introduction</div>
            <h3 className="card-title">晟治弗利</h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
                fontWeight: '900'
              }}>
                晟
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  AI实战培训讲师 & 自媒体博主
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  世界500强公司项目合伙人，专注AI实践与媒体营销，
                  <br />
                  致力于推动AI技术的普及和应用落地。
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'var(--surface)',
              padding: '1.5rem',
              borderRadius: '16px',
              marginBottom: '1.5rem'
            }}>
              <h5 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>核心理念</h5>
              <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                "AI不应该只是技术概念，而应该成为解决实际问题的工具。我的使命是帮助更多的个人和企业掌握AI技能，
                在数字化时代中获得竞争优势。"
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {[
                '5年+ AI实战经验',
                '1000+ 培训学员',
                '10W+ 自媒体粉丝',
                '500强企业合伙人'
              ].map((achievement, index) => (
                <span
                  key={index}
                  style={{
                    background: 'var(--primary-light)',
                    color: 'var(--primary-color)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>

          {/* 专业技能 */}
          <div className="bento-card">
            <div className="card-subtitle">Professional Skills</div>
            <h3 className="card-title">专业技能</h3>
            
            <div style={{ marginTop: '1.5rem' }}>
              {[
                { skill: 'AI实战培训', level: 95, icon: 'fas fa-chalkboard-teacher' },
                { skill: 'AIP产品打造', level: 90, icon: 'fas fa-cogs' },
                { skill: 'AI媒体营销', level: 88, icon: 'fas fa-bullhorn' },
                { skill: 'AI办公提效', level: 92, icon: 'fas fa-laptop-code' },
                { skill: '企业AI咨询', level: 85, icon: 'fas fa-handshake' }
              ].map((item, index) => (
                <div key={index} style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <i className={item.icon} style={{ color: 'var(--primary-color)' }}></i>
                      <span style={{ fontWeight: '500' }}>{item.skill}</span>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {item.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'var(--surface)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${item.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--primary-color), var(--primary-dark))',
                      borderRadius: '3px',
                      transition: 'width 1s ease-in-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 职业历程 */}
          <div className="bento-card tall">
            <div className="card-subtitle">Career Journey</div>
            <h3 className="card-title">职业历程</h3>
            
            <div style={{ marginTop: '2rem' }}>
              {[
                {
                  year: '2024',
                  title: 'AI实战培训讲师',
                  description: '专注AI实战培训，累计培训学员1000+',
                  status: 'current'
                },
                {
                  year: '2023',
                  title: '自媒体博主',
                  description: '运营多个AI自媒体账号，粉丝总数10W+',
                  status: 'current'
                },
                {
                  year: '2022',
                  title: '500强企业项目合伙人',
                  description: '参与多个大型企业AI数字化转型项目',
                  status: 'current'
                },
                {
                  year: '2021',
                  title: 'AI产品专家',
                  description: '深度参与AIP产品设计与开发',
                  status: 'past'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '2rem',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: item.status === 'current' ? 'var(--primary-color)' : 'var(--surface)',
                    color: item.status === 'current' ? 'white' : 'var(--text-secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    flexShrink: 0
                  }}>
                    {item.year}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5 style={{
                      marginBottom: '0.5rem',
                      color: item.status === 'current' ? 'var(--primary-color)' : 'var(--text-primary)'
                    }}>
                      {item.title}
                    </h5>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.5
                    }}>
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div style={{
                      position: 'absolute',
                      left: '29px',
                      top: '60px',
                      width: '2px',
                      height: '40px',
                      background: 'var(--border)'
                    }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 教育背景与认证 */}
          <div className="bento-card">
            <div className="card-subtitle">Education & Certification</div>
            <h3 className="card-title">教育背景</h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                background: 'var(--surface)',
                padding: '1.5rem',
                borderRadius: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-color)',
                    fontSize: '1.2rem'
                  }}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h5 style={{ marginBottom: '0.25rem' }}>计算机科学与技术</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      本科学历 • 专注AI与机器学习
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'var(--surface)',
                padding: '1.5rem',
                borderRadius: '12px'
              }}>
                <h5 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                  专业认证
                </h5>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {[
                    'AI实战培训师认证',
                    '企业数字化转型顾问',
                    '自媒体运营专家',
                    'AI产品经理认证'
                  ].map((cert, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <i className="fas fa-certificate" style={{ color: 'var(--primary-color)' }}></i>
                      <span style={{ fontSize: '0.9rem' }}>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 