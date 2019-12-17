const mongoose = require('mongoose');

const RenewSchema = new mongoose.Schema({
  Fullname: String,
  Email: String,
  
});
module.exports = mongoose.model('renew', RenewSchema);
