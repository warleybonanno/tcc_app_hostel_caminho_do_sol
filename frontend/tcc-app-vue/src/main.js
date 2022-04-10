import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {
  MazPhoneNumberInput, MazInput, MazSelect, MazPicker,
} from 'maz-ui';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

Vue.use(MazPhoneNumberInput);
Vue.use(MazInput);
Vue.use(MazSelect);
Vue.use(MazPicker);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
