import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/SideNav.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        {/* <li>
          <NavLink to="/software-creations">Software Creations</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
