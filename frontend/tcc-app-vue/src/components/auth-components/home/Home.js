/**
 * file: src/components/auth-components/home/Home.js
 * description: File responsible for the logic of the 'HomeComponent.vue' component
 * data: 05/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'HomeComponent',
  data() {
    return {
      user: {},
    };
  },

  methods: {
    getUser() {
      const token = localStorage.getItem('jwt');
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
      return this.user;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};
