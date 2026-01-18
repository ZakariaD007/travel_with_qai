import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'var(--stan-store-primary)',
      color: 'var(--stan-store-button-text)',
      textAlign: 'center',
      padding: '30px 0'
    }}>
      <div className="container">
        {/* Centered Instagram icon only */}
        <div style={{ textAlign: 'center', margin: '12px 0' }}>
          <a
            href="https://www.instagram.com/travelwithqai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(253, 250, 247, 0.1)',
              border: '1px solid rgba(253, 250, 247, 0.2)',
              color: 'var(--stan-store-secondary)',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => { 
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; 
              (e.currentTarget as HTMLElement).style.transition = 'transform 0.18s ease';
              (e.currentTarget as HTMLElement).style.background = 'rgba(253, 250, 247, 0.2)';
            }}
            onMouseLeave={(e) => { 
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; 
              (e.currentTarget as HTMLElement).style.background = 'rgba(253, 250, 247, 0.1)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17.5 6a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </a>
        </div>
        <p style={{ color: 'var(--stan-store-secondary)', marginTop: '10px' }}>
          &copy; 2025 Travelwithqai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;