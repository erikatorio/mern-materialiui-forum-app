const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: Date
});

user

const User = mongoose.model('User', UserSchema);