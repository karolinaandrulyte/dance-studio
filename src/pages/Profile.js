import React, { useState } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const Profile = () => {
  const [currentUser] = useState(AuthService.getCurrentUser());
  const [profileData, setProfileData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    danceStyle: currentUser.danceStyle || "", 
    description: currentUser.description || "" 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { danceStyle, description } = profileData; 
    UserService.updateProfile({ danceStyle, description })
      .then((response) => {
        alert("Profile updated successfully");

        // Optionally update the current user in local storage
        AuthService.updateCurrentUser({ ...currentUser, danceStyle, description });
      })
      .catch((error) => {
        console.error("Failed to update profile:", error);
      });
  };


    return (
        <div className="container">
         <header className="jumbotron">
            <h3>
                <strong>{currentUser.username}</strong> user profile
            </h3>
         </header>   
         
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>

      <table className="profile-table">
        <tbody>
          <tr>
            <td><strong>First Name:</strong></td>
            <td>{currentUser.firstName}</td> {/* Read-only */}
          </tr>
          <tr>
            <td><strong>Last Name:</strong></td>
            <td>{currentUser.lastName}</td> {/* Read-only */}
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{currentUser.email}</td> {/* Read-only */}
          </tr>
          {currentUser.roles && currentUser.roles.includes("ROLE_TEACHER") && (
              <tr>
              <td><strong>Dance Style:</strong></td>
              <td>
                <input
                  type="text"
                  name="danceStyle"
                  value={profileData.danceStyle}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          )}
          {currentUser.roles && currentUser.roles.includes("ROLE_TEACHER") && (
            <tr>
              <td><strong>Description:</strong></td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={profileData.description}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {currentUser.roles && currentUser.roles.includes("ROLE_TEACHER") && (
        <button type="submit" onClick={handleSubmit}>
          Update Profile
        </button>
      )}
    </div>
  );
};

  export default Profile;