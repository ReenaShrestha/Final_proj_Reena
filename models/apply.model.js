const mongoose = require('mongoose');

const ApplySchema = new mongoose.Schema({
  Name: String,
  Email: String,
  phone: Number,
});
module.exports = mongoose.model('newcomer', ApplySchema);