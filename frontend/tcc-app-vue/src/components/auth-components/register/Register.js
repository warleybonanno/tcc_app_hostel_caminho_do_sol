/**
 * file: src/components/auth-components/Register/Register.js
 * description: File responsible for the logic of the 'RegisterComponent.vue' component
 * data: 05/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import swal from 'sweetalert';
import { minLength, required, email } from 'vuelidate/lib/validators';
import RegisterService from '@/services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        email: null,
        password: null,
        name: null,
        sex: null,
        birthDate: null,
        phone: null,
        city: null,
        state: null,
        country: null,
      },
      isSubmitted: false,
    };
  },

  validations: {
    registerForm: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: { required },
      sex: { required },
      birthDate: { required },
      phone: { required },
      city: { required },
      state: { required },
      country: { required },
    },
  },

  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
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

        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/');
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
