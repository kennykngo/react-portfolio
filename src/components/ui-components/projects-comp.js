import React from 'react';
import githubLogo from "../../assets/images/logos/github.svg"

export default function ProjectsComp ( props ) {
	return (
		<span className="github-link-container">
			<a href={props.githubLink}><img src={githubLogo} style={props.styling} alt="github-logo"/></a>
		</span>
	)
};