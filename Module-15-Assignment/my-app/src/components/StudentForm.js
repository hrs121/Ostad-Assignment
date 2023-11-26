import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // Add other form fields based on your data model
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/students', formData)
      .then((response) => console.log('Student created:', response.data))
      .catch((error) => console.error('Error creating student: ', error));
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields based on your data model */}
        <label>First Name:
          <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
        </label>
        <label>Last Name:
          <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
        </label>
        {/* Add other form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
