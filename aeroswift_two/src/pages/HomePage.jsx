// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = async (searchData) => {
    // Build query string from the search form data
    const queryParams = new URLSearchParams({
      origin: searchData.origin,
      destination: searchData.destination,
      departureDate: searchData.departureDate,
    }).toString();

    try {
      // Call your backend search script
      const response = await fetch(`/api/flights/search?${queryParams}`, {
        // Include credentials for consistency with our new standardized CORS policy.
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        // If successful, navigate to the results page and pass the flight data
        navigate('/search-results', { state: { flights: data.flights, search: searchData } });
      } else {
        alert(data.message || 'No flights found for the selected criteria.');
      }
    } catch (error) {
      console.error('Search failed:', error);
      alert('An error occurred while searching for flights. Please try again.');
    }
  };

  return <HeroSection onSearchSubmit={handleSearchSubmit} />;
};

export default HomePage;