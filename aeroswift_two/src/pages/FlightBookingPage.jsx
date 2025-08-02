// src/pages/FlightBookingPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';

const FlightBookingPage = () => {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const flight = location.state?.flight; // Get flight details passed from search results

  const [passengers, setPassengers] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleBookingConfirm = async () => {
    setIsBooking(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/api/bookings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for sending session cookie
        body: JSON.stringify({
          flight_id: flightId,
          passengers: parseInt(passengers, 10),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage('Booking successful! Redirecting to your bookings...');
        // Redirect after a short delay to allow user to see the message
        setTimeout(() => {
          navigate('/booking');
        }, 2000);
      } else {
        setError(data.message || 'Booking failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsBooking(false);
    }
  };

  if (!flight) {
    return (
      <div className="container py-5 text-center">
        <h2>Flight details not found.</h2>
        <p>Please go back to the search results and select a flight.</p>
        <Link to="/" className="btn btn-primary">Back to Search</Link>
      </div>
    );
  }

  return (
    <div className="container py-5 animate-fade-in">
      <h1 className="mb-4">Confirm Your Booking</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{flight.airline} - {flight.flight_number}</h5>
          <p className="card-text"><strong>From:</strong> {flight.origin} <br /><strong>To:</strong> {flight.destination}</p>
          <p className="card-text"><strong>Price per ticket:</strong> ${parseFloat(flight.price).toFixed(2)}</p>
          <div className="mb-3">
            <label htmlFor="passengers" className="form-label">Number of Passengers</label>
            <input type="number" className="form-control" id="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" max={flight.seats_available} />
          </div>
          <button className="btn btn-primary w-100" onClick={handleBookingConfirm} disabled={isBooking || passengers < 1 || successMessage}>
            {isBooking ? 'Booking...' : `Confirm Booking for ${passengers} ($${(passengers * flight.price).toFixed(2)})`}
          </button>
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default FlightBookingPage;