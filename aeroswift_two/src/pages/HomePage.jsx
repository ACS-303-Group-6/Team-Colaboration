// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchData) => {
    // Ensure the date is formatted to 'YYYY-MM-DD' string, which the backend expects.
    // This is a common source of bugs if the date object is sent directly.
    const formattedDate = new Date(searchData.departureDate).toISOString().split('T')[0];

    // This mapping converts city names to IATA codes. A more robust solution
    // would involve an API to fetch airports for an autocomplete search form.
    const cityToIata = {
      "new york": "JFK",
      "miami": "MIA",
      "dallas": "DFW",
      "san francisco": "SFO",
      "orlando": "MCO",
      "denver": "DEN",
      "london": "LHR",
      "atlanta": "ATL",
      "las vegas": "LAS",
      "boston": "BOS",
      "tokyo": "HND",
      "amsterdam": "AMS",
      "chicago": "ORD",
      "dubai": "DXB",
      "singapore": "SIN",
      "frankfurt": "FRA",
    };

    const originIata = cityToIata[searchData.from.toLowerCase()] || searchData.from.toUpperCase();
    const destinationIata = cityToIata[searchData.to.toLowerCase()] || searchData.to.toUpperCase();

    // Build query string from the search form data
    const queryParams = new URLSearchParams({
      origin: originIata,
      destination: destinationIata,
      departureDate: formattedDate,
    }).toString();

    // Navigate to the results page with the search query in the URL.
    // We also pass the original search data in the state to display user-friendly text.
    navigate(`/search-results?${queryParams}`, { state: { search: searchData } });
  };

  return <HeroSection onSearchSubmit={handleSearchSubmit} />;
};

export default HomePage;