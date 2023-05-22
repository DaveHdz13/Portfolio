import React from "react";
import "./project.css";
import project from "../../assets/project.png";
import github from "../../assets/github.png"

function Project() {
	return(
		<div className="project">
			<div className="project-github">
				<img className="project-cover" src={project} alt="project" />
				<div className="github-link">
					<img src={github} alt="githubLink" />
				</div>
			</div>
			<span>Project</span>
		</div>
	)
}

export default Project;