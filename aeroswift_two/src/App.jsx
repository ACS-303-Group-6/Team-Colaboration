// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
// import Footer from './components/Footer'; // Assuming a Footer component exists

// Import Pages
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import BookingPage from './pages/BookingPage'; // This is now "My Bookings"
import FlightBookingPage from './pages/FlightBookingPage'; // Page for booking a specific flight
import SupportPage from './pages/SupportPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import './App.css'; // Assuming you have a main CSS file

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/auth/session', {
          credentials: 'include',
        });
        const data = await response.json();
        if (data.isLoggedIn) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Session check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, []);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center vh-100"><h2>Loading...</h2></div>;
  }

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar user={user} setUser={setUser} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/:flightId" element={<FlightBookingPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;