// src/pages/SearchPage.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaLongArrowAltRight } from 'react-icons/fa';

// In a real application, this data would come from an API call based on the search criteria.
const mockFlights = [
  {
    id: 1,
    airline: 'AeroSwift Air',
    fromCode: 'JFK',
    toCode: 'LAX',
    departureTime: '08:00 AM',
    arrivalTime: '11:30 AM',
    duration: '5h 30m',
    price: 350,
    stops: 0,
  },
  {
    id: 2,
    airline: 'United',
    fromCode: 'JFK',
    toCode: 'LAX',
    departureTime: '10:15 AM',
    arrivalTime: '01:45 PM',
    duration: '5h 30m',
    price: 380,
    stops: 0,
  },
  {
    id: 3,
    airline: 'Delta',
    fromCode: 'JFK',
    toCode: 'LAX',
    departureTime: '01:00 PM',
    arrivalTime: '05:00 PM',
    duration: '6h 00m',
    price: 420,
    stops: 1,
    stopLocation: 'ORD',
  },
    {
    id: 4,
    airline: 'JetBlue',
    fromCode: 'JFK',
    toCode: 'LAX',
    departureTime: '04:30 PM',
    arrivalTime: '08:00 PM',
    duration: '5h 30m',
    price: 330,
    stops: 0,
  },
  {
    id: 5,
    airline: 'American Airlines',
    fromCode: 'DFW',
    toCode: 'MIA',
    departureTime: '07:30 AM',
    arrivalTime: '11:00 AM',
    duration: '2h 30m',
    price: 255,
    stops: 0,
  },
  {
    id: 6,
    airline: 'Southwest',
    fromCode: 'LAS',
    toCode: 'DEN',
    departureTime: '02:00 PM',
    arrivalTime: '04:30 PM',
    duration: '1h 30m',
    price: 180,
    stops: 0,
  },
  {
    id: 7,
    airline: 'Alaska Airlines',
    fromCode: 'SEA',
    toCode: 'SFO',
    departureTime: '09:45 AM',
    arrivalTime: '11:45 AM',
    duration: '2h 00m',
    price: 210,
    stops: 0,
  },
  {
    id: 8,
    airline: 'Spirit Airlines',
    fromCode: 'ORD',
    toCode: 'MIA',
    departureTime: '06:00 AM',
    arrivalTime: '10:00 AM',
    duration: '3h 00m',
    price: 150,
    stops: 1,
    stopLocation: 'ATL',
  },
  {
    id: 9,
    airline: 'Frontier Airlines',
    fromCode: 'DEN',
    toCode: 'PHX',
    departureTime: '08:15 PM',
    arrivalTime: '09:00 PM',
    duration: '1h 45m',
    price: 120,
    stops: 0,
  },
  {
    id: 10,
    airline: 'AeroSwift Air',
    fromCode: 'BOS',
    toCode: 'JFK',
    departureTime: '12:30 PM',
    arrivalTime: '01:30 PM',
    duration: '1h 00m',
    price: 190,
    stops: 0,
  },
  {
    id: 11,
    airline: 'United',
    fromCode: 'SFO',
    toCode: 'ORD',
    departureTime: '03:00 PM',
    arrivalTime: '09:00 PM',
    duration: '4h 00m',
    price: 320,
    stops: 0,
  },
  {
    id: 12,
    airline: 'Delta',
    fromCode: 'ATL',
    toCode: 'BOS',
    departureTime: '05:00 PM',
    arrivalTime: '07:30 PM',
    duration: '2h 30m',
    price: 280,
    stops: 0,
  },
  {
    id: 13,
    airline: 'JetBlue',
    fromCode: 'MIA',
    toCode: 'JFK',
    departureTime: '07:00 AM',
    arrivalTime: '10:00 AM',
    duration: '3h 00m',
    price: 240,
    stops: 0,
  },
  {
    id: 14,
    airline: 'American Airlines',
    fromCode: 'LAX',
    toCode: 'DFW',
    departureTime: '10:00 AM',
    arrivalTime: '03:00 PM',
    duration: '3h 00m',
    price: 290,
    stops: 0,
  },
  {
    id: 15,
    airline: 'Southwest',
    fromCode: 'PHX',
    toCode: 'LAS',
    departureTime: '01:00 PM',
    arrivalTime: '02:00 PM',
    duration: '1h 00m',
    price: 160,
    stops: 0,
  },
  {
    id: 16,
    airline: 'Alaska Airlines',
    fromCode: 'JFK',
    toCode: 'SEA',
    departureTime: '06:00 PM',
    arrivalTime: '09:30 PM',
    duration: '6h 30m',
    price: 450,
    stops: 1,
    stopLocation: 'ORD',
  },
  {
    id: 17,
    airline: 'Spirit Airlines',
    fromCode: 'ATL',
    toCode: 'LAS',
    departureTime: '09:00 PM',
    arrivalTime: '10:30 PM',
    duration: '4h 30m',
    price: 190,
    stops: 0,
  },
  {
    id: 18,
    airline: 'Frontier Airlines',
    fromCode: 'MIA',
    toCode: 'DEN',
    departureTime: '04:00 PM',
    arrivalTime: '06:30 PM',
    duration: '4h 30m',
    price: 220,
    stops: 0,
  },
  {
    id: 19,
    airline: 'AeroSwift Air',
    fromCode: 'JFK',
    toCode: 'MIA',
    departureTime: '08:30 AM',
    arrivalTime: '11:30 AM',
    duration: '3h 00m',
    price: 260,
    stops: 0,
  },
  {
    id: 20,
    airline: 'United',
    fromCode: 'ORD',
    toCode: 'SFO',
    departureTime: '11:00 AM',
    arrivalTime: '01:30 PM',
    duration: '4h 30m',
    price: 340,
    stops: 0,
  },
  {
    id: 21,
    airline: 'Delta',
    fromCode: 'BOS',
    toCode: 'ATL',
    departureTime: '01:30 PM',
    arrivalTime: '04:00 PM',
    duration: '2h 30m',
    price: 270,
    stops: 0,
  },
  {
    id: 22,
    airline: 'JetBlue',
    fromCode: 'LAX',
    toCode: 'BOS',
    departureTime: '10:00 PM',
    arrivalTime: '06:00 AM',
    duration: '5h 00m',
    price: 380,
    stops: 0,
  },
  {
    id: 23,
    airline: 'American Airlines',
    fromCode: 'JFK',
    toCode: 'ORD',
    departureTime: '09:00 AM',
    arrivalTime: '11:00 AM',
    duration: '2h 00m',
    price: 220,
    stops: 0,
  },
  {
    id: 24,
    airline: 'Southwest',
    fromCode: 'MDW',
    toCode: 'MCO',
    departureTime: '03:45 PM',
    arrivalTime: '07:15 PM',
    duration: '2h 30m',
    price: 210,
    stops: 0,
  },
];

