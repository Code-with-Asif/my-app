import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
