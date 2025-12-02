// CountryGallery.tsx
import React from 'react';
import type { CountryImagesData } from '../types';

interface CountryGalleryProps {
  country: string;
  onBackToGallery: () => void;
}

const CountryGallery: React.FC<CountryGalleryProps> = ({ country, onBackToGallery }) => {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const countryImagesData: CountryImagesData = {
    'hong-kong': [
      { src:`${baseUrl}images/disney.JPG`, alt: 'Hong Kong Skyline at Night' },
      { src:`${baseUrl}images/shrimp.JPG`, alt: 'Victoria Harbour View' },
      { video:`${baseUrl}videos/vid.MP4`, poster:`${baseUrl}images/hongkong.webp`, alt: 'Hong Kong Street Markets' },
      { src:`${baseUrl}images/nood.JPG`, alt: 'The Peak Hong Kong' }
    ],
    singapore: [
      { src:`${baseUrl}images/singapore1.JPG`, alt: 'Marina Bay Sands Skyline' },
      { src:`${baseUrl}images/singapore2.JPG`, alt: 'Gardens by the Bay' },
      { src:`${baseUrl}images/singapore3.JPG`, alt: 'Singapore Chinatown' },
      { src:`${baseUrl}images/singapore4.JPG`, alt: 'Sentosa Island Beach' }
    ],
    'victoria-falls-zimbabwe': [
      { src:`${baseUrl}images/vf4.JPG`, alt: 'Victoria Falls Main Falls' },
      { src:`${baseUrl}images/vf2.JPG`, alt: 'Victoria Falls Rainforest' },
      { src:`${baseUrl}images/vf6.JPG`, alt: 'Zambezi River above Victoria Falls' },
      { src:`${baseUrl}images/vf3.JPG`, alt: 'Victoria Falls Bridge' }
    ],
    'livingstone-lusaka-zambia': [
      { src:`${baseUrl}images/z1.jpg`, alt: 'Livingstone Town' },
      { src:`${baseUrl}images/z2.jpg`, alt: 'Lusaka City Center' },
      { src:`${baseUrl}images/z5.jpg`, alt: 'Zambian Countryside' },
      { src:`${baseUrl}images/z4.jpg`, alt: 'Zambian Traditional Village' }
    ],
    'lombok-indonesia': [
      { src:`${baseUrl}images/pink.jpg`, alt: 'Lombok Beautiful Beach' },
      { src:`${baseUrl}images/food.jpg`, alt: 'Mount Rinjani Summit' },
      { src:`${baseUrl}images/umbrella.jpg`, alt: 'Lombok Waterfalls' },
      { src:`${baseUrl}images/coconut.jpg`, alt: 'Traditional Sasak Village' }
    ],
    'south-africa': [
      { src:`${baseUrl}images/cpt1.JPG`, alt: 'Table Mountain Cape Town' },
      { src:`${baseUrl}images/cpt2.JPG`, alt: 'Kruger National Park Safari' },
      { src:`${baseUrl}images/cpt3.JPG`, alt: 'Garden Route Scenic Beauty' },
      { src:`${baseUrl}images/cpt4.JPG`, alt: 'Cape Town Waterfront' }
    ],
    'new-zealand': [
      { src:`${baseUrl}images/nz5.JPG`, alt: 'Milford Sound Fjord' },
      { src:`${baseUrl}images/nz2.JPG`, alt: 'Lake Wanaka Mountain View' },
      { src:`${baseUrl}images/nz3.JPG`, alt: 'New Zealand Forest & Waterfalls' },
      { src:`${baseUrl}images/nz4.JPG`, alt: 'New Zealand Beach Paradise' }
    ]
  };

  const images = countryImagesData[country] || [];

  const formatCountryName = (country: string) => {
    const nameMap: { [key: string]: string } = {
      'hong-kong': 'Hong Kong',
      'singapore': 'Singapore',
      'victoria-falls-zimbabwe': 'Victoria Falls, Zimbabwe',
      'livingstone-lusaka-zambia': 'Livingstone & Lusaka, Zambia',
      'lombok-indonesia': 'Lombok, Indonesia',
      'south-africa': 'South Africa',
      'new-zealand': 'New Zealand'
    };
    
    return nameMap[country] || country.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getCountryDescription = (country: string) => {
    const descriptions: { [key: string]: string } = {
      'hong-kong': 'Discover the vibrant cityscape, bustling markets, and stunning harbor views of this world-class metropolis.',
      'singapore': 'Experience the perfect blend of modern architecture, lush gardens, and rich cultural heritage.',
      'victoria-falls-zimbabwe': 'Witness one of the world\'s most spectacular waterfalls and the surrounding natural beauty.',
      'livingstone-lusaka-zambia': 'Explore the urban charm and natural wonders of Zambia\'s key destinations.',
      'lombok-indonesia': 'Immerse yourself in pristine beaches, volcanic landscapes, and authentic Indonesian culture.',
      'south-africa': 'Discover the dramatic landscapes, wildlife, and vibrant culture of South Africa\'s iconic destinations.',
      'new-zealand': 'Experience breathtaking fjords, mountains, forests, and adventure in Middle Earth\'s paradise.'
    };
    
    return descriptions[country] || `Explore the beautiful destinations of ${formatCountryName(country)}`;
  };

  return (
    <section id="country-gallery" style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '40px 0',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        {/* Header Section */}
        <div className="country-header" style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          padding: '0 10px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            marginBottom: '15px',
            color: '#2c3e50',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            {formatCountryName(country)}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: '#7f8c8d',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {getCountryDescription(country)}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="country-gallery" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          width: '100%'
        }}>
          {images.map((image, index) => (
            <div 
              key={index}
              className="country-gallery-item"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                height: '280px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                backgroundColor: '#fff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
            >
              {image.video ? (
                <video
                  src={image.video}
                  poster={image.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLVideoElement).style.transform = 'scale(1.05)';
                    try { (e.currentTarget as HTMLVideoElement).play(); } catch (_) {}
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLVideoElement).style.transform = 'scale(1)';
                    try { (e.currentTarget as HTMLVideoElement).pause(); } catch (_) {}
                  }}
                />
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
              )}
              {/* Image Overlay with Description */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white',
                padding: '20px',
                transform: 'translateY(100%)',
                transition: 'transform 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(100%)';
              }}
              >
                <p style={{
                  margin: '0',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: '500'
                }}>
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="back-btn" style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          padding: '0 10px'
        }}>
          <button
            className="btn"
            onClick={onBackToGallery}
            style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(30px, 5vw, 40px)',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
              minWidth: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
            }}
          >
            ← Back to Gallery
          </button>
        </div>
      </div>

      {/* Responsive Media Queries via inline styles */}
      <style>{`
        @media (max-width: 768px) {
          .country-gallery {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .country-gallery {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .country-gallery-item {
            height: 250px !important;
          }
        }
        
        @media (max-width: 320px) {
          .container {
            padding: 0 15px !important;
          }
          
          .country-gallery-item {
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CountryGallery;