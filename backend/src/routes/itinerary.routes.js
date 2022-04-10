/**
 * file: src/routes/itinerary.routes.js
 * description: File responsible for routes related to 'Itinerary'
 * data: 10/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

 const express = require('express');
 const router = express.Router();
 
 // ==> Route responsible for creating a new 'Itinerary': (POST) localhost:3000/api/v1/itineraryregister
 router.post('/register', userController.registerNewUser);
 
 module.exports = router;
 