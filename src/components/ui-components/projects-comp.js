import React from 'react';
import githubLogo from "../../assets/images/logos/github.svg"

export default function ProjectsComp ( props ) {
	return (
		<span className="github-link-container">
			{/* <h2>{props.title}</h2> */}
			<a href={props.githubLink}><img src={githubLogo} alt="github-logo"/></a>
		</span>
	)
};