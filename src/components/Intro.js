import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="container" id="intro-nav">
      <div className="intro-content">
        <span className="intro-heading">
          HELLO,
          <span className="intro-name">{" GUDELFINA"}</span> HERE.
        </span>
        <div className="intro-desc">
          <p>
            {" "}
            Dedicated full-stack software engineer who is driven to contribute
            to the world through innovative and impactful technological
            solutions{" "}
          </p>
        </div>
        <div className="intro-arrow">
          <Link
            to="about-nav"
            spy={true}
            smooth={true}
            offset={2}
            duration={500}
          >
            <Icon
              icon="mingcute:arrow-down-fill"
              color="#8892b0"
              width="40"
              height="40"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
