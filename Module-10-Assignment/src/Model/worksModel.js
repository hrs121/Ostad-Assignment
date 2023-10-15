// studentsModel.js
const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: String,
  classNote: String,
  description: String,
  status: String,
  email: String
});

module.exports = mongoose.model('Work', workSchema);
