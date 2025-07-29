// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from 'components/HeroSection';
import FeaturesSection from 'components/FeaturesSection';
import FeaturedFlightsSection from 'components/FeaturedFlightsSection';
import CtaSection from 'components/CtaSection';

const HomePage = ({ flights = [] }) => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchData) => {
    // In a real app, you'd likely pass searchData to a search results page
    console.log("Search submitted:", searchData);
    navigate('/search-results', { state: { searchData } });
  };

  return (
    <div className="bg-light">
      <HeroSection onSearchSubmit={handleSearchSubmit} />
      <FeaturedFlightsSection flights={flights} />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;