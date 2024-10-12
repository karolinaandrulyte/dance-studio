import React from 'react';
import { Link } from "react-router-dom";

const Navigation = ({ currentUser, showAdminBoard, showTeacherBoard, showStudentBoard, logOut }) => {

  return (
    <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      
      {/* Only show if admin is logged in */}
      {showAdminBoard && (
        <li>
          <Link to="/admin">Admin Board</Link>
        </li>
      )}

      {/* Only show if teacher is logged in */}
      {showTeacherBoard && (
        <li>
          <Link to="/teacher">Teacher Board</Link>
        </li>
      )}

      {/* Only show if student is logged in */}
      {showStudentBoard && (
        <li>
          <Link to="/student">Student Board</Link>
        </li>
      )}

      {/* Show these if user is logged in */}
      {currentUser ? (
        <>
          <li>
            <Link to="/profile">{currentUser.username}'s Profile</Link>
          </li>
          <li>
            <a href="/login" onClick={logOut}>LogOut</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </ul>
  </nav>
  );

}

export default Navigation;