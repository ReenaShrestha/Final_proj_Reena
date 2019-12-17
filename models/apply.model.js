const mongoose = require('mongoose');

const ApplySchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  phone: Number,
});
module.exports = mongoose.model('newcomer', ApplySchema);