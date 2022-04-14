/**
 * file: src/controllers/user.controller.js
 * description: File responsible for the CRUD of the class: 'User'
 * data: 04/04/2022 
 * author: Warley Costa Bonanno Carvalho
 */

const User = require('../models/user.model');

// ==> Async and Await

// ==> 
exports.registerNewUser = async (req, res) => {
  try {
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);

    if(isUser.length >= 1) {
      return res.status(409).json({ message: 'Desculpe! Este email já está registrado!' });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    return res.status(201).json({ message: 'Usuário criado com sucesso!', user, token});
  } catch (error) {
    res.status(400).json({ err });
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);

    if(!user) {
      return res.status(401).json( { error: 'Erro ao realizar o Login! Verifique as suas credenciais!' });
    }

    const token = await user.generateAuthToken();
    return res.status(201).json ({ message: 'Usuário(a) logado com sucesso!', user, token});

  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};

exports.returnUserID = async (req, res) => {
  await res.json(req.userId);
};

