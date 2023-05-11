import React, { useState } from "react";
import Modal from "react-modal";

import "../styles/Projects.css";
import gitlab from "../images/gitlab.png";
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
        >
          {selectedProject && (
            <div>
              <div className="modal-name text-black">
                {selectedProject["title"]}
              </div>
              <div className="modal-desc text-black">
                {selectedProject["desc"]}
              </div>
              <div className="text-black">{selectedProject["techStack"]}</div>
              <div className="text-black">
                <a href={selectedProject["link"]} target="blank">
                  <img src={gitlab} alt="gitlab icon" width="20" height="20" />
                </a>
              </div>
              {console.log(selectedProject)}
            </div>
          )}
          <button className="text-black" onClick={handleModalClose}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
