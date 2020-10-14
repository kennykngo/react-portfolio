import React from 'react';
import { MasonryPost } from "./";

export default function PostMasonry ({posts, columns}) {
	return ( 
		<section className="masonry" style={{}} >
			{posts.map((post, index) => (
				<MasonryPost {...{ post, columns, key: index}} />
			))}
		</section>
	)
}