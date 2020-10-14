import React from 'react';
import { TagRow } from "./tag-row";

export default function MasonryPost ({post, tagsOnTop }) {
	const windowWidth = window.innerWidth;
	const postImage = {
		backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`
	};

	const style = windowWidth > 900 ? { ...postImage, ...post.style} : postImage;

	return ( 
		<a href={post.deployLink} className="masonry-post overlay" style={style}>
			<TagRow tags={post.categories} /> 
			<h2>{post.title}</h2>
			<p>{post.description}</p>
		</a>
	)
}