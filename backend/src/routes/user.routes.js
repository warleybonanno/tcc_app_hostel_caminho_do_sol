/**
 * file: src/routes/user.routes.js
 * description: File responsible for routes related to 'User'
 * data: 04/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require ('../controllers/user.controllers');

// ==> Route responsible for creating a new 'User': (POST) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// ==> Route responsible for the login of a 'User': (POST) localhost:3000/api/v1/login
router.post('/login', userController.loginUser);

// ==> Route responsible for returning the user profile: (GET) localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;
