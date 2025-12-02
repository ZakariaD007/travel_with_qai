// AllDestinations.tsx
import React from 'react';

interface AllDestinationsProps {
  onSelectCountry: (country: string) => void;
  onBackToGallery: () => void;
}

const AllDestinations: React.FC<AllDestinationsProps> = ({ onSelectCountry, onBackToGallery }) => {
  // Gallery items with display names and first image
    // Use local images from `src/assets/` if available.
    // Filenames used here (you can adjust to match your actual files):
    // lombok-indonesia.jpg, hong-kong.jpg, singapore.jpg,
    // victoria-falls-zimbabwe.jpg, livingstone-lusaka-zambia.jpg,
    // south-africa.jpg, new-zealand.jpg
    const allCountries = [
    {
      country: 'lombok-indonesia',
      displayName: 'Lombok, Indonesia',
      src:'/public/images/lombok.webp'
    },
    {
      country: 'hong-kong',
      displayName: 'Hong Kong, Disney Land',
      src:'/public/images/castle.jpg'
    },
    {
      country: 'singapore',
      displayName: 'Singapore',
      src:'/public/images/singapore.jpg'
    },
    {
      country: 'victoria-falls-zimbabwe',
      displayName: 'Victoria Falls, Zimbabwe',
      src:'/public/images/vf2.jpg'
    },
    {
      country: 'livingstone-lusaka-zambia',
      displayName: 'Livingstone & Lusaka, Zambia',
      src:'/public/images/z3.jpg'
    },
    {
      country: 'south-africa',
      displayName: 'South Africa',
      src:'/public/images/cpt5.jpg'
    },
    {
      country: 'new-zealand',
      displayName: 'New Zealand',
      src:'/public/images/nz1.jpg'
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
                  margin: 0
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
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-red)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-orange)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ← Back to Main Gallery
          </button>
        </div>

        {/* Responsive Media Queries */}
        <style>{`
          @media (max-width: 1024px) {
            #all-destinations .container {
              padding: 0 15px;
            }
          }

          @media (max-width: 768px) {
            #all-destinations {
              padding: 50px 15px;
            }

            #all-destinations h2 {
              font-size: clamp(1.5rem, 5vw, 2.5rem);
              margin-bottom: 30px;
            }

            #all-destinations .destination-grid {
              grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
              gap: 15px;
            }

            #all-destinations .destination-item {
              height: 220px !important;
            }
          }

          @media (max-width: 480px) {
            #all-destinations {
              padding: 30px 12px;
            }

            #all-destinations h2 {
              font-size: clamp(1.3rem, 6vw, 2rem);
              margin-bottom: 20px;
            }

            #all-destinations .destination-grid {
              grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
              gap: 12px;
            }

            #all-destinations .destination-item {
              height: 180px !important;
              border-radius: 8px !important;
            }

            #all-destinations button {
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
              min-width: auto !important;
            }
          }

          @media (max-width: 320px) {
            #all-destinations {
              padding: 20px 10px;
            }

            #all-destinations h2 {
              font-size: 1.2rem;
            }

            #all-destinations .destination-grid {
              grid-template-columns: 1fr;
              gap: 10px;
            }

            #all-destinations .destination-item {
              height: 150px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AllDestinations;
