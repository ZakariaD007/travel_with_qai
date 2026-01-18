// Gallery.tsx - Updated colors
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface GalleryProps {
  onShowAllDestinations: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onShowAllDestinations }) => {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const galleryItemsRef = useIntersectionObserver(() => {
    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.animation = 'fadeInUp 1s ease forwards';
      }, index * 200);
    });
  });

  const galleryItems = [ 
    {
      country: 'zambia',
      src:`${baseUrl}images/selfie1.jpg`,
      title: 'Zambia',
      description: 'Stunning natural landscapes and safaris'
    },
    {
      country: 'zambia',
      src:`${baseUrl}images/selfie2.jpg`,
      title: 'Zambia',
      description: 'Stunning natural landscapes and safaris'
    },
    {
      country: 'zambia',
      src:`${baseUrl}images/selfie3.jpg`,
      title: 'Zambia',
      description: 'Stunning natural landscapes and safaris'
    },
  ];

  const displayedItems = galleryItems.slice(0, 3);

  const handleViewAll = () => {
    onShowAllDestinations();
    setTimeout(() => {
      const el = document.getElementById('all-destinations');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section id="gallery" style={{
      background: 'linear-gradient(to bottom, var(--stan-store-tone2), var(--stan-store-tone1))',
      color: 'var(--stan-store-primary-text)',
      padding: '60px 0'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{ 
          position: 'relative',
          textAlign: 'center',
          marginBottom: '50px',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: 'var(--stan-store-primary-text)'
        }}>
          Our Travel Gallery
          <span style={{
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'var(--stan-store-primary)',
            borderRadius: '2px'
          }}></span>
        </h2>
        <div 
          ref={galleryItemsRef}
          className="gallery" 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            width: '100%'
          }}
        >
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              data-country={item.country}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(146, 122, 98, 0.1)',
                position: 'relative',
                height: '250px',
                transition: 'transform 0.3s ease',
                opacity: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(146, 122, 98, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(146, 122, 98, 0.1)';
              }}
            >
              <img 
                src={item.src} 
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div className="gallery-overlay" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(146, 122, 98, 0.8))',
                padding: '20px',
                color: 'white',
                transform: 'translateY(100%)',
                transition: 'transform 0.3s ease'
              }}>
                <h3 style={{ 
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
                  marginBottom: '8px',
                  color: 'white'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
                  margin: 0,
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container" style={{ 
          textAlign: 'center', 
          marginTop: '40px' 
        }}>
          <button
            className="btn"
            onClick={handleViewAll}
            style={{
              padding: '12px 30px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              backgroundColor: 'var(--stan-store-primary)',
              color: 'var(--stan-store-button-text)',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-red)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--stan-store-primary)';
              e.currentTarget.style.color = 'var(--stan-store-button-text)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;