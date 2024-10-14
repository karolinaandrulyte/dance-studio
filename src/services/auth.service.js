import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, firstName, lastName, password, isTeacher) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      firstName,
      lastName,
      password,
      role: isTeacher ? ["teacher"] : [], // Make sure role assignment is correct
    });
  };

  const login = (username, password) => {
    return axios
            .post(API_URL + "signin", {
              username,
              password,
            })
      .then((response) => {
        console.log("We got Response: ", response );
        if (response.data.accessToken) {
         
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  };

  export default AuthService;