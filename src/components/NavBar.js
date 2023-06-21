import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

import "../styles/SideNav.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sidebar-nav">
      <div className="sidebar-links">
        {(expanded || window.innerWidth < 600) && (
          <ul>
            <li>
              <Link
                to="intro-nav"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                /home
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
                /about
              </Link>
            </li>
            <li>
              <Link
                to="skills-nav"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                /skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                /experience
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
                /software-creations
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="sidebar-logos">
        <a href="mailto:gudelfina.mendez@gmail.com">
          <Icon
            className="logo-icon"
            icon="ic:baseline-email"
            color="#64ffda"
            width="24"
            height="24"
          />
        </a>
        <a href="https://gitlab.com/Gudelfina3" target="blank">
          <Icon
            className="logo-icon"
            icon="teenyicons:gitlab-solid"
            color="#64ffda"
            width="24"
            height="24"
          />
        </a>
        <a href="https://www.linkedin.com/in/gudelfina-mendez/" target="blank">
          <Icon
            className="logo-icon"
            icon="mdi:linkedin"
            color="#64ffda"
            width="24"
            height="24"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
