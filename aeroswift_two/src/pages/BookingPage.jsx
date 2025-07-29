// src/pages/BookingPage.jsx
import React from 'react';

const BookingPage = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold text-center mb-5">My Bookings</h1>
      <div className="text-center">
        <p className="lead">You have no active bookings.</p>
        <p className="text-secondary">When you book a flight, it will appear here.</p>
      </div>
    </div>
  );
};

export default BookingPage;