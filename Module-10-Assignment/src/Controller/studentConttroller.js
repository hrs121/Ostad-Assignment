// studentController.js

const Students = require('../Model/StudentsModel');

// Create a new student
const createStudent = async (studentData) => {
  const student = new Students(studentData);
  return await student.save();
};

// Retrieve all students
const getAllStudents = async () => {
  return await Students.find();
};

// Update a student
const updateStudent = async (studentId, updatedData) => {
  return await Students.findByIdAndUpdate(studentId, updatedData, { new: true });
};

// Delete a student
const deleteStudent = async (studentId) => {
  return await Students.findByIdAndRemove(studentId);
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
};
