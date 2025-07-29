// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import BookingPage from 'pages/BookingPage';
import ContactPage from 'pages/ContactPage';
import Layout from 'components/Layout';

// Mock flight data to be passed down as props
const mockFlights = [
  { id: 1, from: 'Nairobi (NBO)', to: 'New York (JFK)', price: 750, airline: 'Kenya Airways', departureTime: '08:00', arrivalTime: '22:00', imageUrl: '/destinations/new-york.jpg' },
  { id: 2, from: 'Nairobi (NBO)', to: 'London (LHR)', price: 600, airline: 'British Airways', departureTime: '10:30', arrivalTime: '18:30', imageUrl: '/destinations/london.jpg' },
  { id: 3, from: 'Nairobi (NBO)', to: 'Dubai (DXB)', price: 450, airline: 'Emirates', departureTime: '14:00', arrivalTime: '20:00', imageUrl: '/destinations/dubai.jpg' },
  { id: 4, from: 'Nairobi (NBO)', to: 'Paris (CDG)', price: 620, airline: 'Air France', departureTime: '09:15', arrivalTime: '17:45', imageUrl: '/destinations/paris.jpg' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage flights={mockFlights} />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="search-results" element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;