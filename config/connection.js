// Import the Sequelize library for database interactions
const Sequelize = require('sequelize');

// Import the dotenv library for loading environment variables
require('dotenv').config();

// Declare a variable to store the Sequelize instance
let sequelize;

// Check if the JAWSDB_URL environment variable exists
if (process.env.JAWSDB_URL) {
  // Create a new Sequelize instance using the JAWSDB_URL connection string
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If the JAWSDB_URL environment variable does not exist, create a new Sequelize instance using the local database details
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

// Export the Sequelize instance to make it available for use in other parts of the application
module.exports = sequelize;