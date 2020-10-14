import React, {useContext} from 'react';
import {ThemeContextProvider} from "./theme-provider";
import { MasonryPost, PostMasonry } from "../components/ui-components";
import projects from "../assets/posts/projects-post"

export default function Projects () {
	const state = useContext(ThemeContextProvider);

	return (
		<div> 
			<PostMasonry posts={projects} columns={2} />
		</div>
	) 
}