/**
 * file: src/models/itinerary.model.js
 * description: File responsible for the model of the 'Itinerary' class
 * data: 10/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

//Declaring the Mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

//Itinerary model --> Purpose and declare which attributes are present in the database model
const itinerarySchema = new Schema({
  daysOfStay: { type: Number, required: true},
  arrivalDate: { type: Date, required: true},
  arrivalTime: { type: Date, required: true},
  departureDate: { type: Date, required: true},
  departureTime: { type: Date, required: true},
  startTimeActivities: { type: Date, required: true},
  endTimeActivities: { type: Date, required: true},
  museumInterest: { type: Number, required: true},
  beachInterest: { type: Number, required: true},
  adventureInterest: { type: Number, required: true},
  foodInterest: { type: Number, required: true},
  purchaseInterest: { type: Number, required: true},
  touristAttractionsInterest: { type: Number, required: true},
  belongingTo: [{ type: Schema.Types.ObjectId, ref: 'users'}],
}, {
  timestamps: true,
  collection: 'itinerary',
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

//Exporting the Itinerary module so that it can be imported elsewhere in the system
module.exports = Itinerary;