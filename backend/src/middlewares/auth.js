/**
 * file: src/middlewares/auth.js
 * description: File responsible for confirming if a certain 'User' is authorized to access a certain resource
 * data: 04/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(token);

    const decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Falha na Autenticação!' })
  } 
};