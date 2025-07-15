// src/components/SearchForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    date: '',
    passengers: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Flight</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <input
            type="text"
            name="origin"
            value={searchParams.origin}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="City or airport"
            required
          />
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <input
            type="text"
            name="destination"
            value={searchParams.destination}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="City or airport"
            required
          />
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
          <input
            type="date"
            name="date"
            value={searchParams.date || defaultDate}
            onChange={handleChange}
            min={defaultDate}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <select
            name="passengers"
            value={searchParams.passengers}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>
        
        <div className="md:col-span-4 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all flex items-center"
          >
            <span>Search Flights</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;