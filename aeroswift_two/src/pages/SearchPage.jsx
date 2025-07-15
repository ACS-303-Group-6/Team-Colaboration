// src/pages/SearchPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  
  const flights = [
    {
      id: 1,
      airline: 'AeroSwift Airlines',
      departure: '08:00 AM',
      arrival: '11:30 AM',
      duration: '3h 30m',
      stops: 0,
      price: 299,
      rating: 4.5,
      amenities: ['WiFi', 'Entertainment', 'Meal']
    },
    {
      id: 2,
      airline: 'Global Airways',
      departure: '10:15 AM',
      arrival: '02:45 PM',
      duration: '4h 30m',
      stops: 1,
      price: 245,
      rating: 4.2,
      amenities: ['WiFi', 'Meal']
    },
    {
      id: 3,
      airline: 'SkyJet',
      departure: '01:20 PM',
      arrival: '04:50 PM',
      duration: '3h 30m',
      stops: 0,
      price: 349,
      rating: 4.7,
      amenities: ['WiFi', 'Entertainment', 'Meal', 'Extra Legroom']
    },
  ];

  const handleBook = (flightId) => {
    navigate(`/confirmation?flightId=${flightId}`);
  };

  return (
    <div className="search-results">
      <div className="container">
        <div className="page-header">
          <h1>Available Flights</h1>
          <p>New York (JFK) to Los Angeles (LAX) • June 15, 2023</p>
        </div>
        
        <div className="results-container">
          {flights.map((flight) => (
            <div key={flight.id} className="flight-card">
              <div className="flight-header">
                <div className="airline-info">
                  <div className="airline-logo">✈️</div>
                  <div>
                    <h3>{flight.airline}</h3>
                    <div className="rating">
                      <span className="stars">
                        {'★'.repeat(Math.floor(flight.rating))}
                        {'☆'.repeat(5 - Math.floor(flight.rating))}
                      </span>
                      <span>{flight.rating}/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="flight-price">
                  <div className="price">${flight.price}</div>
                  <div className="price-label">per passenger</div>
                </div>
              </div>
              
              <div className="flight-details">
                <div className="time-details">
                  <div className="departure">
                    <div className="time">{flight.departure}</div>
                    <div className="airport">JFK</div>
                  </div>
                  
                  <div className="duration">
                    <div className="line">
                      <span className="dot"></span>
                      <span className="line-inner"></span>
                      <span className="dot"></span>
                    </div>
                    <div className="duration-text">
                      {flight.duration}
                      {flight.stops > 0 && (
                        <span className="stops">{flight.stops} {flight.stops === 1 ? 'stop' : 'stops'}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="arrival">
                    <div className="time">{flight.arrival}</div>
                    <div className="airport">LAX</div>
                  </div>
                </div>
                
                <div className="amenities">
                  {flight.amenities.map((amenity, index) => (
                    <div key={index} className="amenity">
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flight-actions">
                <button 
                  className="btn btn-outline"
                  onClick={() => console.log('Flight details')}
                >
                  Details
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleBook(flight.id)}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more">
          <button className="btn btn-outline">Load More Flights</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;