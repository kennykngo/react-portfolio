import React, {useState, useMemo, useContext } from 'react';
import {ThemeContext} from "../theme-provider";
import { TagRow, ProjectsComp } from "./";
import styled from "styled-components"
import { Row, Col } from 'react-flexbox-grid';


export default function PostGrid({ posts }) {
	// to show 9 records at a time
	const [pageSize, setPageSize] = useState(9);
	const [current, setCurrent] = useState(1);
  
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

	const headingStyle = {
		color: state.theme.text,

	}

	const textStyle = {
		fontWeight: state.theme.pFontWeight
	}

	// const A = styled.a`
	// 	color: ${state.theme.text};

	// 	&:hover {
	// 		box-shadow: ${state.theme.hover}
	// 	}
	// `;

	return (
	  <section className="grid-pagination-container" style={projectStyle}>
		<div className="wrapper">
			<Row start="xs" center="lg">
				<Col lg={4}>
					<h1 className="font-weight-800 font-60" style={headingStyle}>Projects</h1>
				</Col>
				<Col md={12} lg={5}>
					<p></p>
				</Col>
			</Row>
		</div>
		<section className="post-grid container">

		  {paginatedPosts.map((post, index) => (
			<div className="post-container" style={cardStyle}>
			  <figure>
				<a href={post.deployLink}>
				  <img
					src={require(`../../assets/images/${post.image}`)}
					alt={post.image}
				  />
				</a>
			  </figure>
					<TagRow tags={post.categories} />
				<div className="d-flex justify-content-between align-baseline">
			  		<h2 style={headingStyle}>{post.title}</h2>
					<ProjectsComp styling={{backgroundColor: "transparent", filter: state.theme.invert}} githubLink={post.githubLink} />
				</div>
			  <h4 style={headingStyle}>{post.description}</h4>
			  <p style={textStyle} className="description-text">{post.point}</p>
			</div>
		  ))}
		</section>
	  </section>
	);
  }