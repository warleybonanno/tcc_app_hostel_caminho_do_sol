/**
 * file: app.js
 * description: File responsible for all the libs needed in the project and calling the routes within the application
 * data: 04/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mongooseConnection = require('./config/mongooseConnection.config');

// ==> API Routes
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.set('mongoose connection', mongooseConnection);

app.use(index);
app.use('/api/v1', userRoutes);

module.exports = app;
