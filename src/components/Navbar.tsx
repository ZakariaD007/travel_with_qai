// Navbar.tsx
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px 0',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      ...(scrolled && {
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        padding: '15px 0'
      })
    }}>
      <div className="nav-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <a href="#" className="logo" style={{
          fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
          fontWeight: 700,
          color: 'var(--tropical-green)',
          textDecoration: 'none'
        }}>
          Travelwith<span style={{ color: 'var(--tropical-orange)' }}>qai</span>
        </a>
        
        <div 
          className="mobile-menu" 
          style={{ 
            display: isMobile ? 'block' : 'none', 
            fontSize: '1.5rem', 
            cursor: 'pointer',
            color: scrolled ? 'var(--dark)' : 'white'
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={{
          display: isMobile ? (mobileMenuOpen ? 'flex' : 'none') : 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          ...(isMobile && {
            position: 'fixed',
            top: '70px',
            left: 0,
            background: 'white',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0',
            boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          })
        }}>
          <li style={{ margin: isMobile ? '15px 0' : '0 0 0 30px' }}>
            <a 
              href="#hero" 
              style={{
                color: scrolled ? 'var(--dark)' : (isMobile ? 'var(--dark)' : 'white'),
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                fontSize: isMobile ? '1.1rem' : '1rem'
              }}
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li style={{ margin: isMobile ? '15px 0' : '0 0 0 30px' }}>
            <a 
              href="#about"
              style={{
                color: scrolled ? 'var(--dark)' : (isMobile ? 'var(--dark)' : 'white'),
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                fontSize: isMobile ? '1.1rem' : '1rem'
              }}
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li style={{ margin: isMobile ? '15px 0' : '0 0 0 30px' }}>
            <a 
              href="#gallery"
              style={{
                color: scrolled ? 'var(--dark)' : (isMobile ? 'var(--dark)' : 'white'),
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                fontSize: isMobile ? '1.1rem' : '1rem'
              }}
              onClick={closeMobileMenu}
            >
              Gallery
            </a>
          </li>
          <li style={{ margin: isMobile ? '15px 0' : '0 0 0 30px' }}>
            <a 
              href="#contact"
              style={{
                color: scrolled ? 'var(--dark)' : (isMobile ? 'var(--dark)' : 'white'),
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                fontSize: isMobile ? '1.1rem' : '1rem'
              }}
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;