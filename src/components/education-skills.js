import React, { useContext } from 'react'
import { ThemeContext } from './theme-provider'
import {Title} from "./ui-components"

export default function EducationSkills () {

	const state = useContext(ThemeContext);
	const educationStyle = { 
		backgroundColor: state.theme.primary,
	}

	const textStyle = {
		color: state.theme.text,
	}

	const pStyle = {
		color: state.theme.text,
		fontWeight: state.theme.pFontWeight,
	}

	const cardStyle = {
		backgroundColor: state.theme.card
	}

	const educationPosts = [
		{ 
			text: "Visual Communication Design",
			location: "San Francisco State University, CA",
			description: "A 2-year program fixed on providing critical skills in graphic, game, website, and UX design by utilizing tools such as Photoshop, Illustrator, InDesign, Figma, Adobe XD, Sketch, Unity, Premiere Pro & AfterEffects."
		},
		{ 
			text: "Full Stack Web Developer",
			location: "University of California, Berkeley, CA",
			description: "A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS."
		},
		{ 
			text: "Language & Application Skills",
			location: "",
			description: `HTML5, CSS3, JavaScript, ES6, NodeJS, MySQL, MongoDB, jQuery, Express, & ReactJS

			Adobe XD, Sketch, Photoshop, Illustrator, InDesign, PremierePro, Figma`
		},
	]

	return (
		<div id="education-skills" style={educationStyle}>
			<div className="wrapper">
				<Title>Education and Skills</Title>
				<div className="education-grid container">
					{educationPosts.map((posts) => {
						return (
						<div className={`post-container ${posts.location === "" && cardStyle}`} >
							<h2 style={textStyle}>{posts.text}</h2>
							<h4 style={textStyle}>{posts.location}</h4>
							<p style={pStyle}>{posts.description}</p>
						</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}