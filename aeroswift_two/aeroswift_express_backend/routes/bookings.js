// routes/bookings.js
const express = require('express');
const db = require('../db');

const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  res.status(401).json({ success: false, message: 'You must be logged in to perform this action.' });
};

// Get User's Bookings
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.session.user.id;
    const query = `
      SELECT 
          b.booking_id, 
          b.booking_date, 
          b.status,
          b.number_of_passengers,
          b.total_price,
          f.flight_number, 
          f.departure_time,
          f.arrival_time,
          f.airline,
          f.origin_code,
          f.destination_code
      FROM bookings AS b
      JOIN flights AS f ON b.flight_id = f.flight_id
      WHERE b.user_id = ?
      ORDER BY b.booking_date DESC
    `;
    const [bookings] = await db.query(query, [userId]);
    res.json({ success: true, bookings });
  } catch (error) {
    next(error);
  }
});

// Create a new Booking
router.post('/', isAuthenticated, async (req, res, next) => {
  const { flight_id, number_of_passengers } = req.body;
  const userId = req.session.user.id;

  if (!flight_id || !number_of_passengers || number_of_passengers < 1) {
    return res.status(400).json({ success: false, message: 'Valid flight ID and number of passengers are required.' });
  }

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // Get flight details to calculate the price.
    const [rows] = await connection.execute('SELECT price FROM flights WHERE flight_id = ?', [flight_id]);
    const flight = rows[0];

    if (!flight) {
      await connection.rollback();
      return res.status(404).json({ success: false, message: 'Flight not found.' });
    }
    
    // The simple schema does not have seat availability, so we remove that logic.
    // Calculate total price based on the flight's price.
    const totalPrice = flight.price * number_of_passengers;
    
    // Insert the new booking
    await connection.execute(
      'INSERT INTO bookings (user_id, flight_id, number_of_passengers, total_price, status) VALUES (?, ?, ?, ?, ?)',
      [userId, flight_id, number_of_passengers, totalPrice, 'Confirmed']
    );

    await connection.commit();
    res.status(201).json({ success: true, message: 'Booking confirmed successfully! You will be redirected shortly.' });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

module.exports = router;