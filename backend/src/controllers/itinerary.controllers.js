/**
 * file: src/controllers/user.controller.js
 * description: File responsible for the CRUD of the class: 'Itinerary'
 * data: 10/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

const saveItineraryData = require("../services/itinerary.services");
const Itinerary = require('../models/itinerary.model');
 // ==> Async and Await
 
 // ==> 
 exports.registerNewItinerary = async (req, res) => {
   try {
     const formData = req.body;
     const itinerary = await Itinerary.create(formData);
     return res.status(201).json({ message: 'Itinerário criado com sucesso!', itinerary});
   } catch (error) {
     res.status(400).json({ message: 'Não foi possível criar o itinerário' });
   }
 }
 