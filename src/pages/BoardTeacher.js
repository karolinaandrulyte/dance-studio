import React, { useState, useEffect, useCallback } from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service"; 

const BoardTeacher = () => {
  const [content, setContent] = useState("");
  const [students, setStudents] = useState([]); // State to store list of students
  const [assignedStudents, setAssignedStudents] = useState([]); // List of assigned students
  
  const currentUser = AuthService.getCurrentUser(); // Assuming the current user is a teacher
  const teacherId = currentUser.id; // Get the teacher's ID from logged-in user data

  const fetchAssignedStudents = useCallback(() => {
    UserService.getAssignedStudents(teacherId).then(
      (response) => {
        console.log("Fetched assigned students:", response.data);
        setAssignedStudents(response.data);
      },
      (error) => {
        console.error("Error fetching assigned students:", error);
      }
    );
  }, [teacherId]);// Include teacherId as a dependency

  useEffect(() => {
    UserService.getTeacherBoard().then(
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

// Fetch the list of students (unassigned)
UserService.getStudents().then(
  (response) => {
    console.log("Fetched students:", response.data); // Add this log to check
    setStudents(response.data);
  },
  (error) => {
    console.error("Error fetching students:", error);
  }
);

fetchAssignedStudents(); // Fetch assigned students on component mount
}, [fetchAssignedStudents]); // Include fetchAssignedStudents here

const assignStudent = (studentId) => {
  UserService.assignStudent(studentId, teacherId).then(
    (response) => {
      console.log("Assigned student:", response.data);
      const assignedStudent = students.find(student => student.id === studentId);
      setAssignedStudents([...assignedStudents, assignedStudent]);
      setStudents(students.filter(student => student.id !== studentId));
    },
    (error) => {
      console.error("Error assigning student:", error);
    }
  );
};

 // Unassign a student
 const handleUnassign = (studentId) => {
  UserService.unassignStudent(studentId)
    .then((response) => {
      console.log("Unassigned student:", response.data);
      fetchAssignedStudents(); // Refresh the assigned students
    })
    .catch((error) => {
      console.log("Error unassigning student:", error);
    });
};


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>

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
                <th>Actions</th>
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
                  <td>
                    <button onClick={() => assignStudent(student.id)}>
                      Assign Student
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found</p>
        )}
      </div>

      {/* Assigned Students Table */}
      <div className="assigned-students-list">
        <h4>My Students</h4>
        {assignedStudents.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th> {/* Add a column for actions */}
              </tr>
            </thead>
            <tbody>
              {assignedStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.username}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>
                    <button
                      onClick={() => handleUnassign(student.id)} // Unassign button
                      className="btn btn-warning"
                    >
                      Unassign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No assigned students</p>
        )}
      </div>
    </div>
    
  );
};

export default BoardTeacher;