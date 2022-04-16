/**
 * file: src/components/itinerary-components/CreateItinerary/CreateItinerary.js
 * description: File responsible for the logic of the 'CreateItineraryComponent.vue' component
 * data: 15/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import CreateItineraryService from '@/services/CreateItineraryService';
import {
  MazInput, MazSelect, MazPicker, MazSlider,
} from 'maz-ui';

export default {
  name: 'CreateItineraryComponent',
  components: {
    MazInput,
    MazSelect,
    MazPicker,
    MazSlider,
  },

  data() {
    return {
      createItineraryForm: {
        daysOfStay: null,
        arrivalDate: null,
        arrivalTime: null,
        departureDate: null,
        departureTime: null,
        startTimeActivities: null,
        endTimeActivities: null,
        museumInterest: 2,
        beachInterest: 2,
        adventureInterest: 2,
        foodInterest: 2,
        purchaseInterest: 2,
        touristAttractionsInterest: 2,
        pickerFormatted2: null,
      },
      isSubmitted: false,
    };
  },

  validations: {
    createItineraryForm: {
      daysOfStay: { required },
      arrivalDate: { required },
      arrivalTime: { required },
      departureDate: { required },
      departureTime: { required },
      startTimeActivities: { required },
      endTimeActivities: { required },
    },
  },

  methods: {
    registerSubmitCreateItineraryForm() {},

    async submitCreateItinerary() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();

        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa preencher todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }

        await CreateItineraryService.registerNewItinerary(this.createItineraryForm);
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        });
      }
    },
  },
};
