/**
 * file: src/routes/index.js
 * description: File responsible for the default route of the 'api'
 * data: 04/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

const express = require('express');

const router =  express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    sucess: true,
    message: 'Seja bem-vindo!',
    version: '1.0.0',
  });
});

module.exports = router;