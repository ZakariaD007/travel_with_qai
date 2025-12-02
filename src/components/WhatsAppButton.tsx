import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your travel services", 
  className = "" 
}) => {
  const handleWhatsAppClick = () => {
    const formattedMessage = encodeURIComponent(message);
    const formattedNumber = phoneNumber.replace(/\s/g, '');
    const whatsappURL = `https://wa.me/${formattedNumber}?text=${formattedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className={`whatsapp-btn ${className}`}
      style={{
        backgroundColor: '#25D366',
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.3s ease'
      }}
    >
      <i className="fab fa-whatsapp"></i>
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;