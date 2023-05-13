import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../styles/experience.css";

const workData = [
  {
    title: "Software Developer",
    company: "OpenAI",
    years: "2022 - 2023",
    skills: "comunication",
  },
  {
    title: "Data Scientist",
    company: "Google",
    years: "2020 - 2022",
    skills: "comunication",
  },
  {
    title: "System Engineer",
    company: "Amazon",
    years: "2018 - 2020",
    skills: "comunication",
  },
];

const Experience = () => {
  return (
    <div className="bg-lightGreen">
      <div className="wrapper">
        <div className="experience" id="experience">
          <div className="experience-header">
            <h1>Experience</h1>
          </div>
          <VerticalTimeline animate={true}>
            {workData.map((work, i) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-black"
                iconStyle={{
                  background: "#c9b1bd",
                  color: "#fff",
                  textAlign: "center",
                }}
                // icon={<i className="fab fa-angular experience-icon"></i>}
                // key={i}
              >
                <h3 className="vertical-timeline-element-years text-left text-black">
                  {work.years}
                </h3>
                <h3 className="vertical-timeline-element-title text-left text-black">
                  {work.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-left text-black">
                  {work.company}
                </h4>
                <h5 className="vertical-timeline-element-skills text-left text-black">
                  {work.skills}
                </h5>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{
                background: "#c9b1bd",
                color: "#fff",
                textAlign: "center",
              }}
              // icon={
              //   <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              // }
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
