import React from "react";

import "../styles/About.css";

const AboutPage = () => {
  const tech_stack = [
    "Python",
    "Javascript ES6+",
    "React.js",
    "Django",
    "HTML & CSS",
  ];
  return (
    <div className="about" id="about-nav">
      <div className="section-header">
        <h1>/about me</h1>
      </div>
      <div className="about-content">
        <p>
          I'm currently a <b>Software engineer</b>
        </p>
        <p>Here are some Technologies I've been working with:</p>
        <ul>
          {tech_stack.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
        <p>
          Outside of work, I'm interest in crochet, <b />
          learning the guitar, <b /> building legos, <b />
          and enjoying the outdoors (when it's not snowing 24/7)
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
