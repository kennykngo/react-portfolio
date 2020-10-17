import React, {useContext} from 'react'
import Masonry from 'react-masonry-css';
import experience from "../assets/experience/experience-post";
import {ExperienceComp} from "./ui-components";
import {ThemeContext } from "./theme-provider";


export default function Experience () {
	
	const state = useContext(ThemeContext);

	const expStyle = {
		background: state.theme.primary,
		margin: "0 auto",
		display: "flex",
		justifyContent: "center",
	}

	const experiencePosts = [...experience];

	const experienceBreakpoints = {
		default: 3,
		// 1100: 3,
		992: 2,
		686: 1
	}

	return (
		<div style={expStyle}>
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