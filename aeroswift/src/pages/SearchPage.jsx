// src/pages/SearchPage.jsx
import React from 'react';
import FlightCard from '../components/FlightCard';

const SearchPage = ({ flights }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Available Flights</h1>
        <p className="text-gray-600">We found {flights.length} flights matching your criteria</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
      
      {flights.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">✈️</div>
          <h2 className="text-2xl font-bold mb-2">No flights found</h2>
          <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900">
            Search Again
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;