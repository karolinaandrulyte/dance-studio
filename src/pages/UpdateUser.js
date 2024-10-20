import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State for loading and updated user information
  const [loading, setLoading] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserService.getUserById(id);
        setUpdatedUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.updateUser(id, updatedUser);
      navigate("/admin"); // Redirect after successful update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={updatedUser.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={updatedUser.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="firstName"
        value={updatedUser.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={updatedUser.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
