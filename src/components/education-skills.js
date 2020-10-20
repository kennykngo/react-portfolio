import React, { useContext } from 'react'
import { ThemeContext } from './theme-provider'
import {Title} from "./ui-components"

export default function EducationSkills () {

	const state = useContext(ThemeContext);
	const educationStyle = { 
		backgroundColor: state.theme.primary,
	}

	return (
		<div id="education-skills" style={educationStyle}>
			<Title>Education and Skills</Title>

		</div>
	)
}