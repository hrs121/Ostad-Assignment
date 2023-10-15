// workController.js
const Works = require('../Model/worksModel');

// Create a new work
const createWork = async (workData) => {
  const work = new Works(workData);
  return await work.save();
};

// Retrieve all works
const getAllWorks = async () => {
  return await Works.find();
};

// Update a work
const updateWork = async (workId, updatedData) => {
  return await Works.findByIdAndUpdate(workId, updatedData, { new: true });
};

// Delete a work
const deleteWork = async (workId) => {
  return await Works.findByIdAndRemove(workId);
};

module.exports = {
  createWork,
  getAllWorks,
  updateWork,
  deleteWork,
};
