import React from "react";

import "../styles/About.css";
import me2 from "../images/me2.png";

const AboutPage = () => {
  return (
    <>
      <div className="bg-darkGreen">
        <div className="wrapper mx-auto max-w-6xl">
          <div className="about" id="about-nav">
            <div className="section-header">
              <div className="about-me">
                <h1>About me</h1>
              </div>
              <div className="about-content">
                <img className="my-image" src={me2} alt="a girl" />
                <div className="card-container">
                  <div className="card">
                    <h1 className="card-name">Hello, I'm Gudelfina!</h1>
                    <p className="card-content">
                      I'm a <b>software engineer</b> based in Wyoming. Before
                      becoming a software engineer, I was a registered nurse
                      working in the ICU. While, I loved being able to help and
                      care for people, it began to take a toll on me, mentally
                      and physcially. So I decided to change careers and become
                      a software engineer! I've always had a great interest in
                      building something from scratch, artificial intelligence,
                      and everything in between!
                    </p>
                    <a
                      href={require("../resume/resume.pdf")}
                      download
                      className="resume-link"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
