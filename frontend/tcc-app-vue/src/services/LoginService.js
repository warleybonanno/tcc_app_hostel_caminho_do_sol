/**
 * file: src/services/RegisterService.js
 * description: File responsible for API request methods via HTTP
 * data: 06/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import swal from 'sweetalert';
import Api from './Api';

export default {
  /**
   * Method responsible for login a User (new Login User)
   * (POST): localhost:3000/api/v1/
   */
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const { token } = response.data;
      const { _id } = response.data.user;

      localStorage.setItem('jwt', token);
      localStorage.setItem('userId', _id);

      if (token) {
        swal({
          title: 'Excelente!',
          text: 'Usuário logado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao logar no sistema!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};
