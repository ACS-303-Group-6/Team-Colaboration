// src/pages/ConfirmationPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaHome, FaSuitcase } from 'react-icons/fa';

const ConfirmationPage = ({ booking }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-green-600 text-4xl" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-xl">Thank you for choosing AeroSwift</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Your flight reservation has been successfully confirmed. A confirmation email has been sent to <span className="font-semibold">{booking.email}</span>.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Booking Reference</p>
                    <p className="font-bold text-lg">{booking.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-bold text-green-600">Confirmed</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Flight</p>
                    <p className="font-bold">{booking.flight.flightNumber} ({booking.flight.origin} → {booking.flight.destination})</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Passengers</p>
                    <p className="font-bold">{booking.seats} {booking.seats === 1 ? 'Passenger' : 'Passengers'}</p>
                  </div>
                </div>
                
                <div className="border-t border-green-200 pt-4 mt-4">
                  <p className="text-sm text-gray-600">Departure</p>
                  <p className="font-bold">{formatDate(booking.flight.departureTime)}</p>
                </div>
                
                <div className="border-t border-green-200 pt-4 mt-4">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-bold text-2xl text-green-700">${booking.totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/" 
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 flex items-center justify-center"
              >
                <FaHome className="mr-2" /> Back to Home
              </Link>
              <Link 
                to="/dashboard" 
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 flex items-center justify-center"
              >
                <FaSuitcase className="mr-2" /> View My Bookings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;