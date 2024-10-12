import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Navigation from "./Navigation";
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthService from "./services/auth.service";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import BoardAdmin from './pages/BoardAdmin'; // Importing your board components
import BoardStudent from './pages/BoardStudent';
import BoardTeacher from './pages/BoardTeacher';
import Profile from './pages/Profile';

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showTeacherBoard, setShowTeacherBoard] = useState(false);
  const [showStudentBoard, setShowStudentBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
      setShowStudentBoard(user.roles.includes("ROLE_STUDENT"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setShowAdminBoard(false);
    setShowTeacherBoard(false);
    setShowStudentBoard(false);
  };

  return (
    <Router>
    <Header />
    <Navigation
      currentUser={currentUser}
      showAdminBoard={showAdminBoard}
      showTeacherBoard={showTeacherBoard}
      showStudentBoard={showStudentBoard}
      logOut={logOut}
    />
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<BoardAdmin />} />
        <Route path="/teacher" element={<BoardTeacher />} />
        <Route path="/student" element={<BoardStudent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  
  );
};

export default App;