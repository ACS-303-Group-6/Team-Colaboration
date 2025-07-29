// src/components/FeaturedFlightsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane } from 'react-icons/fa';
import FlightCard from 'components/FlightCard';

const FeaturedFlightsSection = ({ flights = [] }) => {
  // Ensure we only take up to 3 flights
  const featuredFlights = flights.slice(0, 3);

  return (
    <div className="container py-5">
      <h2 className="display-5 fw-bold text-center text-dark mb-5 position-relative">
        <span className="position-relative d-inline-block">
          Popular Destinations
          <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </span>
      </h2>
      {featuredFlights.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {featuredFlights.map(flight => (
            <div className="col" key={flight.id}>
              <FlightCard flight={flight} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-secondary fs-5">No featured flights available at the moment. Please use the search to find flights!</p>
      )}
      <div className="text-center mt-5">
      <Link to="/search" className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 fw-bold">
          View All Flights
          <FaPlane className="ms-2" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFlightsSection;