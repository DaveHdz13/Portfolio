import React from "react";
import './projects.css'
import TerminalApp from "../TerminalApp/TerminalApp";
import avatarCode from "../../assets/AvatarCode.png";
import Project from "./Project";

function Projects() {
  return(
    <section className="projects-section">
      <div className="left">
        <TerminalApp />
        <img src={avatarCode} alt="avatarCode" />
      </div>
      <div className="right">
        <div className="projects-menu-title">
          <h1>Things I've done</h1>
        </div>
        <div className="projects-menu">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}

export default Projects