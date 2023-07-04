import React, { useState } from "react";
import Modal from "react-modal";
import { Icon } from "@iconify/react";

import "../styles/Projects.css";
import task from "../images/task.png";
import playboxx from "../images/playboxx.png";
import car from "../images/car.png";
import project from "../images/project.png";

Modal.setAppElement("body");

const allProjects = {
  Project1: {
    title: "PlayBoxx",
    desc: "PlayBoxx is a personal, collaborative software engineer project that serves as a modern gaming website. Currently, it offers a captivating quiz game with ten questions, timed for added excitement. Users' scores are determined by their completion time and the number of correct answers. A leaderboard showcases the top ten scores, while users can view their own top ten scores on their profile page. PlayBoxx aims to provide an immersive gaming experience with engaging gameplay and comprehensive player information.",
    techStack:
      "FastAPI, Javascript, Python, React.js, Redux, PostgresSQL, TailwindCSS",
    link: "https://gitlab.com/playboxx/play-boxx",
    websiteLink: "https://playboxx.gitlab.io/play-boxx/",
    image: playboxx,
  },
  Project2: {
    title: "AutoTech",
    desc: "Auto Tech is designed to work for a car dealership to manage their inventory, service appointments, and sales.",
    techStack: "React.js, Django, Docker, Javascript, Python",
    link: "https://gitlab.com/Gudelfina3/autotech",
    image: car,
  },
  Project3: {
    title: "Task Manager",
    desc: "This project management tool that helps individuals effectively manage their projects and associated tasks. This user-friendly application allows users to easily add, edit, and delete projects and tasks, enabling them to stay organized and track their progress efficiently.",
    techStack: "Python, Django, HTML, CSS",
    link: "https://gitlab.com/Gudelfina3/project-management-app",
    image: task,
  },
  Project4: {
    title: "My Portfolio",
    desc: "This website serves as a comprehensive showcase of my professional journey, highlighting my skills, experience, and projects.",
    techStack: "Javascript, React, TailwindCSS, CSS",
    link: "https://gitlab.com/Gudelfina3/portfolio",
    image: project,
  },
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleModalOpen = (projectKey) => {
    setSelectedProject(allProjects[projectKey]);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className="projects" id="projects-nav">
      <h1 className="projects-header">SOFTWARE CREATIONS</h1>
      <div className="project-container">
        {Object.keys(allProjects).map((key, i) => (
          <ul key={i}>
            <li className="project-card">
              <button className="card-btn" onClick={() => handleModalOpen(key)}>
                <div className="card-title">
                  {allProjects[key].title}
                  <img src={allProjects[key].image} alt="project logo" />
                </div>
              </button>
            </li>
          </ul>
        ))}
        <Modal
          isOpen={modalOpen}
          onRequestClose={handleModalClose}
          contentLabel="Project Details"
          appElement={document.getElementById("app")}
          style={{
            overlay: {
              backgroundColor: "#c9b1bd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              width: "70%",
              height: "fit-content",
              margin: "auto",
              border: "none",
            },
          }}
        >
          {selectedProject && (
            <div className="modal-container">
              <div className="modal-text-style" id="modal-title">
                {selectedProject["title"]}
              </div>
              <div className="modal-text-style" id="modal-desc">
                {selectedProject["desc"]}
              </div>
              <div className="modal-text-style" id="modal-techstack">
                {selectedProject["techStack"]}
              </div>
              <div className="modal-text-style" id="modal-websiteLink">
                {selectedProject && selectedProject.websiteLink && (
                  <a href={selectedProject.websiteLink} target="black">
                    <Icon
                      icon="ph:link-bold"
                      color="#b5838d"
                      width="24"
                      height="24"
                    />
                  </a>
                )}
              </div>
              <div className="modal-link">
                <a href={selectedProject["link"]} target="blank">
                  <Icon
                    className="logo-icon"
                    icon="teenyicons:gitlab-solid"
                    color="#b5838d"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
              <button className="button" onClick={handleModalClose}>
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
