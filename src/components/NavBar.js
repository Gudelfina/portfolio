import React from "react";
import { Link } from "react-scroll";

import "../styles/SideNav.css";
import email from "../images/email.png";
import gitlab from "../images/gitlab.png";
import linkedin from "../images/linkedin.png";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="intro-nav"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            /Home
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
            /About
          </Link>
        </li>
        <li>
          <Link
            to="projects-nav"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            /projects
          </Link>
        </li>
      </ul>
      <div>
        <h2 className="connect">Connect with me!</h2>
      </div>
      <div className="logos-nav">
        <a href="mailto:gudelfina.mendez@gmail.com">
          <img src={email} alt="email icon" width="20" height="20" />
        </a>
        <a href="https://gitlab.com/Gudelfina3" target="blank">
          <img src={gitlab} alt="gitlab icon" width="20" height="20" />
        </a>
        <a href="https://www.linkedin.com/in/gudelfina-mendez/" target="blank">
          <img src={linkedin} alt="linkedin icon" width="20" height="20" />
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
