import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from "./Navigation";
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Navigation />
    <Routes> {/* links to .js components */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
  );
}

export default App;