const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    users : [
      {
      }
    ]
});
module.exports = mongoose.model('Teams', userSchema, 'users');
