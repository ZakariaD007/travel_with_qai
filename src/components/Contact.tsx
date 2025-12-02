// Contact.tsx
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const contactInfoRef = useIntersectionObserver(() => {
    const element = contactInfoRef.current;
    if (element) {
      element.style.animation = 'fadeInUp 1s ease forwards';
    }
  });

  const contactFormRef = useIntersectionObserver(() => {
    const element = contactFormRef.current;
    if (element) {
      element.style.animation = 'fadeInUp 1s ease forwards';
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    // Format the WhatsApp message
    const whatsappMessage = `Hello Travelwithqai!%0A%0A*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A%0A*Message:*%0A${message}%0A%0A_Sent from Travelwithqai Website_`;
    
    // Format phone number for WhatsApp (remove spaces and add country code if needed)
    const phoneNumber = '27641422443'; // Remove spaces and ensure proper format
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-container" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          <div 
            ref={contactInfoRef}
            className="contact-info" 
            style={{ 
              flex: 1, 
              opacity: 0,
              order: 2
            }}
          >
            <h3>Let's Plan Your Next Adventure</h3>
            <p>Want the best travel experience? Reach out to us and let's make it happen!</p>
            
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <div className="contact-icon" style={{
                width: '40px',
                height: '40px',
                background: 'var(--tropical-green)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                color: 'white',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Our Base</h4>
                <p style={{ margin: 0 }}>Wellington, New Zealand</p>
              </div>
            </div>
            
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <div className="contact-icon" style={{
                width: '40px',
                height: '40px',
                background: 'var(--tropical-green)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                color: 'white',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>WhatsApp</h4>
                <p style={{ margin: 0 }}>+64 27 364 8735</p>
              </div>
            </div>
            
            <div className="contact-info-item" style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <div className="contact-icon" style={{
                width: '40px',
                height: '40px',
                background: 'var(--tropical-green)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                color: 'white',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>Email Us</h4>
                <p style={{ margin: 0 }}>hello@travelwithqai.com</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={contactFormRef}
            className="contact-form" 
            style={{ 
              flex: 1, 
              opacity: 0,
              order: 1
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--tropical-green)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--tropical-green)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your travel interests, questions, or how we can help you plan your next adventure..."
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    transition: 'border 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--tropical-green)';
                    e.target.style.outline = 'none';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                  }}
                ></textarea>
              </div>
              
              <button type="submit" className="btn" style={{
                width: '100%',
                fontSize: '1rem',
                padding: '15px 30px'
              }}>
                <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
                Send via WhatsApp
              </button>
              
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#666', 
                marginTop: '15px',
                textAlign: 'center'
              }}>
                You'll be redirected to WhatsApp to send your message
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;  