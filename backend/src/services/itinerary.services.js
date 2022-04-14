/**
 * file: src/controllers/user.controller.js
 * description: File responsible for saving the itinerary data in the database
 * data: 13/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

const Itinerary = require('../models/itinerary.model');

/**
 * Function responsible for concatenating the itinerary data and the id of the user 
 * who is registering the itinerary. In addition, it saves the Itinerary data in the 
 * database.
 * */ 
async function saveItineraryData (formData, userId) {
  const concatData = {
    ...formData,
    belongingTo: userId
  }

  const itinerary = await Itinerary.create(concatData);
  return itinerary;
}

module.exports = saveItineraryData;