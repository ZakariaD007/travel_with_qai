// Packages.tsx
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PackageItem {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const Packages: React.FC = () => {
  const packagesRef = useIntersectionObserver(() => {
    const elements = document.querySelectorAll('.package-item');
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.animation = 'fadeInUp 1s ease forwards';
      }, index * 200);
    });
  });

  const packages: PackageItem[] = [
    {
      id: 1,
      title: 'Essential Explorer',
      description: 'Perfect for first-time travelers looking for a curated experience',
      price: 'R???',
      duration: '7 Days / 6 Nights',
      features: [
        'Accommodation in 3-4 star hotels',
        'Daily breakfast included',
        'Airport transfers',
        'Local city tour',
        '24/7 Travel support'
      ]
    },
    {
      id: 2,
      title: 'Family Adventure',
      description: 'Tailored for families with activities for all ages',
      price: 'R???',
      duration: '10 Days / 9 Nights',
      features: [
        'Family-friendly accommodation',
        'All meals included',
        'Kids activities & entertainment',
        'Private transportation',
        'Family photo session',
        'Cultural workshops'
      ],
      popular: true
    },
    {
      id: 3,
      title: 'Luxury Getaway',
      description: 'Premium experience with exclusive access and comforts',
      price: 'R???',
      duration: '14 Days / 13 Nights',
      features: [
        '5-star accommodation',
        'Private butler service',
        'Gourmet dining experiences',
        'Helicopter transfers',
        'Personalized itinerary',
        'Spa treatments included',
        'VIP access to attractions'
      ]
    },
    {
      id: 4,
      title: 'Cultural Immersion',
      description: 'Deep dive into local traditions, food, and communities',
      price: 'R???',
      duration: '8 Days / 7 Nights',
      features: [
        'Local homestay experience',
        'Cooking classes with locals',
        'Traditional craft workshops',
        'Community project participation',
        'Market tours with chef',
        'Cultural performance tickets'
      ]
    }
  ];

  const handleWhatsAppInquiry = (packageName: string) => {
    const message = `Hello Travelwithqai! I'm interested in the "${packageName}" package. Could you please send me more details?`;
    const phoneNumber = '64274223196';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="packages" style={{
      backgroundColor: 'var(--stan-store-tone2)',
      color: 'var(--stan-store-primary-text)',
      padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 40px)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: 'clamp(20px, 4vw, 50px)',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          position: 'relative',
          color: 'var(--stan-store-primary-text)'
        }}>
          Travel Packages
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

        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'var(--stan-store-secondary-text)',
          maxWidth: '700px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Choose from our carefully crafted travel packages designed for different interests and budgets. 
          All packages can be customized to create your perfect journey.
        </p>

        <div 
          ref={packagesRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 90vw, 350px), 1fr))',
            gap: 'clamp(20px, 4vw, 40px)',
            width: '100%'
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-item"
              style={{
                backgroundColor: 'var(--stan-store-secondary)',
                borderRadius: '15px',
                padding: 'clamp(25px, 4vw, 35px)',
                boxShadow: '0 10px 30px rgba(146, 122, 98, 0.1)',
                position: 'relative',
                opacity: 0,
                transition: 'all 0.3s ease',
                border: '1px solid var(--stan-store-tone1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(146, 122, 98, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(146, 122, 98, 0.1)';
              }}
            >
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  backgroundColor: 'var(--tropical-orange)',
                  color: 'var(--stan-store-button-text)',
                  padding: '6px 15px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  Most Popular
                </div>
              )}

              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                marginBottom: '15px',
                color: 'var(--stan-store-primary-text)',
                fontWeight: '700'
              }}>
                {pkg.title}
              </h3>

              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: 'var(--stan-store-secondary-text)',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                {pkg.description}
              </p>

              <div style={{
                backgroundColor: 'var(--stan-store-tone1)',
                padding: '15px',
                borderRadius: '10px',
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                  fontWeight: 'bold',
                  color: 'var(--stan-store-primary)',
                  marginBottom: '5px'
                }}>
                  {pkg.price}
                </div>
                <div style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  color: 'var(--stan-store-secondary-text)'
                }}>
                  {pkg.duration}
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flex: 1,
                marginBottom: '30px'
              }}>
                {pkg.features.map((feature, index) => (
                  <li key={index} style={{
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}>
                    <i className="fas fa-check" style={{
                      color: 'var(--stan-store-primary)',
                      marginRight: '10px',
                      marginTop: '3px',
                      flexShrink: 0
                    }}></i>
                    <span style={{ color: 'var(--stan-store-primary-text)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="btn"
                onClick={() => handleWhatsAppInquiry(pkg.title)}
                style={{
                  width: '100%',
                  padding: 'clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  backgroundColor: 'var(--stan-store-primary)',
                  color: 'var(--stan-store-button-text)',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--tropical-red)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--stan-store-primary)';
                  e.currentTarget.style.color = 'var(--stan-store-button-text)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <i className="fab fa-whatsapp"></i>
                Inquire via WhatsApp
              </button>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '20px',
          backgroundColor: 'var(--stan-store-secondary)',
          borderRadius: '15px',
          border: '1px solid var(--stan-store-tone1)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            marginBottom: '15px',
            color: 'var(--stan-store-primary-text)'
          }}>
            Custom Package Available
          </h3>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: 'var(--stan-store-secondary-text)',
            marginBottom: '20px'
          }}>
            Don't see exactly what you're looking for? We can create a personalized travel package 
            tailored to your specific needs, preferences, and budget.
          </p>
          <button
            className="btn"
            onClick={() => {
              const message = "Hello Travelwithqai! I'd like to discuss creating a custom travel package.";
              const phoneNumber = '64274223196';
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, '_blank');
            }}
            style={{
              padding: 'clamp(12px, 3vw, 15px) clamp(25px, 5vw, 35px)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              backgroundColor: 'var(--tropical-orange)',
              color: 'var(--stan-store-button-text)',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-red)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--tropical-orange)';
              e.currentTarget.style.color = 'var(--stan-store-button-text)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-pencil-alt" style={{ marginRight: '8px' }}></i>
            Request Custom Package
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #packages .package-item {
            padding: 25px 20px !important;
          }
          
          #packages h3 {
            font-size: 1.4rem !important;
          }
        }
        
        @media (max-width: 480px) {
          #packages {
            padding: 40px 15px !important;
          }
          
          #packages .package-item {
            padding: 20px 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Packages;