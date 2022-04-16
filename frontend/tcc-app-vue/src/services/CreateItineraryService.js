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
  async registerNewItinerary(newItinerary, user) {
    try {
      const response = await Api().post('/createItinerary', newItinerary, user);
      const { token } = response.data;

      localStorage.setItem('jwt', token);

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
};
