import React from "react";
import AuthService from "../services/auth.service";


  const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="container">
         <header className="jumbotron">
            <h3>
                <strong>{currentUser.username}</strong> user profile
            </h3>
         </header>   
         <table className="table table-bordered">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>First Name</strong></td>
            <td>{currentUser.firstName}</td>
          </tr>
          <tr>
            <td><strong>Last Name</strong></td>
            <td>{currentUser.lastName}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{currentUser.email}</td>
          </tr>
          {/* <tr>
            <td><strong>Id</strong></td>
            <td>{currentUser.id}</td>
          </tr>
          <tr>
            <td><strong>Token</strong></td>
            <td>
              {currentUser.accessToken.substring(0, 20)}...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </td>
          </tr> */}
          <tr>
            <td><strong>Authorities</strong></td>
            <td>
              <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

  export default Profile;