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
    <div className="confirmation-page">
      {showConfetti && (
        <div className="confetti">
          {[...Array(150)].map((_, i) => (
            <div 
              key={i} 
              className="confetti-piece" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            ></div>
          ))}
        </div>
      )}
      
      <div className="container">
        <div className="confirmation-card">
          <div className="confirmation-header">
            <div className="success-icon">✓</div>
            <h1>Booking Confirmed!</h1>
            <p>Your flight has been successfully booked. A confirmation email has been sent to your inbox.</p>
          </div>
          
          <div className="booking-details">
            <div className="detail-header">
              <h2>Flight Details</h2>
              <div className="booking-ref">
                Booking Reference: <span>{flightDetails.bookingRef}</span>
              </div>
            </div>
            
            <div className="flight-info">
              <div className="flight-segment">
                <div className="airport">
                  <div className="time">{flightDetails.departureTime}</div>
                  <div className="code">{flightDetails.departure}</div>
                </div>
                
                <div className="flight-duration">
                  <div className="duration">{flightDetails.duration}</div>
                  <div className="divider">
                    <div className="line"></div>
                    <div className="plane">✈️</div>
                  </div>
                  <div className="non-stop">Non-stop</div>
                </div>
                
                <div className="airport">
                  <div className="time">{flightDetails.arrivalTime}</div>
                  <div className="code">{flightDetails.arrival}</div>
                </div>
              </div>
              
              <div className="flight-meta">
                <div className="meta-item">
                  <div className="meta-label">Date</div>
                  <div className="meta-value">{flightDetails.date}</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">Flight</div>
                  <div className="meta-value">{flightDetails.flightNumber}</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">Passenger</div>
                  <div className="meta-value">{flightDetails.passenger}</div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-label">Seat</div>
                  <div className="meta-value">{flightDetails.seat}</div>
                </div>
              </div>
            </div>
            
            <div className="price-summary">
              <div className="summary-item">
                <div>Flight</div>
                <div>${flightDetails.price}</div>
              </div>
              <div className="summary-item">
                <div>Taxes & Fees</div>
                <div>$42.50</div>
              </div>
              <div className="summary-total">
                <div>Total</div>
                <div>${flightDetails.price + 42.50}</div>
              </div>
            </div>
          </div>
          
          <div className="confirmation-actions">
            <button 
              className="btn btn-outline"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
            <button 
              className="btn btn-primary"
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