import React, {useContext} from 'react'
import Masonry from 'react-masonry-css';
import experience from "../assets/experience/experience-post";
import {ExperienceComp} from "./ui-components";
import {ThemeContext } from "./theme-provider";
import {useMediaQuery } from "./ui-components/useMediaQuery"


export default function Experience () {
	
	const state = useContext(ThemeContext);

	const is900Width = useMediaQuery('(min-width: 992px)');

	const expStyle = {
		background: state.theme.primary,
		margin: "0 auto",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	}

	const h1Style = {
		container: is900Width => ({
			fontWeight: 800,
			color: state.theme.text,
			fontSize: "60px",
			marginLeft: is900Width && "-4rem",
		})
	}

	const experiencePosts = [...experience];

	const experienceBreakpoints = {
		default: 3,
		992: 2,
		686: 1
	}

	return (
		<div style={expStyle}>
			<h1 style={h1Style.container(is900Width)}>Experience</h1>
			<Masonry 
				breakpointCols={experienceBreakpoints} 
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{experiencePosts.map((post) => 
				<ExperienceComp 
					title={post.title} 
					company={post.company} 
					description={post.description} 
					date={post.date} 
					location={post.location}
				/>)
				}
			</Masonry>
		</div>
	)
}