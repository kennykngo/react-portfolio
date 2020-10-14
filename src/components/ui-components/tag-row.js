import React from 'react';
import { categoryColors } from "../style-components/styles";

export default function TagRow({ tags }) {
	return (
		<div className="tags-container">
			{tags.map((tag, index) => (
				<span key={index} className="tag" style={{backgroundColor: categoryColors[tag]}}
				>
					{tag.toUpperCase()}
				</span>
			))}
		</div>
	)
}