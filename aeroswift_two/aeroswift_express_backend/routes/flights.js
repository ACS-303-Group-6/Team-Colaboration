// routes/flights.js
const express = require('express');
const db = require('../db');

const router = express.Router();

// Flight Search Route (replaces search_flights.php)
router.get('/search', async (req, res, next) => {
  const { origin, destination, departureDate } = req.query;

  // Basic validation
  if (!origin || !destination || !departureDate) {
    return res.status(400).json({
      success: false,
      message: 'Origin, destination, and departure date are required.',
    });
  }

  // --- Enhanced Logging for Debugging ---
  console.log('\n--- New Flight Search Request ---');
  console.log(`Received Parameters: origin=${origin}, destination=${destination}, departureDate=${departureDate}`);
  console.log('---------------------------------');
  // --- End of Logging ---

  try {
    // This query has been corrected to match the single 'flights' table schema
    // defined in schema.sql and populated by seed.js.
    const query = `
      SELECT 
          flight_id,
          flight_number,
          airline,
          origin_code,
          destination_code,
          departure_date,
          departure_time,
          arrival_time,
          price,
          status
      FROM flights
      WHERE
          origin_code = ?
          AND destination_code = ?
          AND departure_date = ?
      ORDER BY departure_time ASC;
    `;

    const [flights] = await db.query(query, [origin, destination, departureDate]);
    
    // It's conventional to return success: true even if no results are found.
    // The client can check if the flights array is empty.
    res.json({ success: true, flights: flights, message: flights.length > 0 ? 'Flights found' : 'No flights found for the selected criteria.' });

  } catch (error) {
    console.error('Flight search error:', error);
    next(error); // Pass errors to the centralized error handler
  }
});

// GET Single Flight Details
// This route allows the booking page to fetch details for a specific flight by its ID.
router.get('/:flightId', async (req, res, next) => {
  const { flightId } = req.params;
  try {
    const query = 'SELECT * FROM flights WHERE flight_id = ?';
    const [rows] = await db.query(query, [flightId]);
    const flight = rows[0];

    if (!flight) {
      return res.status(404).json({ success: false, message: 'Flight not found.' });
    }
    res.json({ success: true, flight });
  } catch (error) {
    console.error(`Error fetching flight ${flightId}:`, error);
    next(error);
  }
});

module.exports = router;