// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import SearchForm from '../components/SearchForm';
import FlightCard from '../components/FlightCard';

const HomePage = ({ flights = [] }) => {  // Added default value
  const featuredFlights = flights.slice(0, 3);
 
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Fly Smart, Fly <span className="text-blue-800">Swift</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Discover the best flight deals and book your next journey with AeroSwift. 
          Experience seamless booking and world-class service.
        </p>
        
        <SearchForm />
      </div>
      
      {/* Featured Flights */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 relative pb-2">
          Popular Destinations
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFlights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 relative pb-2">
          Why Choose AeroSwift
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPlane className="text-blue-800 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Booking</h3>
            <p className="text-gray-600">
              Book your flight in under 30 seconds with our streamlined process and intuitive interface.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-blue-800 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
            <p className="text-gray-600">
              Your transactions are protected with bank-level security and encryption technology.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeadset className="text-blue-800 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to assist you with any issues.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for your next adventure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join millions of travelers who trust AeroSwift for their flights.
        </p>
        <Link 
          to="/search" 
          className="bg-white text-blue-800 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
        >
          Find Your Flight
        </Link>
      </div>
    </div>
  );
};

export default HomePage;