import React from "react";

import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="container">
      <span className="intro-heading">
        Hello,
        <span className="intro-name">{"Gudelfina"}</span> here.
      </span>
      <div className="intro-section">
        <p>
          I'm a registered nurse turned software engineer based in Wyoming. I
          have a great interest in full-stack development, artificial
          intelligence, and everything in between.
        </p>
      </div>
    </div>
  );
};

export default Intro;
