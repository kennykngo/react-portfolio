import React from 'react'
import experience from "../assets/experience/experience-post";
import {ExperienceComp} from "./ui-components";


export default function Experience () {
	
	const experiencePosts = [...experience];

	return (
		<div>
			{experiencePosts.map((post) => 
			<ExperienceComp title={post.title} />)}
		</div>
	)
}