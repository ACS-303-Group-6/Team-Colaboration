// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setUser(null); // Clear user state in the app
        navigate('/'); // Redirect to homepage after logout
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout failed:', error);
      alert('An error occurred during logout.');
    }
  };

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
            <li className="nav-item"><NavLink className="nav-link" to="/">Search Flights</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/booking">My Bookings</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/support">Support</NavLink></li>
            {user ? (
              <>
                <li className="nav-item"><span className="nav-link text-info">Welcome, {user.name}</span></li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;