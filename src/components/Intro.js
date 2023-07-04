import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

import "../styles/Intro.css";
import FadeInSection from "./FadeInSection";

const Intro = () => {
  return (
    <div className="wrapper mx-auto max-w-6xl h-screen">
      <div className="container" id="intro-nav">
        <div className="intro-content">
          <span className="intro-heading">
            HELLO,
            <span className="intro-name">{" GUDELFINA"}</span> HERE.
          </span>
          <FadeInSection>
            <div className="intro-desc">
              <p>
                Dedicated full-stack{" "}
                <span className="text-greenNeon">{"software engineer  "}</span>
                who is driven to contribute to the world through{" "}
                <span className="intro-underline">{"innovative  "}</span>
                and <span className="intro-underline">{"impactful"}</span>{" "}
                technological solutions
              </p>
            </div>
            <FadeInSection>
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
            </FadeInSection>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Intro;
