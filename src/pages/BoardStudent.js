import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";

const BoardStudent = () => {
    const [content, setContent] = useState("");
  
    useEffect(() => {
      UserService.getStudentBoard()
      .then((response) => {
        console.log("Full response from backend:", response); // Log the response for debugging
        if (response && response.data) {
            setContent(response.data); // Expecting response.data to contain the string from backend
        } else {
            setContent("No data found.");
        }
    })
    .catch((error) => {
        console.error("Network error:", error);
        const _content =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        setContent(_content);
          });
  }, []);

  return (
      <div className="container">
          <header className="jumbotron">
              <h3>{content}</h3>
          </header>
      </div>
  );
  };
  
  export default BoardStudent;