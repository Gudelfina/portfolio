import React from "react";
import { Icon } from "@iconify/react";

import "../styles/Skills.css";

const Skills = () => {
  const icons = [
    {
      icon: (
        <Icon
          icon="akar-icons:html-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "HTML",
    },
    {
      icon: (
        <Icon
          icon="akar-icons:css-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "CSS",
    },
    {
      icon: <Icon icon="cib:python" color="#64ffda" width="100" height="100" />,
      text: "Python",
    },
    {
      icon: (
        <Icon
          icon="ri:javascript-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "Javascript",
    },
    {
      icon: (
        <Icon
          icon="devicon-plain:docker"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "Docker",
    },
    {
      icon: (
        <Icon
          icon="akar-icons:react-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "React",
    },
    {
      icon: (
        <Icon
          icon="ri:bootstrap-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "Bootstrap",
    },
    {
      icon: (
        <Icon
          icon="simple-icons:tailwindcss"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "TailwindCSS",
    },
    {
      icon: (
        <Icon
          icon="akar-icons:postgresql-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "PostgreSQL",
    },
    {
      icon: (
        <Icon
          icon="simple-icons:fastapi"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "FastAPI",
    },
    {
      icon: <Icon icon="bi:git" color="#64ffda" width="100" height="100" />,
      text: "Git",
    },
    {
      icon: (
        <Icon
          icon="akar-icons:django-fill"
          color="#64ffda"
          width="100"
          height="100"
        />
      ),
      text: "Django",
    },
  ];
  return (
    <div className="bg-slate">
      <div className="wrapper">
        <div className="skills" id="skills-nav">
          <div className="skills-heading">SKILLS</div>
          <div className="skills-icons">
            {icons.map((item, i) => (
              <div className="icon-border" key={i}>
                {item.icon}
                <p className="icon-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
