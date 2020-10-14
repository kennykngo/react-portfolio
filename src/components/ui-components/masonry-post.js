import React from 'react';
import { TagRow } from "./tag-row";

export default function MasonryPost ({post, tagsOnTop }) {
	const windowWidth = window.innerWidth;
	const postImage = {
		backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`
	};

	const style = windowWidth > 900 ? { ...postImage, ...post.style} : postImage;

	return ( 
		<div>
			<h1>hi</h1>
		</div>
	)
}