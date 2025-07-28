// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaTicketAlt, FaTimes, FaSearch } from 'react-icons/fa';

const DashboardPage = ({ user }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-6">Account Menu</h3>
            
            <div className="space-y-2">
              <button className="w-full text-left bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium">
                <FaTicketAlt className="inline mr-3" /> My Bookings
              </button>
              <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg">
                Profile Settings
              </button>
              <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg">
                Payment Methods
              </button>
              <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg">
                Rewards & Miles
              </button>
              <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-3 rounded-lg">
                Notifications
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Upcoming Trips</h2>
            
            {user.bookings.length > 0 ? (
              <div className="space-y-6">
                {user.bookings.map(booking => (
                  <div key={booking.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4">
                      <div className="flex justify-between">
                        <div className="font-bold">{booking.flight.flightNumber}</div>
                        <div>{booking.flight.origin} → {booking.flight.destination}</div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-medium">{formatDate(booking.flight.departureTime)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Departure</p>
                          <p className="font-medium">{formatTime(booking.flight.departureTime)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Booking ID</p>
                          <p className="font-medium">{booking.id}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                        <div>
                          <p className="text-xl font-bold text-blue-800">${booking.totalPrice.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">{booking.seats} {booking.seats === 1 ? 'Passenger' : 'Passengers'}</p>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center">
                            <FaTicketAlt className="mr-2" /> Ticket
                          </button>
                          <button className="bg-red-100 text-red-800 px-4 py-2 rounded-lg hover:bg-red-200 flex items-center">
                            <FaTimes className="mr-2" /> Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-6">You don't have any upcoming trips.</p>
                <Link 
                  to="/search" 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 inline-flex items-center"
                >
                  <FaSearch className="mr-2" /> Search Flights
                </Link>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Past Trips</h2>
            <div className="text-center py-8">
              <p className="text-gray-600">You haven't traveled with us recently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;