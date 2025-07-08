// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlane, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Navbar = ({ user, onLogin, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center text-blue-800">
              <FaPlane className="text-2xl mr-2" />
              <h1 className="text-xl font-bold">AeroSwift</h1>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `hover:text-blue-700 ${isActive ? 'text-blue-800 font-medium' : 'text-gray-700'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/search" 
                className={({isActive}) => 
                  `hover:text-blue-700 ${isActive ? 'text-blue-800 font-medium' : 'text-gray-700'}`
                }
              >
                Book Flight
              </NavLink>
              <NavLink 
                to="/dashboard" 
                className={({isActive}) => 
                  `hover:text-blue-700 ${isActive ? 'text-blue-800 font-medium' : 'text-gray-700'}`
                }
              >
                My Bookings
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `hover:text-blue-700 ${isActive ? 'text-blue-800 font-medium' : 'text-gray-700'}`
                }
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `hover:text-blue-700 ${isActive ? 'text-blue-800 font-medium' : 'text-gray-700'}`
                }
              >
                Contact
              </NavLink>
            </div>
            
            <div className="ml-6 flex items-center">
              {user ? (
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-2">
                      <FaUser className="text-blue-800" />
                    </div>
                    <span className="text-gray-700">{user.name.split(' ')[0]}</span>
                  </div>
                  <button 
                    onClick={onLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <button 
                    onClick={onLogin}
                    className="border border-blue-800 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={onLogin}
                    className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className="text-gray-700 hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/search" 
                className="text-gray-700 hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                Book Flight
              </NavLink>
              <NavLink 
                to="/dashboard" 
                className="text-gray-700 hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                My Bookings
              </NavLink>
              <NavLink 
                to="/about" 
                className="text-gray-700 hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contact" 
                className="text-gray-700 hover:text-blue-700"
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              {user ? (
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 mr-2">
                      <FaUser className="text-blue-800" />
                    </div>
                    <span className="text-gray-700">{user.name}</span>
                  </div>
                  <button 
                    onClick={() => {
                      onLogout();
                      toggleMobileMenu();
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center justify-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={() => {
                      onLogin();
                      toggleMobileMenu();
                    }}
                    className="border border-blue-800 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => {
                      onLogin();
                      toggleMobileMenu();
                    }}
                    className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;