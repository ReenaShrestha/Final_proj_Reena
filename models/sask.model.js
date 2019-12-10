const mongoose = require('mongoose');
const UserSchema = require('./sask.model').UserSchema

const MatchSchema = new mongoose.Schema({
  _id: Number,
  connection: [UserSchema],
  created: { type: Date, default: Date.now }
});

module.exports = {
  MatchSchema,
  MatchModel: mongoose.model('matches', MatchSchema)
}

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});