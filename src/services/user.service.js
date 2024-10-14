import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
  };

  const getStudentBoard = () => {
    return axios.get(API_URL + "student", { headers: authHeader() })
    .catch(error => {
      console.error("Error fetching student board:", error);
      // You can add further actions, like updating the state to show the error in the UI
    });
  };

  const getTeacherBoard = () => {
    return axios.get(API_URL + "teacher", { headers: authHeader() }); //localhost:8080/api/test/teacher
  };

  const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  };

const UserService = {
  getPublicContent,
  getStudentBoard,
  getTeacherBoard,
  getAdminBoard,
};

export default UserService;