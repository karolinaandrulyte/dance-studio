import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
const API_USERS_URL = "http://localhost:8080/api/users/"; // Base URL for user-related endpoints

const getPublicContent = () => {
    return axios.get(API_URL + "all");
  };

  const getStudentBoard = () => {
    return axios.get(API_URL + "student", { headers: authHeader() })
    .catch(error => {
      console.error("Error fetching student board:", error);
    });
  };

  const getTeacherBoard = () => {
    return axios.get(API_URL + "teacher", { headers: authHeader() }); //localhost:8080/api/test/teacher
  };

  const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() }); 
};

  const getTeachers = () => {
    return axios.get("http://localhost:8080/api/users/teachers", { headers: authHeader() }); 
  };
  
  const getStudents = () => {
    return axios.get("http://localhost:8080/api/users/students", { headers: authHeader() }); 
  };

  const assignStudent = (studentId, teacherId) => {
    console.log("Assigning student:", studentId, "to teacher:", teacherId);
    return axios.put(`http://localhost:8080/api/users/students/${studentId}/assign/${teacherId}`, {}, { headers: authHeader() });
};

const getAssignedStudents = (teacherId) => {
  return axios.get(`http://localhost:8080/api/users/teachers/${teacherId}/students`, { headers: authHeader() });
};

const unassignStudent = (studentId) => {
  return axios.put(`http://localhost:8080/api/users/students/${studentId}/unassign`, {}, {
      headers: authHeader()
  });
};

const deleteUser = (id) => {
  return axios.delete(`http://localhost:8080/api/users/${id}`, { headers: authHeader() });
};

const updateUser = (id, updatedUser) => {
  return axios.put(`http://localhost:8080/api/users/${id}`, updatedUser, {
    headers: {
      "Content-Type": "application/json",
      ...authHeader()  
    }
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    throw new Error("Failed to update user: " + error.message);
  });
};

const updateProfile = (profileData) => {
  return axios.put(API_USERS_URL + "profile/update", profileData, { 
    headers: {
      "Content-Type": "application/json",
      ...authHeader()
    }
  });
};

const getUserById = (id) => {
  return axios.get(`http://localhost:8080/api/users/${id}`, { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getStudentBoard,
  getTeacherBoard,
  getAdminBoard,
  getTeachers,
  getStudents, 
  assignStudent,
  getAssignedStudents,
  unassignStudent,
  deleteUser, 
  updateUser, 
  updateProfile,
  getUserById,
};

export default UserService;