import React, { useContext } from 'react'
import { ThemeContext } from './theme-provider'
import {Title} from "./ui-components"

export default function EducationSkills () {

	const state = useContext(ThemeContext);
	const educationStyle = { 
		backgroundColor: state.theme.primary,
	}

	const educationPosts = [
		{ 
			text: "hi" 
		},
		{ 
			text: "hi" 
		},
		{ 
			text: "hi" 
		},
	]

	return (
		<div id="education-skills" style={educationStyle}>
			<Title>Education and Skills</Title>
			<div className="education-grid">
				{educationPosts.map((posts) => {
					return (
					<div className="post-container">
						<h1>{posts.text} </h1>
					</div>
					)
				})}
			</div>
		</div>
	)
}