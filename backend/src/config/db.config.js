/**
 * file: src/config/db.config.js
 * description: File responsible for connecting to the database in MongoDB
 * data: 04/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localDatabaseUrl: process.env.DB_URI,
    secret: "password"
  }
};