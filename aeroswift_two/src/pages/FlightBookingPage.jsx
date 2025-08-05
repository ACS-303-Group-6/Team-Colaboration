// src/pages/FlightBookingPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FlightBookingPage = () => {
  const { flightId } = useParams();
  const navigate = useNavigate();

  // This page now fetches its own data, making it robust and refresh-safe.
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [passengers, setPassengers] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || '';
        const response = await fetch(`${apiUrl}/api/flights/${flightId}`, { credentials: 'include' });
        const data = await response.json();
        if (response.ok && data.success) {
          setFlight(data.flight);
        } else {
          setError(data.message || 'Could not fetch flight details.');
        }
      } catch (err) {
        setError('An error occurred while fetching flight details.');
      } finally {
        setLoading(false);
      }
    };
    fetchFlightDetails();
  }, [flightId]);

  const handleBookingConfirm = async () => {
    setIsBooking(true);
    setError(null);
    setSuccessMessage(null);

    if (!flight) {
        setError('Flight data is not available. Cannot proceed with booking.');
        setIsBooking(false);
        return;
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for sending session cookie
        body: JSON.stringify({
          flight_id: parseInt(flightId, 10),
          number_of_passengers: parseInt(passengers, 10),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message || 'Booking successful! Redirecting to your bookings...');
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

  if (loading) {
    return <div className="container py-5 text-center"><h2>Loading Flight Details...</h2></div>;
  }

  if (error || !flight) {
    return (
      <div className="container py-5 text-center">
        <h2>{error || 'Flight details not found.'}</h2>
        <p>Please go back and try your search again.</p>
        <Link to="/" className="btn btn-primary">Back to Search</Link>
      </div>
    );
  }

  return (
    <div className="container py-5 animate-fade-in">
      <h1 className="mb-4">Confirm Your Booking</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{flight.airline} - Flight {flight.flight_number}</h5>
          <p className="card-text"><strong>From:</strong> {flight.origin_code} <br /><strong>To:</strong> {flight.destination_code}</p>
          <p className="card-text"><strong>Price per ticket:</strong> ${parseFloat(flight.price).toFixed(2)}</p>
          <div className="mb-3">
            <label htmlFor="passengers" className="form-label">Number of Passengers</label>
            <input type="number" className="form-control" id="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" />
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