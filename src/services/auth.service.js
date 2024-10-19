import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (signupData) => {
  return axios.post(API_URL + "signup", signupData, {
    headers: {
      'Content-Type': 'application/json'
    }
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

  const getCurrentUser = () => { //retrieves the currently logged-in user's data from localStorage
    return JSON.parse(localStorage.getItem("user"));
  };

  const updateCurrentUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user)); // Assuming you're storing the user in local storage
  };

  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    updateCurrentUser,
  };

  export default AuthService;