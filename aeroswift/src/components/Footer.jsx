// src/components/Footer.jsx
import React from 'react';
import { FaPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <FaPlane className="text-blue-500 text-2xl mr-2" />
              <h3 className="text-xl font-bold">AeroSwift</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for seamless air travel experiences. We connect you to destinations worldwide with comfort and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book Flight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Bookings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flight Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hotel Reservation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Car Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Travel</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">123 Aviation Way, New York</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-400 mr-3" />
                <span className="text-gray-400">+1 (800) 555-FLY</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-3" />
                <span className="text-gray-400">contact@aeroswift.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-gray-400 mr-3" />
                <span className="text-gray-400">Mon-Fri: 8AM-10PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AeroSwift Airlines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;