const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  name: String,
  order1: String,
  number: Number,
  howmuch: Number,
  date: { type: Date, default: Date.now },
  address: String,
  message: String

});



module.exports = mongoose.model("User", userSchema);