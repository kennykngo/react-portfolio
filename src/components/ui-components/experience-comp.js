import React, {useContext} from 'react';
import {ThemeContext} from "../theme-provider";

export default function ExperienceComp (props) { 

	const state = useContext(ThemeContext);

	const headingStyle = {
		color: state.theme.text,
		backgroundColor: state.theme.primary,
	}

	return(
	<div className="experience-box">
		<h2 style={headingStyle}>{props.title}</h2>
	</div>	
	)
}