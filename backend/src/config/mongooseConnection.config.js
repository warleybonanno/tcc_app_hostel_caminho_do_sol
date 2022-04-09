/**
 * file: src/models/user.model.js
 * description: File responsible for making the connection via mongoose
 * data: 04/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

const express = require('express');
const mongoose = require('mongoose');

// ==> Import file: 'db.config.js' 
const database = require('./db.config') // ==> Database local connection

mongoose.Promise = global.Promise;

// ==> Database connection
mongoose.connect(database.local.localDatabaseUrl).then(() => {
  console.log('A Base de Dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
});