import React, {useContext} from 'react';
import {ThemeContext} from "../theme-provider";
// import "../../assets/scss/_experience-comp.scss"

export default function ExperienceComp (props) { 

	const state = useContext(ThemeContext);

	const headingStyle = {
		color: state.theme.text,
		backgroundColor: "transparent",
		fontWeight: 800,
	}

	const pStyle = {
		color: state.theme.text,
	}

	const dateStyle = {
		color: "#2997ff"
	}

	return(
	<div className="experience-box">
		<h2 style={headingStyle}>{props.title}</h2>
		<h4 style={headingStyle}>{props.company}</h4>
		<p style={pStyle}>{props.location}</p>
		<p style={pStyle}>{props.tag}</p>
		<p style={pStyle}>{props.description}</p>
		<p style={dateStyle}>{props.date}</p>
	</div>	
	)
}