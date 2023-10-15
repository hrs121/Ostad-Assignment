const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// app.js
const studentRoutes = require('./src/Router/studentRoutes');
const worksRoutes = require('./src/Router/worksRoutes');

app.use('/api', studentRoutes);
app.use('/api', worksRoutes);


app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Students', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports=app;