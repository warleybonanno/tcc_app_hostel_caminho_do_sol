/**
 * file: src/services/Api.js
 * description: File responsible for initializing 'axios' and HTTP base url requests
 * data: 05/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});
