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
   * Method responsible for creating a new Register User (new Register User)
   * (POST): localhost:3000/api/v1/register
   */
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/register', newUser);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Excelente!',
          text: 'Usuário cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao criar novo cadastro de usuário!',
        icon: 'error',
      });
    }
  },
};
