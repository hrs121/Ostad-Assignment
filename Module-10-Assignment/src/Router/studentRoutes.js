// studentRoutes.js
const express = require('express');
const router = express.Router();
const Students = require('../Model/StudentsModel');

// Create a new student
router.post('/students', async (req, res) => {
  try {
    const student = new Students(req.body);
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all students
router.get('/students', async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student
router.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a student
router.delete('/students/:id', async (req, res) => {
  try {
    await Students.findByIdAndRemove(req.params.id);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