const tripTypeDisplay = {
  'one-way': 'One Way',
  'round-trip': 'Round Trip',
};

const SearchPage = () => {
  const location = useLocation();
  const { searchData } = location.state || {};

  if (!searchData) {
    return (
      <div className="container py-5 text-center">
        <h1 className="display-4 fw-bold">No Search Performed</h1>
        <p className="lead text-secondary">Please go back to the homepage to search for flights.</p>
        <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
      </div>
    );
  }

  const { from, to, departureDate, returnDate, passengers, tripType } = searchData;

  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Search Results</h1>
          <p className="lead text-primary fw-bold fs-4">
            {from} <FaLongArrowAltRight className="mx-2" /> {to}
          </p>
          <p className="text-secondary">
            {new Date(departureDate).toDateString()}
            {returnDate && ` - ${new Date(returnDate).toDateString()}`} | {passengers} Passenger(s) | {tripTypeDisplay[tripType]}
          </p>
        </div>

        <div className="row g-4">
          {/* Filters Section (Sidebar) */}
          <div className="col-lg-3">
            <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-header bg-primary text-white fw-bold">Filter Results</div>
              <div className="card-body">
                <h6 className="card-title fw-bold">Stops</h6>
                <div className="form-check"><input className="form-check-input" type="checkbox" id="direct" defaultChecked /><label className="form-check-label" htmlFor="direct">Direct</label></div>
                <div className="form-check"><input className="form-check-input" type="checkbox" id="one-stop" defaultChecked /><label className="form-check-label" htmlFor="one-stop">1 Stop</label></div>
                <hr />
                <h6 className="card-title fw-bold">Price Range</h6>
                <input type="range" className="form-range" min="300" max="1000" step="10" id="priceRange" />
                <div className="d-flex justify-content-between text-secondary"><small>$300</small><small>$1000</small></div>
              </div>
            </div>
          </div>

          {/* Flight List Section */}
          <div className="col-lg-9">
            {mockFlights.length > 0 ? (
              mockFlights.map(flight => (
                <div className="card shadow-sm mb-4" key={flight.id}>
                  <div className="card-body">
                    <div className="row align-items-center g-3">
                      <div className="col-md-3 text-center text-md-start"><h5 className="fw-bold mb-1">{flight.airline}</h5><small className="text-secondary">Flight #{flight.id}</small></div>
                      <div className="col-md-6">
                        <div className="d-flex justify-content-around align-items-center my-3 my-md-0">
                          <div className="text-center"><FaPlaneDeparture className="text-primary fs-4" /><p className="fw-bold mb-0 mt-1">{flight.departureTime}</p><p className="text-secondary mb-0">{flight.fromCode}</p></div>
                          <div className="px-3 text-center"><FaClock className="text-secondary" /><p className="text-secondary mb-0 mt-1">{flight.duration}</p><div style={{ borderTop: '1px dashed #ccc', margin: '4px 0' }}></div><small className="text-secondary">{flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}</small></div>
                          <div className="text-center"><FaPlaneArrival className="text-primary fs-4" /><p className="fw-bold mb-0 mt-1">{flight.arrivalTime}</p><p className="text-secondary mb-0">{flight.toCode}</p></div>
                        </div>
                      </div>
                      <div className="col-md-3 text-center text-md-end"><h4 className="fw-bold mb-2">${flight.price}</h4><Link to={`/booking?flightId=${flight.id}`} className="btn btn-primary w-100">Book Now</Link></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="card shadow-sm"><div className="card-body text-center py-5"><h5 className="card-title">No Flights Found</h5><p className="card-text text-secondary">We couldn't find any flights for your search. Please try different dates or locations.</p></div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;