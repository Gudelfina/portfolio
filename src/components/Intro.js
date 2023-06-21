import React from "react";

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
      </div>
    </div>
  );
};

export default Intro;
