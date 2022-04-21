/**
 * file: src/services/CreateItineraryService.js
 * description: File responsible for API request methods via HTTP
 * data: 15/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import swal from 'sweetalert';
import Api from './Api';

export default {
  /**
   * Method responsible for creating a new Itinerary (new Itinerary)
   * (POST): localhost:3000/api/v1/createItinerary
   */
  async registerNewItinerary(userId, newItinerary) {
    console.log(newItinerary);
    console.log(userId);
    console.log(localStorage);
    try {
      const formData = await this.saveItineraryData(newItinerary, userId);
      console.log(formData);
      const response = await Api().post('/registerItinerary', formData);

      const token = localStorage.getItem('jwt');

      if (token) {
        swal({
          title: 'Excelente!',
          text: 'Itinerário cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Não foi possível cadastrar itinerário!',
        icon: 'error',
      });
    }
  },

  async saveItineraryData(formData, userId) {
    const concatData = {
      ...formData,
      belongingTo: userId,
    };
    return concatData;
  },

};
