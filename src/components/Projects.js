import React, { useState } from "react";
import Modal from "react-modal";
import { Icon } from "@iconify/react";

import "../styles/Projects.css";
import task from "../images/task.png";
import playboxx from "../images/playboxx.png";
import car from "../images/car.png";

Modal.setAppElement("body");

const Projects = () => {
  const allProjects = {
    Project1: {
      title: "PlayBoxx",
      desc: "A gaming site where players can play multiple games (one quiz game for now), user authentication, profile page, and leaderboard(s), etc.",
      techStack:
        "FastAPI, Javascript, Python, React.js, Redux, PostgresSQL, TailwindCSS",
      link: "https://gitlab.com/playboxx/play-boxx",
      image: playboxx,
    },
    Project2: {
      title: "AutoTech",
      desc: "An automobile dealership that manages sales, services, and inventory. It allows users to create, view, and delete services based on the input into the system.",
      techStack: "React.js, Django, Docker, Javascript, Python",
      link: "https://gitlab.com/Gudelfina3/autotech",
      image: car,
    },
    Project3: {
      title: "Task Manager",
      desc: "A managment application to create, update, and view projects and tasks for each project.",
      techStack: "Python, Django, HTML, CSS",
      link: "https://gitlab.com/Gudelfina3/project-management-app",
      image: task,
    },
  };

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
      <h1 className="projects-header">Projects</h1>
      <div className="project-container mx-auto p-10 md:p-20 grid lg:grid-cols-3 lg:gap-10 md:grid-cols-3 md:gap-10 2xl:grid-cols-3 grid-cols-1 gap-y-10">
        {Object.keys(allProjects).map((key, i) => (
          <ul key={i}>
            <li className="project-card flex-row justify-center align-center text-center h-full bg-white border border-gray-400 rounded-lg transform transition duration-700 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
              <button className="card-btn" onClick={() => handleModalOpen(key)}>
                <div className="card-title m-8 text-lg bold">
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
              width: "350px",
              height: "fit-content",
              margin: "auto",
              border: "none",
            },
          }}
        >
          {selectedProject && (
            <div className="modal-container flex flex-col justify-center items-center sm:grid-cols-1">
              <div className="modal-title text-black text-center text-lg m-4">
                {selectedProject["title"]}
              </div>
              <div className="modal-desc text-black text-center m-4">
                {selectedProject["desc"]}
              </div>
              <div className="modal-techstack text-black text-center m-4">
                {selectedProject["techStack"]}
              </div>
              <div className="modal-link text-black m-4">
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
              <div className="button-container">
                <button
                  className="text-black rounded-full bg-lightPurple p-2"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
