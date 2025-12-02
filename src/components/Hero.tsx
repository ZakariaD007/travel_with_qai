// Hero.tsx - Alternative with stronger zoom
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        // More dramatic zoom - up to 2x (100% zoom)
        const zoomIntensity = 1.0; // Adjust this for more/less zoom (1.0 = 100% zoom)
        const zoomFactor = 1 + (scrolled / viewportHeight) * zoomIntensity;
        
        // Apply zoom with smooth transition
        backgroundRef.current.style.transform = `scale(${zoomFactor})`;
        
        // Optional: Fade effect as you zoom
        const fadeStart = viewportHeight * 0.5;
        const opacity = scrolled > fadeStart 
          ? Math.max(1 - (scrolled - fadeStart) / (viewportHeight * 0.5), 0.4)
          : 1;
        
        backgroundRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero" 
      style={{
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div 
        ref={backgroundRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(https://images.pexels.com/photos/2903939/pexels-photo-2903939.jpeg) center/cover',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
          transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease',
          zIndex: 0,
          transformOrigin: 'center center'
        }}
      ></div>
      
      {/* Rest of the content remains the same */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
      }}></div>
      
      <div className="container">
        <div className="hero-content" style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          padding: '0 20px'
        }}>
          <h1 style={{ 
            animation: 'fadeInUp 1s ease',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            marginBottom: '20px'
          }}>Discover Paradise With Travelwithqai</h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
            marginBottom: '30px', 
            animation: 'fadeInUp 1s ease 0.2s both' 
          }}>
            Book with us for an unforgettable experience.
          </p>
          <a href="#about" className="btn hero-btn" style={{ 
            animation: 'fadeInUp 1s ease 0.4s both',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            padding: '12px 30px'
          }}>
            Explore Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;