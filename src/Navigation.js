import React from 'react';
import { Link } from "react-router-dom";


function Navigation() {

  return (
    <nav>
      <ul>  {/* section names visible in website */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );

}

export default Navigation;