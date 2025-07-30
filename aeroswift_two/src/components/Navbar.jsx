// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaPlaneDeparture className="me-2 text-primary" />
          <span className="fw-bold">AeroSwift</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/search-results">Search Flights</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/booking">My Bookings</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/support">Support</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;