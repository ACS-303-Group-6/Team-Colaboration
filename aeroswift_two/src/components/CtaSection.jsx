// src/components/CtaSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane } from 'react-icons/fa';

const CtaSection = () => {
  return (
    <div className="bg-primary py-5 text-center text-white shadow-inset">
      <h2 className="display-4 fw-bolder mb-4 animate-fade-in-down">Ready for your next adventure?</h2>
      <p className="lead mb-5 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
        Join millions of travelers who trust AeroSwift for their flights.
      </p>
      <Link to="/search" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold">
        Find Your Flight
        <FaPlane className="ms-3 fs-4" />
      </Link>
    </div>
  );
};

export default CtaSection;