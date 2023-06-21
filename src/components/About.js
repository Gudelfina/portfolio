import React from "react";

import "../styles/About.css";
import me3 from "../images/me3.png";

const AboutPage = () => {
  return (
    <>
      <div className="bg-slate">
        <div className="wrapper mx-auto max-w-6xl">
          <div className="about" id="about-nav">
            <div className="section-header">
              <div className="about-me">
                <h1>ABOUT ME</h1>
              </div>
              <div className="about-content">
                <img className="my-image" src={me3} alt="a girl" />
                <div className="card-container">
                  <div className="card">
                    <h1 className="card-name">Hello, I'm Gudelfina!</h1>
                    <p className="card-content">
                      I'm a passionate problem solver and software engineer
                      based in Wyoming. With a background as a registered nurse
                      in the ICU, I transitioned to software engineering to
                      pursue my fascination with building things from scratch
                      and exploring the realms of artificial intelligence and
                      technology. Particularly, I'm driven to introduce the
                      young generation, especially young women, to the exciting
                      world of technology and inspire them to pursue their
                      passions in coding and AI. Additionally, I'm dedicated to
                      continuously learning about artificial intelligence and
                      generative art, seeking ways to leverage their potential
                      for innovation and creativity. Overall, I aim to make a
                      positive impact by combining my technical expertise with
                      my passion for empowering others and exploring the cutting
                      edge of technology and art. Thank you for taking time to
                      view my portfolio, I'm looking forward to connecting with
                      you soon!
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
