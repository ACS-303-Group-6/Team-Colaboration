// aeroswift_express_backend/seed.js
const fs = require('fs/promises');
const path = require('path');
const db = require('./db');

async function seedDatabase() {
  let connection;
  try {
    console.log('Reading flight data from JSON file...');
    const data = await fs.readFile(path.join(__dirname, 'sample-flight-data.json'), 'utf-8');
    const flights = JSON.parse(data);

    if (!flights || flights.length === 0) {
      console.log('No flights to seed.');
      return;
    }

    console.log(`Found ${flights.length} flights to insert.`);
    
    // --- Make flight dates dynamic ---
    const today = new Date();
    const formatDate = (date) => date.toISOString().split('T')[0];

    console.log('Dynamically updating flight dates...');
    flights.forEach((flight, index) => {
      const dayOffset = index % 4; // Distribute flights over the next 4 days
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + dayOffset);
      flight.departure_date = formatDate(newDate);
    });

    // Log the first flight to verify dynamic dates are working
    if (flights.length > 0) {
        console.log('Sample of first flight with dynamic date:', flights[0]);
    }

    connection = await db.getConnection();

    // Temporarily disable foreign key checks to allow truncation of referenced tables.
    console.log('Disabling foreign key checks...');
    await connection.query('SET FOREIGN_KEY_CHECKS=0;');

    // Clear the table before inserting new data to prevent duplicates
    console.log('Clearing existing flights from the database...');
    await connection.query('TRUNCATE TABLE flights');

    // Prepare data for bulk insert
    const query = `
      INSERT INTO flights (flight_id, flight_number, airline, origin_code, destination_code, departure_date, departure_time, arrival_time, price, status)
      VALUES ?;
    `;
    const values = flights.map(f => {
        // Add validation to ensure critical data is not missing before insertion.
        if (f.flight_id === undefined || f.origin_code === undefined || f.destination_code === undefined) {
            throw new Error(`Incomplete data found for flight object: ${JSON.stringify(f)}`);
        }
        return [
          f.flight_id, f.flight_number, f.airline, f.origin_code, f.destination_code,
          f.departure_date, f.departure_time, f.arrival_time, f.price, f.status
        ];
    });

    const [result] = await connection.query(query, [values]);
    console.log(`✅ Successfully inserted ${result.affectedRows} flight records.`);
    
    console.log('Database has been successfully seeded with flight data!');

  } catch (error) {
    console.error('❌ Failed to seed database:');
    console.error(error);
    console.error('\n HINT: This error can be caused by a syntax error (like a typo or a trailing comma) in `sample-flight-data.json` or a mismatch with the `schema.sql` file.');
  } finally {
    if (connection) {
      // Re-enable foreign key checks to restore data integrity. This is crucial.
      await connection.query('SET FOREIGN_KEY_CHECKS=1;');
      console.log('Foreign key checks re-enabled.');
      connection.release();
    }
    await db.end();
  }
}

seedDatabase();