import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";

import "react-vertical-timeline-component/style.min.css";
import "../styles/experience.css";

const workData = [
  {
    title: "Student",
    company: "Galvanize: Hack Reactor",
    years: "2022 - 2023",
    skills: [
      "Python",
      "Javascript",
      "CSS",
      "HTML",
      "React",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    icon: <Icon icon="mdi:pencil-outline" color="white" />,
  },
  {
    title: "Digital Shopper",
    company: "Walmart",
    years: "2022-2023",
    skills: [
      "Communication ",
      "Customer Service ",
      "Problem Solving",
      "Adaptability",
      "Ogranization",
      "Multi-tasking",
    ],
    icon: <Icon icon="material-symbols:shopping-bag-outline" color="white" />,
  },
  {
    title: "Registered Nurse",
    company: "Billings Clinic",
    years: "2021",
    skills: [
      "Critical Thinking",
      "Emergency Response",
      "Teamwork",
      "Cultural Competence",
      "Time Management",
    ],
    icon: <Icon icon="icon-park-outline:nurse-cap" color="white" />,
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
          <VerticalTimeline>
            {workData.map((work, i) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "#b5838d",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={work.icon}
                key={i}
              >
                <h3 className="vertical-timeline-element-style text-left text-black text-sm">
                  {work.years}
                </h3>
                <h1
                  className="vertical-timeline-element-style text-left text-black"
                  id="title font-extrabold text-4xlg mt-10"
                >
                  {work.title}
                </h1>
                <h4 className="vertical-timeline-element-style text-left text-black text-sm mb-4">
                  {work.company}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {work.skills.map((skill, index) => (
                    <h5
                      key={index}
                      className="vertical-timeline-element-style text-left text-white text-sm"
                    >
                      <button className="bg-lightPurple rounded-full p-1">
                        {skill}
                      </button>
                    </h5>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{
                background: "#b5838d",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <Icon icon="carbon:software-resource-cluster" color="white" />
              }
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
