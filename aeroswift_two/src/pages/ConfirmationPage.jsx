// src/pages/ConfirmationPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showConfetti, setShowConfetti] = useState(true);
  
  const flightId = new URLSearchParams(location.search).get('flightId') || '1';
  
  const flightDetails = {
    airline: 'AeroSwift Airlines',
    flightNumber: 'AS2023',
    departure: 'New York (JFK)',
    arrival: 'Los Angeles (LAX)',
    date: 'June 15, 2023',
    departureTime: '08:00 AM',
    arrivalTime: '11:30 AM',
    duration: '3h 30m',
    passenger: 'John Doe',
    seat: '24A',
    price: 299,
    bookingRef: 'AS-BK-7X3D9F'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="confirmation-page py-12">
      {showConfetti && (
        <div className="confetti fixed inset-0 pointer-events-none z-50">
          {[...Array(150)].map((_, i) => (
            <div 
              key={i} 
              className="confetti-piece absolute w-2 h-4 opacity-0" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                animation: `confetti-fall 5s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
      )}
      
      <div className="container mx-auto">
        <div className="confirmation-card bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto relative z-10">
          <div className="confirmation-header text-center mb-8">
            <div className="success-icon w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl font-bold">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-[#4CAF50] mb-4">Booking Confirmed!</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Your flight has been successfully booked. A confirmation email has been sent to your inbox.
            </p>
          </div>
          
          <div className="booking-details">
            <div className="detail-header flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold">Flight Details</h2>
              <div className="booking-ref text-gray-600 mt-2 md:mt-0">
                Booking Reference: <span className="font-semibold text-[#FF5A5F]">{flightDetails.bookingRef}</span>
              </div>
            </div>
            
            <div className="flight-info bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flight-segment flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="airport text-center mb-4 md:mb-0">
                  <div className="time text-xl font-bold">{flightDetails.departureTime}</div>
                  <div className="code text-gray-600">{flightDetails.departure}</div>
                </div>
                
                <div className="flight-duration text-center my-4">
                  <div className="duration font-medium mb-2">{flightDetails.duration}</div>
                  <div className="divider relative h-1 bg-gray-300 my-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gray-50 px-3">✈️</div>
                    </div>
                  </div>
                  <div className="non-stop text-sm text-[#4CAF50] font-medium">Non-stop</div>
                </div>
                
                <div className="airport text-center">
                  <div className="time text-xl font-bold">{flightDetails.arrivalTime}</div>
                  <div className="code text-gray-600">{flightDetails.arrival}</div>
                </div>
              </div>
              
              <div className="flight-meta grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div className="meta-item text-center">
                  <div className="meta-label text-gray-600 text-sm">Date</div>
                  <div className="meta-value font-medium">{flightDetails.date}</div>
                </div>
                
                <div className="meta-item text-center">
                  <div className="meta-label text-gray-600 text-sm">Flight</div>
                  <div className="meta-value font-medium">{flightDetails.flightNumber}</div>
                </div>
                
                <div className="meta-item text-center">
                  <div className="meta-label text-gray-600 text-sm">Passenger</div>
                  <div className="meta-value font-medium">{flightDetails.passenger}</div>
                </div>
                
                <div className="meta-item text-center">
                  <div className="meta-label text-gray-600 text-sm">Seat</div>
                  <div className="meta-value font-medium">{flightDetails.seat}</div>
                </div>
              </div>
            </div>
            
            <div className="price-summary bg-gray-50 rounded-xl p-6">
              <div className="summary-item flex justify-between py-3 border-b border-gray-200">
                <div>Flight</div>
                <div>${flightDetails.price}</div>
              </div>
              <div className="summary-item flex justify-between py-3 border-b border-gray-200">
                <div>Taxes & Fees</div>
                <div>$42.50</div>
              </div>
              <div className="summary-total flex justify-between py-4 font-bold text-lg">
                <div>Total</div>
                <div>${flightDetails.price + 42.50}</div>
              </div>
            </div>
          </div>
          
          <div className="confirmation-actions flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              className="btn btn-outline border border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
            <button 
              className="btn btn-primary bg-[#FF5A5F] hover:bg-[#E54E54]"
              onClick={() => navigate('/booking')}
            >
              Book Another Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;