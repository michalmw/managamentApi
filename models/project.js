const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title : String,
    price : Number,
    createdData: String,
    owner : String,
    teamID : String,
    comments : []
});
module.exports = mongoose.model('Projects', userSchema, 'users');
