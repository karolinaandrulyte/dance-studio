import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";

const BoardStudent = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchTeachers = async () => {
        try {
          const response = await UserService.getTeachers();
          setTeachers(response.data);
        } catch (err) {
          setError("Failed to load teachers");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTeachers();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }

  return (
    <div className="board-student">
    <h2>Student Board</h2>
    <h3>Available Teachers</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Dance Style</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td>{teacher.firstName} {teacher.lastName}</td>
            <td>{teacher.danceStyle}</td>
            <td>{teacher.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};
  
  export default BoardStudent;