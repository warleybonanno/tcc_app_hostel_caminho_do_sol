/**
 * file: src/components/itinerary-components/CreateItinerary/CreateItinerary.js
 * description: File responsible for the logic of the 'CreateItineraryComponent.vue' component
 * data: 15/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import swal from 'sweetalert';
import moment from 'moment';
import { required, between } from 'vuelidate/lib/validators';
import CreateItineraryService from '@/services/CreateItineraryService';
import {
  MazInput, MazSelect, MazPicker, MazSlider,
} from 'maz-ui';
import VueJwtDecode from 'vue-jwt-decode';

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
        profile: null,
        pickerFormatted2: 'L',
      },
      options: [
        { label: 'None', value: null },
        { label: 'Perfil 1', value: 'Perfil 1' },
        { label: 'Perfil 2', value: 'Perfil 2' },
        { label: 'Perfil 3', value: 'Perfil 3' },
        { label: 'Perfil 4', value: 'Perfil 4' },
        { label: 'Perfil 5', value: 'Perfil 5' },
        { label: 'Perfil 6', value: 'Perfil 6' },
      ],
      isSubmitted: false,
    };
  },

  validations: {
    createItineraryForm: {
      daysOfStay: {
        required,
        between: between(1, 7),
      },
      arrivalDate: {
        required,
        minValue: (value) => value >= moment(new Date()).format('YYYY-MM-DD 12:00 a'),
      },
      departureDate: { required },
      startTimeActivities: { required },
      endTimeActivities: { required },
      profile: { required },
    },
  },

  methods: {
    registerSubmitCreateItineraryForm() {},

    async submitCreateItinerary() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();

        if (this.$v.createItineraryForm.daysOfStay.required === false
          || this.$v.createItineraryForm.arrivalDate.required === false
          || this.$v.createItineraryForm.departureDate.required === false
          || this.$v.createItineraryForm.profile.required === false) {
          swal({
            title: 'Oops!',
            text: 'Você precisa preencher todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }

        if (this.$v.createItineraryForm.daysOfStay.between === false) {
          swal({
            title: 'Oops!',
            text: 'Quantidade de dias para roteiro inválido. Favor inserir um valor entre 1 e 7',
            icon: 'error',
          });
          return;
        }

        if (this.$v.createItineraryForm.arrivalDate.minValue === false) {
          swal({
            title: 'Oops!',
            text: 'Data selecionada inválida. A data não pode ser menor que a data atual.',
            icon: 'error',
          });
          return;
        }

        const userId = localStorage.getItem('userId');
        await CreateItineraryService.registerNewItinerary(userId, this.createItineraryForm);
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
