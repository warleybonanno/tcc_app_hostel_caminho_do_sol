/**
 * file: src/models/user.model.js
 * description: File responsible for the model of the 'User' class
 * data: 04/04/2022
 * author: Warley Costa Bonanno Carvalho
 */

//Declaring the Mongoose, BCrypt and JSONWebToken
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

//User model --> Purpose and declare which attributes are present in the database model
const userSchema = new Schema({
  email: { type: String, required: true},
  password: { type: String, required: true},
  name: { type: String, required: true},
  sex: { type: String, required: true},
  birthDate: { type: Date, required: true},
  phone: { type: String, required: true},
  city: { type: String, required: true},
  state: { type: String, required: true},
  country: { type: String, required: true},
  tokens: [
    {
      token: { type: String, required: true },
    }
  ]
}, {
  timestamps: true,
  collection: 'users',
});

// ==> Generate Password Hash before saving to database
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// ==> Generate a jwt authentication for the user to be able to access the system 
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret');
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// ==> Search the database for the username and/or password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    throw new Error({ error: 'Usuário não encontrado!' });
  }
 
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error({ error: 'Senha inválida!' });
  }

  return user;
};

const User = mongoose.model('User', userSchema);

//Exporting the user module so that it can be imported elsewhere in the system
module.exports = User;