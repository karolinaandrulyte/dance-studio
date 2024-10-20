import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [profileData, setProfileData] = useState(null);  // Start with null to indicate loading

  // Update profileData when currentUser changes
  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        const response = await UserService.getUserById(currentUser.id);
        const userData = response.data;
        console.log('Teacher profile data:', userData);  // Debugging log

        setProfileData({
          firstName: userData.firstName || "N/A",
          lastName: userData.lastName || "N/A",
          email: userData.email || "N/A",
          danceStyle: userData.danceStyle || "N/A",
          description: userData.description || "N/A",
        });
      } catch (error) {
        console.error("Error fetching teacher profile:", error);
      }
    };

    if (currentUser.roles.includes("ROLE_TEACHER")) {
      fetchTeacherProfile();  // Fetch teacher's profile data from backend
    } else {
      // If the user is not a teacher, initialize the profileData with current user info (non-teacher roles)
      setProfileData({
        firstName: currentUser.firstName || "N/A",
        lastName: currentUser.lastName || "N/A",
        email: currentUser.email || "N/A",
      });
    }
  }, [currentUser]);

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
        // Also update the local state
        setCurrentUser({ ...currentUser, danceStyle, description });
        })
        .catch((error) => {
        console.error("Failed to update profile:", error);
        });
  };

  if (!profileData) {
    return <div>Loading profile data...</div>;  // Show loading state while fetching data
  }

    return (
        <div className="container">
         <header className="jumbotron">
            <h3>
                <strong>{currentUser.username}</strong> user profile
            </h3>
         </header>   

         <table className="profile-table">
        <tbody>
          <tr>
            <td><strong>First Name:</strong></td>
            <td>{profileData.firstName}</td>  {/* Use profileData, fetched from API */}
          </tr>
          <tr>
            <td><strong>Last Name:</strong></td>
            <td>{profileData.lastName}</td>  {/* Use profileData, fetched from API */}
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{profileData.email}</td>  {/* Use profileData, fetched from API */}
          </tr>
          <tr>
            <td><strong>Roles:</strong></td>
            <td>{currentUser.roles.join(', ')}</td> {/* Display user roles */}
          </tr>

          {currentUser.roles && currentUser.roles.includes("ROLE_TEACHER") && (
            <>
              <tr>
                <td><strong>Dance Style:</strong></td>
                <td>{profileData.danceStyle}</td>  {/* Use profileData from fetched API */}
              </tr>
              <tr>
                <td><strong>Description:</strong></td>
                <td>{profileData.description}</td>  {/* Use profileData from fetched API */}
              </tr>
              <tr>
                <td><strong>Edit Dance Style:</strong></td>
                <td>
                  <input
                    type="text"
                    name="danceStyle"
                    value={profileData.danceStyle}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td><strong>Edit Description:</strong></td>
                <td>
                  <input
                    type="text"
                    name="description"
                    value={profileData.description}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            </>
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