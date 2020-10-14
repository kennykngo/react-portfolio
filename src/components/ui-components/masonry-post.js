import React from 'react';
import { TagRow } from "./";

export default function MasonryPost ({post, tagsOnTop }) {
	const windowWidth = window.innerWidth;
	const postImage = {
		backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`
	};

	const style = windowWidth > 900 ? { ...postImage, ...post.style} : postImage;

	return ( 
		<a href={post.deployLink} className="masonry-post" style={style}>
			<div className="image-text">
				<TagRow tags={post.categories} /> 
				<h2>{post.title}</h2>
				<p>{post.description}</p>
			</div>
		</a>
	)
}