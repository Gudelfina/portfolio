import React from "react";

import "../styles/Intro.css";
// import girl from "../images/girl.png";
import robot from "../images/robot.gif";

const Intro = () => {
  return (
    <div className="container" id="intro-nav">
      <div className="polariod">
        <img src={robot} alt="a robot looking at butterflies" />
      </div>
      <span className="intro-heading">
        Hello,
        <span className="intro-name">{"Gudelfina"}</span> here.
      </span>
    </div>
  );
};

export default Intro;
