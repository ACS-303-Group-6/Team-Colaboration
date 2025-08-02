// server.js
const express = require('express');
const cors = require('cors');
const session = require('express-session');

// Import routes
const authRoutes = require('./routes/auth');
const flightRoutes = require('./routes/flights');
const bookingRoutes = require('./routes/bookings');
const supportRoutes = require('./routes/support');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 4000; // A common port for Node.js APIs

// --- Middleware Setup ---

// 1. CORS: Allow requests from your React frontend
app.use(cors({
  origin: 'http://localhost:3000', // The origin of your React app
  credentials: true, // Allow cookies to be sent
}));

// 2. JSON Parser: To read `req.body` from POST requests
app.use(express.json());

// 3. Session Management
app.use(session({
  secret: 'a-very-strong-secret-key-for-aeroswift', // Replace with a real secret in production
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if you're using HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/support', supportRoutes);

// --- Centralized Error Handling ---
// This should be the last piece of middleware.
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`AeroSwift Express server running on http://localhost:${PORT}`);
});