// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [user, setUser] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  
  // Mock flight data
  const flights = [
    {
      id: 1,
      flightNumber: "AA237",
      origin: "JFK",
      destination: "LAX",
      departureTime: "2025-06-25T08:30:00",
      arrivalTime: "2025-06-25T11:15:00",
      price: 249,
      availableSeats: 12
    },
    {
      id: 2,
      flightNumber: "DL418",
      origin: "ORD",
      destination: "MIA",
      departureTime: "2025-06-26T10:15:00",
      arrivalTime: "2025-06-26T13:35:00",
      price: 189,
      availableSeats: 5
    },
    {
      id: 3,
      flightNumber: "UA765",
      origin: "SFO",
      destination: "SEA",
      departureTime: "2025-06-27T14:45:00",
      arrivalTime: "2025-06-27T17:00:00",
      price: 129,
      availableSeats: 22
    }
  ];

  const handleLogin = () => {
    setUser({
      name: "John Smith",
      email: "john@example.com",
      bookings: [
        {
          id: "AS-789456123",
          flight: flights[0],
          passengers: ["John Smith", "Jane Smith", "Emily Smith"],
          totalPrice: 864.30,
          status: "confirmed"
        }
      ]
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleBooking = (flight, passengerData) => {
    const booking = {
      id: `AS-${Math.floor(Math.random() * 1000000000)}`,
      flight,
      ...passengerData,
      totalPrice: flight.price * passengerData.seats,
      status: "confirmed"
    };
    
    setBookingData(booking);
    
    if (user) {
      setUser({
        ...user,
        bookings: [...user.bookings, booking]
      });
    }
    
    return booking;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage flights={flights} />} />
            <Route path="/search" element={<SearchPage flights={flights} />} />
            <Route path="/book/:flightId" element={
              <BookingPage flights={flights} onBooking={handleBooking} />
            } />
            <Route path="/confirm" element={
              bookingData ? 
                <ConfirmationPage booking={bookingData} /> : 
                <Navigate to="/" />
            } />
            <Route path="/dashboard" element={
              user ? 
                <DashboardPage user={user} /> : 
                <Navigate to="/" />
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;