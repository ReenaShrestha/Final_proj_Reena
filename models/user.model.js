const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    required: true
  },
  Email: String,
  Subject:String,
  Message: String,
});
module.exports = mongoose.model('user', InputSchema);

  