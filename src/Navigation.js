import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SignUp from './SignUp';
import LogIn from './LogIn';
import Contacts from "./pages/Contacts";
import NoPage from "./pages/NoPage";

function Navigation() {

  return (

    <BrowserRouter>
        <Routes> {/* links to .js components */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>

  );

}

export default Navigation;