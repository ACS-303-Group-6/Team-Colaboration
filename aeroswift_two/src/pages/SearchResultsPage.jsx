// src/pages/SearchResultsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // The component now manages its own state for flights, loading, and errors.
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // We can still use the state passed from the homepage for a better display text.
  const search = location.state?.search || {};

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = process.env.REACT_APP_API_URL || '';
        // The query parameters are now taken directly from the URL.
        const response = await fetch(`${apiUrl}/api/flights/search?${searchParams.toString()}`, {
          credentials: 'include',
        });

        const data = await response.json().catch(() => {
          throw new Error(`Server returned a non-JSON response (Status: ${response.status})`);
        });

        if (response.ok && data.success) {
          setFlights(data.flights);
        } else {
          setError(data.message || 'An error occurred while fetching flights.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [searchParams]); // Re-run the effect if the search parameters in the URL change.

  // Helper to format date for display
  const formatDateTime = (date, time) => {
    // Defensive check: if date or time is missing, return 'N/A'
    if (!date || !time) return 'N/A';

    try {
      // The backend sends date as 'YYYY-MM-DD' and time as 'HH:mm:ss'.
      // We combine them into a standard ISO 8601 format string.
      const dateTimeString = `${date}T${time}`;
      const d = new Date(dateTimeString);

      // Check if the created date is valid.
      if (isNaN(d.getTime())) {
        console.error(`[formatDateTime] Invalid date created from string: "${dateTimeString}"`);
        return 'Invalid Date';
      }
      return d.toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
      });
    } catch (e) {
      console.error('[formatDateTime] Error:', e);
      return 'Date Error';
    }
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

  if (loading) {
    return <div className="container py-5 text-center"><h2>Searching for flights...</h2></div>;
  }

  if (error) {
    return <div className="container py-5 text-center"><div className="alert alert-danger">{error}</div></div>;
  }

  return (
    <div className="container py-5 animate-fade-in">
      <h1 className="mb-2">Flight Search Results</h1>
      <p className="text-muted mb-4">
        {/* Correctly access the search parameters from the state object */}
        Showing flights from <strong>{search?.from || 'anywhere'}</strong> to <strong>{search?.to || 'anywhere'}</strong>
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
            <div key={flight.flight_id} className="list-group-item list-group-item-action flex-column align-items-start mb-3 shadow-sm rounded">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{flight.airline} - {flight.flight_number}</h5>
                <strong className="text-primary fs-4">${parseFloat(flight.price).toFixed(2)}</strong>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  {/* The API returns origin_code, not origin_name. Display what's available. */}
                  <p className="mb-1"><strong>From:</strong> {flight.origin_code}</p>
                  <p className="mb-1"><strong>Departure:</strong> {formatDateTime(flight.departure_date, flight.departure_time)}</p>
                </div>
                <div className="col-md-6">
                  {/* The API returns destination_code, not destination_name. */}
                  <p className="mb-1"><strong>To:</strong> {flight.destination_code}</p>
                  <p className="mb-1"><strong>Arrival:</strong> {formatDateTime(flight.departure_date, flight.arrival_time)}</p>
                </div>
              </div>
              <div className="mt-3 text-end">
                {/* The booking page fetches its own data, so we don't need to pass state. */}
                <Link to={`/booking/${flight.flight_id}`} className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5 card shadow-sm">
          <div className="card-body">
            <h2 className="card-title">No Flights Found</h2>
            <p className="lead text-muted">We couldn't find any flights matching your search criteria.</p>
            <p className="text-muted"><small>Hint: The database has flights available for today and the next few days. Please ensure your search date is within this range.</small></p>
            <Link to="/" className="btn btn-secondary mt-3">Try Another Search</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;