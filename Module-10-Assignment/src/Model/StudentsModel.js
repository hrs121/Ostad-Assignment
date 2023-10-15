// studentsModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  mobile: String,
  password: String,
  address: String,
  roll: String,
  class: String,
});

module.exports = mongoose.model('Students', studentSchema);
