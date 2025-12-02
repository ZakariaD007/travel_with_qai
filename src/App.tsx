import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import AllDestinations from './components/AllDestinations';
import CountryGallery from './components/CountryGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'gallery' | 'allDestinations' | 'country'>('gallery');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleShowAllDestinations = () => {
    setCurrentView('allDestinations');
  };

  const handleShowCountryGallery = (country: string) => {
    setSelectedCountry(country);
    setCurrentView('country');
  };

  const handleBackToGallery = () => {
    setCurrentView('gallery');
    setSelectedCountry('');
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {currentView === 'gallery' ? (
        <Gallery 
          onShowAllDestinations={handleShowAllDestinations}
        />
      ) : currentView === 'allDestinations' ? (
        <AllDestinations 
          onSelectCountry={handleShowCountryGallery}
          onBackToGallery={handleBackToGallery}
        />
      ) : (
        <CountryGallery 
          country={selectedCountry} 
          onBackToGallery={handleBackToGallery} 
        />
      )}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;