import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
  };

  const getStudentBoard = () => {
    return axios.get(API_URL + "student", { headers: authHeader() });
  };

  const getTeacherBoard = () => {

    //localhost:8080/api/test/teacher
    return axios.get(API_URL + "teacher", { headers: authHeader() });
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