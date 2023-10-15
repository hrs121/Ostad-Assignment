// worksRoutes.js
const express = require('express');
const router = express.Router();
const Works = require('../Model/worksModel');
const { verifyToken } = require('../Middleware/authMiddleware');

// Create a new work (protected by token)
router.post('/works', verifyToken, async (req, res) => {
  try {
    const work = new Works(req.body);
    const savedWork = await work.save();
    res.json(savedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all works (protected by token)
router.get('/works', verifyToken, async (req, res) => {
  try {
    const works = await Works.find();
    res.json(works);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a work (protected by token)
router.put('/works/:id', verifyToken, async (req, res) => {
  try {
    const updatedWork = await Works.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a work (protected by token)
router.delete('/works/:id', verifyToken, async (req, res) => {
  try {
    await Works.findByIdAndRemove(req.params.id);
    res.json({ message: 'Work deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
