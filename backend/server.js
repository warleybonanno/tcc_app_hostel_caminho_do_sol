/**
 * file: server.js
 * description: File responsible for all project configuration and execution
 * data: 04/04/2022
 * author: Warley Costa Bonanno Carvalho 
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação executando na porta...: ', port);
});