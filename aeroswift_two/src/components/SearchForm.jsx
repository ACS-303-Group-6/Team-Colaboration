// src/components/SearchForm.jsx
import React, { useState, useEffect } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
// Note: You may need to run: npm install react-datepicker

const SearchForm = ({ onSubmit, initialData = {} }) => {
  const [from, setFrom] = useState(initialData.from || '');
  const [to, setTo] = useState(initialData.to || '');
  const [departureDate, setDepartureDate] = useState(() => initialData.departureDate ? new Date(initialData.departureDate) : new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ from, to, departureDate: departureDate.toISOString().split('T')[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-end">
        <div className="col-md">
          <label htmlFor="from" className="form-label fw-bold text-start d-block">From</label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0"><FaPlaneDeparture /></span>
            <input type="text" id="from" className="form-control form-control-lg border-start-0" placeholder="e.g., New York" value={from} onChange={(e) => setFrom(e.target.value)} required />
          </div>
        </div>
        <div className="col-md">
          <label htmlFor="to" className="form-label fw-bold text-start d-block">To</label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0"><FaPlaneArrival /></span>
            <input type="text" id="to" className="form-control form-control-lg border-start-0" placeholder="e.g., London" value={to} onChange={(e) => setTo(e.target.value)} required />
          </div>
        </div>
        <div className="col-md">
          <label htmlFor="departureDate" className="form-label fw-bold text-start d-block">Departure</label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0"><FaCalendarAlt /></span>
            <DatePicker id="departureDate" selected={departureDate} onChange={(date) => setDepartureDate(date)} className="form-control form-control-lg border-start-0" dateFormat="MMMM d, yyyy" minDate={new Date()} />
          </div>
        </div>
        <div className="col-md-auto">
          <button type="submit" className="btn btn-search-hero w-100">
            <FaSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;