// src/pages/BookingPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // The Express session will handle user identification via the cookie.
        const response = await fetch('http://localhost:4000/api/bookings/', {
          credentials: 'include', // Important: sends cookies (like the session ID) with the request
        });
        const data = await response.json();

        if (response.ok && data.success) {
          setBookings(data.bookings);
        } else {
          setError(data.message || 'Failed to fetch bookings.');
        }
      } catch (err) {
        setError('An error occurred. Please try again later.');
        console.error('Fetch bookings error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="container py-5 text-center"><h2>Loading your bookings...</h2></div>;
  }

  if (error) {
    return <div className="container py-5 text-center"><div className="alert alert-danger">{error}</div><p>You might need to log in to see your bookings.</p><Link to="/login" className="btn btn-primary">Go to Login</Link></div>;
  }

  const statusColors = {
    Confirmed: 'success',
    Pending: 'warning',
    Cancelled: 'danger',
    // Add other statuses here
  };

  return (
    <div className="container py-5 animate-fade-in">
      <h1 className="display-4 fw-bold text-center mb-5">My Bookings</h1>
      {bookings.length > 0 ? (
        <div className="list-group">
          {bookings.map(booking => (
            <div key={booking.booking_id} className="list-group-item mb-3 shadow-sm rounded">
              <h5 className="mb-1">{booking.airline}: {booking.origin} to {booking.destination}</h5>
              <p className="mb-1">Flight: {booking.flight_number} | Status: <span className={`badge bg-${statusColors[booking.status] || 'secondary'}`}>{booking.status}</span></p>
              <small>Booked on: {new Date(booking.booking_date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center card p-4 shadow-sm">
          <p className="lead">You have no active bookings.</p>
          <p className="text-secondary">When you book a flight, it will appear here.</p>
          <Link to="/" className="btn btn-primary mt-3">Search for Flights</Link>
        </div>
      )}
    </div>
  );
};

export default BookingPage;