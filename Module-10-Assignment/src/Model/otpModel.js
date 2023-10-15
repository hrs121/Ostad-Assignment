// studentsModel.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  status: Number,
});

module.exports = mongoose.model('otp', otpSchema);
