/**
 * file: src/components/auth-components/login/Login.js
 * description: File responsible for the logic of the 'LoginComponent.vue' component
 * data: 05/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import swal from 'sweetalert';
import { required, email, minLength } from 'vuelidate/lib/validators';
import LoginService from '@/services/LoginService';
import { MazInput } from 'maz-ui';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },

  components: { MazInput },

  validations: {
    loginForm: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },

  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();

        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/createItinerary');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'E-mail ou senha inválida',
          icon: 'error',
        });
      }
    },
  },
};
