const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:  String,
  lastName: String,
  userName:   String,
  email: String,
  password: String,
  login: String
});
module.exports = mongoose.model('User', userSchema);
