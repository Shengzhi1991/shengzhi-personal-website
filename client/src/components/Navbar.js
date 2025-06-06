import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a href="#hero" className="logo" onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}>
            晟治弗利
          </a>
          
          <div className="nav-links hide-mobile">
            <a href="#about" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>
              关于我
            </a>
            <a href="#work" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }}>
              作品展示
            </a>
            <a href="#articles" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('articles');
            }}>
              精华文章
            </a>
            <a href="#contact" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>
              联系方式
            </a>
          </div>

        <button 
            className="mobile-menu-btn show-mobile"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="切换菜单"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
        >
            <i className="fas fa-bars"></i>
        </button>
      </div>

      {isMobileMenuOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            padding: '1rem 0'
          }}>
            <a href="#about" className="mobile-menu-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} style={{
              display: 'block',
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'background 0.3s ease'
            }}>
              关于我
            </a>
            <a href="#work" className="mobile-menu-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }} style={{
              display: 'block',
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'background 0.3s ease'
            }}>
              作品展示
            </a>
            <a href="#articles" className="mobile-menu-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('articles');
            }} style={{
              display: 'block',
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'background 0.3s ease'
            }}>
              精华文章
            </a>
            <a href="#contact" className="mobile-menu-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }} style={{
              display: 'block',
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'background 0.3s ease'
            }}>
              联系方式
            </a>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar; 