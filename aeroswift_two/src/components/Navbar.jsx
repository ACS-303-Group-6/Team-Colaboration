// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Book Flight', path: '/booking' },
    { title: 'My Bookings', path: '/bookings' },
    { title: 'Support', path: '/support' },
  ];

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <div className="logo-icon">✈️</div>
            <span>AeroSwift</span>
          </Link>
          
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline">Sign In</Link>
            <Link to="/booking" className="btn btn-primary">Book Now</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;