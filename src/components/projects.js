import React from 'react';
import {  PostGrid } from "../components/ui-components";
import projects from "../assets/posts/projects-post";


const projectsConfig = {
	1 : {
		gridArea: "1 / 2/ 3/ 3",
	}
}

const mergeStyles = function (posts, config) {
	posts.forEach((post, index) => {
		post.style = config[index];
	})
}

mergeStyles(projects, projectsConfig);

export default function Projects () {
	// const state = useContext(ThemeContextProvider);

	return (
		<div id="projects"> 
			<PostGrid posts={projects} columns={2} />
			{/* <MasonryPost post={projects} /> */}
		</div>
	) 
}