import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">services</Link>
        </li>
        <li>
          <Link to="/githubUsers">Githubuser</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
