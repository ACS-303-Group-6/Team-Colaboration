// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaPlaneDeparture, FaClock, FaStar, FaWifi, FaUtensils } from 'react-icons/fa';

// Mock data for demonstration
const allFlights = [
  { id: 1, from: 'Nairobi (NBO)', to: 'New York (JFK)', price: 750, airline: 'Kenya Airways', departure: '08:00', arrival: '22:00', duration: '14h', rating: 4.5, stops: 1, amenities: ['WiFi', 'Food'] },
  { id: 2, from: 'Nairobi (NBO)', to: 'London (LHR)', price: 600, airline: 'British Airways', departure: '10:30', arrival: '18:30', duration: '8h', rating: 4.2, stops: 0, amenities: ['WiFi'] },
  { id: 3, from: 'Nairobi (NBO)', to: 'Dubai (DXB)', price: 450, airline: 'Emirates', departure: '14:00', arrival: '20:00', duration: '6h', rating: 4.8, stops: 0, amenities: ['WiFi', 'Food', 'Lounge'] },
  { id: 4, from: 'Nairobi (NBO)', to: 'Paris (CDG)', price: 620, airline: 'Air France', departure: '09:15', arrival: '17:45', duration: '8h 30m', rating: 4.4, stops: 0, amenities: ['Food'] },
  { id: 5, from: 'Nairobi (NBO)', to: 'Tokyo (NRT)', price: 950, airline: 'Qatar Airways', departure: '22:00', arrival: '17:00', duration: '19h', rating: 4.9, stops: 1, amenities: ['WiFi', 'Food', 'Lounge'] },
  { id: 6, from: 'Nairobi (NBO)', to: 'Sydney (SYD)', price: 1250, airline: 'Qantas', departure: '19:00', arrival: '18:00', duration: '23h', rating: 4.6, stops: 1, amenities: ['WiFi', 'Food'] },
];

const amenityIcons = {
  WiFi: <FaWifi className="me-1" />,
  Food: <FaUtensils className="me-1" />,
  Lounge: <FaStar className="me-1" />, // Placeholder icon
};

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleFlights, setVisibleFlights] = useState(3);

  // Extract search parameters from URL or state
  const queryParams = new URLSearchParams(location.search);
  const from = location.state?.searchData?.from || queryParams.get('from') || 'Nairobi (NBO)';
  const to = location.state?.searchData?.to || queryParams.get('to') || 'Anywhere';
  const date = location.state?.searchData?.departureDate || queryParams.get('date') || new Date().toLocaleDateString();

  // Filter flights based on search criteria
  const filteredFlights = allFlights.filter(flight => {
    const fromMatch = from === 'Anywhere' || flight.from.toLowerCase().includes(from.toLowerCase().split(' ')[0]);
    const toMatch = to === 'Anywhere' || flight.to.toLowerCase().includes(to.toLowerCase().split(' ')[0]);
    // In a real app, date comparison would be more robust
    return fromMatch && toMatch;
  });

  const handleBook = (flightId) => {
    navigate(`/booking?flightId=${flightId}`);
  };

  const handleLoadMore = () => {
    // Load more from the filtered list
    setVisibleFlights(prev => Math.min(prev + 3, filteredFlights.length));
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Available Flights</h1>
        <p className="lead text-secondary">
          {from} to {to} on {date}
        </p>
      </div>

      {filteredFlights.length > 0 ? (
        <>
          <div className="d-flex flex-column gap-4">
            {filteredFlights.slice(0, visibleFlights).map((flight) => (
              <div key={flight.id} className="card shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary-subtle text-primary p-3 rounded me-3">
                          <FaPlaneDeparture size="1.5em" />
                        </div>
                        <div>
                          <h5 className="fw-bold mb-0">{flight.airline}</h5>
                          <div className="d-flex align-items-center text-warning">
                            <FaStar />
                            <span className="ms-1 text-dark">{flight.rating}/5</span>
                          </div>
                        </div>
                      </div>

                      <hr className="my-3" />

                      <div className="d-flex justify-content-between align-items-center text-center">
                        <div>
                          <p className="h5 fw-bold mb-0">{flight.departure}</p>
                          <p className="text-muted mb-0">{flight.from.match(/\(([^)]+)\)/)?.[1]}</p>
                        </div>
                        <div className="flex-grow-1 mx-4">
                          <div className="d-flex align-items-center justify-content-center position-relative">
                            <hr className="w-100" />
                            <FaClock className="position-absolute bg-white px-1 text-muted" />
                          </div>
                          <p className="text-muted small mt-1">
                            {flight.duration}
                            {flight.stops > 0 && ` • ${flight.stops} ${flight.stops === 1 ? 'stop' : 'stops'}`}
                          </p>
                        </div>
                        <div>
                          <p className="h5 fw-bold mb-0">{flight.arrival}</p>
                          <p className="text-muted mb-0">{flight.to.match(/\(([^)]+)\)/)?.[1]}</p>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2 mt-3">
                        {flight.amenities.map((amenity) => (
                          <span key={amenity} className="badge bg-light text-dark border d-flex align-items-center">
                            {amenityIcons[amenity]}
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                      <h3 className="fw-bold text-primary mb-1">${flight.price}</h3>
                      <p className="text-muted small">per passenger</p>
                      <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-outline-secondary btn-sm me-md-2" onClick={() => console.log('Flight details', flight.id)}>
                          Details
                        </button>
                        <button className="btn btn-primary" onClick={() => handleBook(flight.id)}>
                          Select Flight
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleFlights < filteredFlights.length && (
            <div className="text-center mt-4">
              <button className="btn btn-outline-primary px-4 py-2" onClick={handleLoadMore}>
                Load More Flights
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-5">
          <h3 className="fw-bold">No Flights Found</h3>
          <p className="text-secondary">We couldn't find any flights for your search. Please try different criteria.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;