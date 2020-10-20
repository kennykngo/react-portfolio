import React, { useContext, useMemo, useState } from 'react';
import styled from "styled-components";

import { ThemeContext } from "../theme-provider";
import { TagRow, Title } from "./";
import { useMediaQuery } from "./useMediaQuery";

export default function PostGrid({ posts }) {
	// to show 9 records at a time
	const [pageSize, setPageSize] = useState(9);
	const [current, setCurrent] = useState(1);

	const is900Width = useMediaQuery('(min-width: 992px)');
  
	// placing posts in section: renders a subset of array of posts by useMemo()
	// only update when page size changes or page changes
	const paginatedPosts = useMemo(
	  () => {
		const lastIndex = current * pageSize;
		const firstIndex = lastIndex - pageSize;
  
		return posts.slice(firstIndex, lastIndex);
	  },
	  // passes dependencies to the function to know when to update itself (changing current page or pageSize);
	  [current, pageSize, posts]
	);

	const state = useContext(ThemeContext);

	const projectStyle = {
		backgroundColor: state.theme.primary,
		color: state.theme.text,
	}

	const cardStyle = { 
		backgroundColor: state.theme.card,
	}

	const h1Style = {
		container: is900Width => ({
			color: state.theme.text,
			// marginLeft: is900Width && "-4rem"
		})
	}

	const headingStyle = {
		color: state.theme.text,
	}

	const textStyle = {
		fontWeight: state.theme.pFontWeight
	}

	const A = styled.a`
	color: ${state.theme.text};
	padding-top: "-5px";

	&:hover {
		box-shadow: ${state.theme.hover}
	}
`;

	return (
	  <section className="grid-pagination-container" style={projectStyle}>
		<div className="wrapper">
			<Title>Projects</Title>
		</div>
		<section className="post-grid container">

		  {paginatedPosts.map((post, index) => (
			<div className="post-container" key={index} style={cardStyle}>
			  <figure>
				<a href={post.deployLink}>
				  <img
					src={require(`../../assets/images/${post.image}`)}
					alt={post.image}
				  />
				</a>
			  </figure>
				<TagRow tags={post.categories} />
				<div className="d-flex justify-content-between align-flex-end">
			  		<h2 style={headingStyle}>{post.title}</h2>
					<A href={post.githubLink}><i className="fab fa-github-square fa-2x"/></A>
				</div>
			  <h4 style={headingStyle}>{post.description}</h4>
			  <p style={textStyle} className="description-text">{post.point}</p>
			</div>
		  ))}
		</section>
	  </section>
	);
  }