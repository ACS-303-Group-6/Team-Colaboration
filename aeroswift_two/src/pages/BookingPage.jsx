// src/pages/BookingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('one-way');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search-results');
  };

  return (
    <div className="booking-page">
      <div className="container">
        <div className="page-header">
          <h1>Book Your Flight</h1>
          <p>Find the best flights for your next journey</p>
        </div>
        
        <div className="booking-card">
          <div className="trip-toggle">
            <button 
              className={`toggle-option ${tripType === 'one-way' ? 'active' : ''}`}
              onClick={() => setTripType('one-way')}
            >
              One Way
            </button>
            <button 
              className={`toggle-option ${tripType === 'round-trip' ? 'active' : ''}`}
              onClick={() => setTripType('round-trip')}
            >
              Round Trip
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <div className="input-with-icon">
                  <span className="icon">✈️</span>
                  <input 
                    type="text" 
                    placeholder="City or airport" 
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="swap-button">
                <button type="button" className="icon-button">
                  <span>⇄</span>
                </button>
              </div>
              
              <div className="form-group">
                <label>To</label>
                <div className="input-with-icon">
                  <span className="icon">✈️</span>
                  <input 
                    type="text" 
                    placeholder="City or airport" 
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Departure</label>
                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  minDate={new Date()}
                  dateFormat="EEE, MMM d"
                />
              </div>
              
              {tripType === 'round-trip' && (
                <div className="form-group">
                  <label>Return</label>
                  <DatePicker
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    minDate={departureDate}
                    dateFormat="EEE, MMM d"
                  />
                </div>
              )}
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Passengers</label>
                <div className="select-wrapper">
                  <select 
                    value={passengers} 
                    onChange={(e) => setPassengers(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Cabin Class</label>
                <div className="select-wrapper">
                  <select 
                    value={cabinClass} 
                    onChange={(e) => setCabinClass(e.target.value)}
                  >
                    <option value="economy">Economy</option>
                    <option value="premium">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="form-submit">
              <button type="submit" className="btn btn-primary btn-block">
                Search Flights
              </button>
            </div>
          </form>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💯</div>
            <h3>Best Price Guarantee</h3>
            <p>Find our lowest price to destinations worldwide, guaranteed.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Free Cancellation</h3>
            <p>Cancel for free on most bookings up to 24 hours before departure.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Travel with Confidence</h3>
            <p>Flexible booking options and enhanced safety measures.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;