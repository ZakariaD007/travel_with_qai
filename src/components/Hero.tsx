// Hero.tsx - Subtle glass effect
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        const zoomIntensity = 1.0;
        const zoomFactor = 1 + (scrolled / viewportHeight) * zoomIntensity;
        
        backgroundRef.current.style.transform = `scale(${zoomFactor})`;
        
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
      {/* Background Image */}
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
      
      {/* Subtle Glass Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        zIndex: 1
      }}></div>
      
      {/* Very subtle dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.2) 100%)',
        zIndex: 2
      }}></div>
      
      {/* Text Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        width: '100%'
      }}>
        <div className="hero-content" style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          padding: 'clamp(30px, 5vw, 50px)',
          animation: 'fadeInUp 1s ease'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '20px',
            color: 'white',
            fontWeight: '700',
            letterSpacing: '0.5px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}>Discover Paradise With Travelwithqai</h1>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
            marginBottom: '30px', 
            animation: 'fadeInUp 1s ease 0.2s both',
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            Book with us for an unforgettable experience.
          </p>
          
          <a 
            href="#about" 
            className="btn hero-btn" 
            style={{ 
              animation: 'fadeInUp 1s ease 0.4s both',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              padding: 'clamp(12px, 2vw, 15px) clamp(25px, 4vw, 35px)',
              backgroundColor: 'var(--stan-store-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-red)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--stan-store-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            Explore Our Journey
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #hero h1 {
            font-size: 2.2rem !important;
          }
          
          #hero p {
            font-size: 1.1rem !important;
            padding: 0 15px;
          }
          
          .hero-content {
            padding: 40px 20px !important;
          }
          
          #hero .btn {
            padding: 12px 30px !important;
          }
          
          /* Even more subtle blur on mobile */
          [position="absolute"]:nth-of-type(2) {
            backdrop-filter: blur(1px) !important;
            -webkit-backdrop-filter: blur(1px) !important;
          }
        }
        
        @media (max-width: 480px) {
          #hero h1 {
            font-size: 1.8rem !important;
          }
          
          #hero p {
            font-size: 1rem !important;
          }
          
          .hero-content {
            padding: 30px 15px !important;
          }
          
          #hero .btn {
            padding: 10px 25px !important;
            font-size: 0.9rem !important;
          }
          
          /* Remove blur on very small devices for performance */
          [position="absolute"]:nth-of-type(2) {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;