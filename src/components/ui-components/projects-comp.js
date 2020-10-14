import React from 'react';
import githubLogo from "../../assets/images/logos/github.svg"

export default function ProjectsComp ( props ) {
	return (
		<div>
			{/* <h2>{props.title}</h2> */}
			<a href={props.deployLink}><img src={githubLogo} alt="github-logo"/></a>
		</div>
	)
};