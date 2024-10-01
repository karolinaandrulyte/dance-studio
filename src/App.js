import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import StudentList from './StudentList';
import TeacherList from './TeacherList';

function App() {


  return (
    
    <>
    
    <Header />

    <div class="login-button">
      <p>Place for Login button</p>
    </div>
    <div class="signup-button">
      <p>Place for Sign Up button</p>
    </div>
    <Navigation />
    
      <StudentList />
      <br></br>
      <TeacherList />

    <Footer />

    </>
  
  );
}

export default App;