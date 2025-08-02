// src/pages/SearchResultsPage.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  // Safely access state, providing a default value if it's not available
  const { flights, search } = location.state || { flights: [], search: {} };

  // Helper to format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  // Helper to format the search date, avoiding timezone issues
  const formatSearchDate = (dateStr) => {
    if (!dateStr) return '';
    // Dates from form inputs are 'YYYY-MM-DD'. new Date() can interpret this as UTC midnight,
    // which can cause the date to be off by one day in some timezones.
    // Parsing manually ensures it's treated as a local date.
    const parts = dateStr.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]).toLocaleDateString();
  };

  return (
    <div className="container py-5 animate-fade-in">
      <h1 className="mb-2">Flight Search Results</h1>
      <p className="text-muted mb-4">
        Showing flights from <strong>{search?.origin || 'anywhere'}</strong> to <strong>{search?.destination || 'anywhere'}</strong>
        {search?.departureDate && (
          <>
            {' on '}
            <strong>{formatSearchDate(search.departureDate)}</strong>
          </>
        )}
      </p>

      {flights.length > 0 ? (
        <div className="list-group">
          {flights.map((flight) => (
            <div key={flight.id} className="list-group-item list-group-item-action flex-column align-items-start mb-3 shadow-sm rounded">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{flight.airline} - {flight.flight_number}</h5>
                <strong className="text-primary fs-4">${parseFloat(flight.price).toFixed(2)}</strong>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <p className="mb-1"><strong>From:</strong> {flight.origin}</p>
                  <p className="mb-1"><strong>Departure:</strong> {formatDate(flight.departure_time)}</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1"><strong>To:</strong> {flight.destination}</p>
                  <p className="mb-1"><strong>Arrival:</strong> {formatDate(flight.arrival_time)}</p>
                </div>
              </div>
              <div className="mt-3 text-end">
                <Link to={`/booking/${flight.id}`} state={{ flight: flight }} className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5 card shadow-sm">
          <div className="card-body">
            <h2 className="card-title">No Flights Found</h2>
            <p className="lead text-muted">We couldn't find any flights matching your search criteria.</p>
            <Link to="/" className="btn btn-secondary mt-3">Try Another Search</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;