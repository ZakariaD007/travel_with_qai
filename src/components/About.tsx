// About.tsx
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const aboutTextRef = useIntersectionObserver(() => {
    const element = aboutTextRef.current;
    if (element) {
      element.style.animation = 'fadeInUp 1s ease forwards';
    }
  });

  const aboutImageRef = useIntersectionObserver(() => {
    const element = aboutImageRef.current;
    if (element) {
      element.style.animation = 'fadeInRight 1s ease forwards';
    }
  });

  return (
    <section id="about">
      <div className="container">
        <h2>About Travelwithqai</h2>
        <div className="about-content" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div 
            ref={aboutTextRef}
            className="about-text" 
            style={{ 
              flex: 1, 
              opacity: 0,
              order: 2,
              textAlign: 'center'
            }}
          >
            <p>We are a family who love travelling together — exploring the world through culture, food, and shared experiences. Every trip for us is about tasting local dishes, meeting people, and learning traditions that make each place unique.</p>
            <p>From bustling markets and family-run restaurants to community festivals and home-cooked meals, we seek the moments that reveal the heart of a destination. Traveling as a family helps us grow, bond, and bring those stories home.</p>
            <p>Want to discover family-friendly trips full of culture and great food? Let's plan your next getaway together.</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a href="#contact" className="btn">Book your next adventure</a>
            </div>
          </div>
          <div 
            ref={aboutImageRef}
            className="about-image" 
            style={{
              flex: 1,
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              opacity: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: 1
            }}
          >
            <img 
              src="public/images/family.jpg" 
              alt="My Photo"
              style={{
                width: '100%',
                maxWidth: 'auto',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;