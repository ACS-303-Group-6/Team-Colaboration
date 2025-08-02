// routes/bookings.js
const express = require('express');
const db = require('../db');

const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).json({ success: false, message: 'You must be logged in to perform this action.' });
};

// Get User's Bookings (replaces get_bookings.php)
router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.session.user.id;
    const sql = `
      SELECT b.id as booking_id, b.booking_date, b.status, f.flight_number, f.airline, f.origin, f.destination, f.departure_time
      FROM bookings b
      JOIN flights f ON b.flight_id = f.id
      WHERE b.user_id = ?
    `;
    const [bookings] = await db.query(sql, [userId]);
    res.json({ success: true, bookings });
  } catch (error) {
    next(error);
  }
});

// Create Booking (replaces create_booking.php)
router.post('/', isAuthenticated, async (req, res, next) => {
  const { flight_id, passengers } = req.body;
  const userId = req.session.user.id;

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    const [rows] = await connection.execute('SELECT * FROM flights WHERE id = ? FOR UPDATE', [flight_id]);
    const flight = rows[0];

    if (!flight || flight.seats_available < passengers) {
      await connection.rollback();
      return res.status(422).json({ success: false, message: 'Not enough seats available.' });
    }

    const totalPrice = flight.price * passengers;
    await connection.execute('UPDATE flights SET seats_available = seats_available - ? WHERE id = ?', [passengers, flight_id]);
    await connection.execute(
      'INSERT INTO bookings (user_id, flight_id, number_of_passengers, total_price, status) VALUES (?, ?, ?, ?, ?)',
      [userId, flight_id, passengers, totalPrice, 'Confirmed']
    );

    await connection.commit();
    res.status(201).json({ success: true, message: 'Booking confirmed successfully!' });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
});

module.exports = router;