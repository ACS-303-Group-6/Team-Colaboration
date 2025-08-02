// routes/flights.js
const express = require('express');
const db = require('../db');

const router = express.Router();

// Flight Search Route (replaces search_flights.php)
router.get('/search', async (req, res, next) => {
  try {
    let sql = 'SELECT * FROM flights WHERE seats_available > 0';
    const params = [];

    if (req.query.origin) {
      sql += ' AND origin LIKE ?';
      params.push(`%${req.query.origin}%`);
    }
    if (req.query.destination) {
      sql += ' AND destination LIKE ?';
      params.push(`%${req.query.destination}%`);
    }
    if (req.query.departureDate) {
      // Using a range check is more performant as it can use an index on departure_time.
      // The DATE() function on a column prevents index usage.
      const startDate = `${req.query.departureDate} 00:00:00`;
      const endDate = `${req.query.departureDate} 23:59:59`;
      sql += ' AND departure_time BETWEEN ? AND ?';
      params.push(startDate, endDate);
    }

    const [flights] = await db.query(sql, params);
    res.json({ success: true, flights });
  } catch (error) {
    next(error); // Pass errors to the centralized error handler
  }
});

module.exports = router;