import React from "react";
import { Link } from "react-scroll";

import "../styles/SideNav.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="intro-nav"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-nav"
            spy={true}
            smooth={true}
            offset={2}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience-nav"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
