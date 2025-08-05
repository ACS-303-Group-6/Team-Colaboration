const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from a .env file

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'aeroswift_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Return DATE and DATETIME fields as strings, not JS Date objects. This prevents timezone issues.
  dateStrings: true
});

// --- Test the Database Connection on Startup ---
// We use the pool to get a connection and test it.
pool.getConnection((err, connection) => {
  if (err) {
    console.error('--- DATABASE CONNECTION FAILED ---');
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused. Is the database server running?');
    }
    if (err.code === 'ER_ACCESS_DENIED_ERROR') {
        console.error('FATAL: Access denied for user. Check your DB_USER and DB_PASSWORD environment variables or the credentials in db.js');
    }
    console.error('------------------------------------');
    // Exit the process with an error code if we can't connect.
    process.exit(1);
  }
  if (connection) {
    console.log('✅ Successfully connected to the MySQL database.');
    connection.release(); // Release the connection back to the pool
  }
});

// Export a promise-wrapped version of the pool
module.exports = pool.promise();