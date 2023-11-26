import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then((response) => setStudents(response.data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => setStudents(students.filter(student => student._id !== id)))
      .catch((error) => console.error('Error deleting student: ', error));
  };

  return (
    <div>
      <h1>Student List</h1>
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            {/* Add other headers based on your data model */}
            <th>Action</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              {/* Display other data based on your data model */}
              <td>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
