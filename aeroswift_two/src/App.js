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
import SupportPage from './pages/SupportPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

import './index.css';
import { AuthProvider } from 'context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="app-container min-h-screen flex flex-col">
        <Navbar />
        <main className="content flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/search-results" element={<SearchPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;