const mysql = require('mysql2');

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: 'localhost', // or your db host
  user: 'root',      // Default XAMPP username
  password: '', // Default XAMPP password is empty
  database: 'aeroswift_db', // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
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
        console.error('FATAL: Access denied for user. Check your username and password in db.js');
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