import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const [teachers, setTeachers] = useState([]); // State to store list of teachers
  const [students, setStudents] = useState([]); // State to store list of students

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
    
 // Fetch the list of teachers
 UserService.getTeachers().then(
  (response) => {
    setTeachers(response.data);
  },
  (error) => {
    console.error("Error fetching teachers:", error);
  }
);

// Fetch the list of students
UserService.getStudents().then(
  (response) => {
    setStudents(response.data);
  },
  (error) => {
    console.error("Error fetching students:", error);
  }
);
}, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>

      <div className="teachers-list">
        <h4>Teachers</h4>
        {teachers.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Dance Style</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.username}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.danceStyle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No teachers found</p>
        )}
      </div>

      <div className="students-list">
        <h4>Students</h4>
        {students.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.username}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
};

export default BoardAdmin;