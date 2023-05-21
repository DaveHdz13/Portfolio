import React from "react";
import './projects.css'
import TerminalApp from "../TerminalApp/TerminalApp";
import project from "../../assets/project.png";
import github from "../../assets/github.png"

function Projects() {
  return(
    <section className="projects-section">
      <div className="left">
        <TerminalApp />
      </div>
      <div className="right">
        <h1>Things I've done</h1>
        <div className="projects-menu">
          <div className="project">
            <div className="project-github">
              <img className="project-cover" src={project} alt="project" />
              <img className="github-link" src={github} alt="githubLink" />
            </div>
            <span>Project</span>
          </div>
          <div className="project">
            <img src={project} alt="project" />
            <img src={github} alt="githubLink" />
            <span>Project</span>
          </div>
          <div className="project">
            <img src={project} alt="project" />
            <img src={github} alt="githubLink" />
            <span>Project</span>
          </div>
          <div className="project">
            <img src={project} alt="project" />
            <img src={github} alt="githubLink" />
            <span>Project</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects