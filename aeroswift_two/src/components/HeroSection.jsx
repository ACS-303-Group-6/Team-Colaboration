// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaGlobe, FaHeadset } from 'react-icons/fa';
import SearchForm from 'components/SearchForm';

const HeroSection = ({ onSearchSubmit }) => {
  return (
    <div className="position-relative bg-primary text-white py-5 py-md-5 overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <img src="/pexels-ahmedmuntasir-912050.jpg" className="w-100 h-100 object-cover" alt="Aerial view of an airplane wing above the clouds" style={{ objectFit: 'cover', filter: 'brightness(0.7)' }} />
      </div>
      <div className="container text-center position-relative z-1">
        <h1 className="display-4 display-md-2 fw-bolder mb-4 animate-fade-in-down">
          Your Journey Starts Here
        </h1>
        <p className="lead max-w-3xl mx-auto mb-4 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Discover the best flight deals and book your next adventure with AeroSwift.
          Seamless booking, unbeatable prices, and world-class service.
        </p>
        <div className="my-5">
          <p className="fs-5 fst-italic animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            "Millions of travelers trust AeroSwift to find the best flights. Why wait?"
          </p>
        </div>
        <div className="row justify-content-center g-4 mb-5">
          <div className="col-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="d-flex align-items-center">
              <div className="p-3 bg-white bg-opacity-25 rounded-circle me-3"><FaDollarSign className="fs-4 text-white" /></div>
              <span className="fw-bold">Best Prices</span>
            </div>
          </div>
          <div className="col-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="d-flex align-items-center">
              <div className="p-3 bg-white bg-opacity-25 rounded-circle me-3"><FaGlobe className="fs-4 text-white" /></div>
              <span className="fw-bold">Global Destinations</span>
            </div>
          </div>
          <div className="col-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="d-flex align-items-center">
              <div className="p-3 bg-white bg-opacity-25 rounded-circle me-3"><FaHeadset className="fs-4 text-white" /></div>
              <span className="fw-bold">24/7 Support</span>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-4 p-md-5 rounded-3 shadow-lg animate-scale-in" style={{ animationDelay: '0.7s' }}>
          <SearchForm onSubmit={onSearchSubmit} />
        </div>
        <div className="mt-4">
          <Link
            to="/booking"
            className="btn btn-light btn-lg rounded-pill shadow-lg hover-scale animate-bounce-once"
          >
            Go to Booking Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;