import React from "react";

import "../styles/Intro.css";
import girl from "../images/girl.png";

const Intro = () => {
  return (
    <div className="container" id="intro-nav">
      <div className="polariod">
        <img src={girl} alt="a girl with a pink hat" />
      </div>
      <span className="intro-heading">
        Hello,
        <span className="intro-name">{"Gudelfina"}</span> here.
      </span>
    </div>
  );
};

export default Intro;
