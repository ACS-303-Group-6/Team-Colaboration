// src/components/FlightCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaChair } from 'react-icons/fa';

const FlightCard = ({ flight }) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const calculateDuration = (departure, arrival) => {
    const dep = new Date(departure);
    const arr = new Date(arrival);
    const diff = arr - dep;
    
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">{flight.flightNumber}</div>
          <div className="text-lg font-medium">{flight.origin} → {flight.destination}</div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-1 flex items-center justify-center">
              <FaPlaneDeparture className="mr-1" /> Departure
            </div>
            <div className="font-semibold">{formatTime(flight.departureTime)}</div>
            <div className="text-xs text-gray-500">{formatDate(flight.departureTime)}</div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-1 flex items-center justify-center">
              <FaClock className="mr-1" /> Duration
            </div>
            <div className="font-semibold">{calculateDuration(flight.departureTime, flight.arrivalTime)}</div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-1 flex items-center justify-center">
              <FaPlaneArrival className="mr-1" /> Arrival
            </div>
            <div className="font-semibold">{formatTime(flight.arrivalTime)}</div>
            <div className="text-xs text-gray-500">{formatDate(flight.arrivalTime)}</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">${flight.price}</div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <FaChair className="mr-1" /> {flight.availableSeats} seats left
          </div>
        </div>
        
        <Link 
          to={`/book/${flight.id}`}
          className="mt-4 block w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default FlightCard;