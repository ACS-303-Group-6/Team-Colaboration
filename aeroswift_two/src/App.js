// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import SearchPage from './pages/SearchPage';
import ConfirmationPage from './pages/ConfirmationPage';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/search-results" element={<SearchPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;