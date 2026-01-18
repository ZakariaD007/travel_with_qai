// AllDestinations.tsx
import React from 'react';

interface AllDestinationsProps {
  onSelectCountry: (country: string) => void;
  onBackToGallery: () => void;
}

const AllDestinations: React.FC<AllDestinationsProps> = ({ onSelectCountry, onBackToGallery }) => {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const allCountries = [
    {
      country: 'lombok-indonesia',
      displayName: 'Lombok, Indonesia',
      src:`${baseUrl}images/lombok.webp`
    },
    {
      country: 'hong-kong',
      displayName: 'Hong Kong, Disney Land',
      src:`${baseUrl}images/castle.JPG`
    },
    {
      country: 'singapore',
      displayName: 'Singapore',
      src:`${baseUrl}images/singapore.jpg`
    },
    {
      country: 'victoria-falls-zimbabwe',
      displayName: 'Victoria Falls, Zimbabwe',
      src:`${baseUrl}images/vf2.jpg`
    },
    {
      country: 'livingstone-lusaka-zambia',
      displayName: 'Livingstone & Lusaka, Zambia',
      src:`${baseUrl}images/z3.jpg`
    },
    {
      country: 'south-africa',
      displayName: 'South Africa',
      src:`${baseUrl}images/cpt5.JPG`
    },
    {
      country: 'new-zealand',
      displayName: 'New Zealand',
      src:`${baseUrl}images/nz1.JPG`
    }
  ];

  return (
    <section id="all-destinations" style={{
      backgroundColor: '#f8f9fa',
      color: '#264653',
      padding: 'clamp(40px, 5vw, 80px) clamp(15px, 5vw, 20px)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: 'clamp(30px, 5vw, 50px)',
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          position: 'relative'
        }}>
          All Destinations
          <span style={{
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'var(--tropical-orange)',
            borderRadius: '2px'
          }}></span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 90vw, 280px), 1fr))',
          gap: 'clamp(15px, 3vw, 25px)',
          marginBottom: '40px',
          width: '100%'
        }} className="destination-grid">
          {allCountries.map((dest, index) => (
            <div
              key={index}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                position: 'relative',
                height: '250px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: 'fadeInUp 1s ease forwards'
              }}
              className="destination-item"
              onClick={() => onSelectCountry(dest.country)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={dest.src}
                alt={dest.displayName}
                loading="lazy"
                decoding="async"
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
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '20px',
                color: 'white',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                  marginBottom: '8px',
                  margin: 0,
                  color: 'white'
                }}>
                  {dest.displayName}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            className="btn"
            onClick={onBackToGallery}
            style={{
              padding: '12px 30px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              backgroundColor: 'var(--tropical-orange)',
              color: 'var(--stan-store-button-text)',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-red)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-orange)';
              e.currentTarget.style.color = 'var(--stan-store-button-text)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ← Back to Main Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllDestinations;