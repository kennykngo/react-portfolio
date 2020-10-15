import React, {useState, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { Pagination } from "antd";
import { TagRow, ProjectsComp } from "./";


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
  
	// scrolls back after pagination change
	// use useEffect() when mounting a component
	useEffect(() => {
	  window.scroll({
		top: 500,
		left: 0,
		behavior: "smooth",
	  });
	}, [current, pageSize]);
  
	return (
	  <section className="grid-pagination-container">
		<section className="post-grid container">
		  {paginatedPosts.map((post, index) => (
			<div className="post-container">
			  <figure>
				<Link to={post.link}>
				  <img
					src={require(`../../assets/images/${post.image}`)}
					alt={post.image}
				  />
				</Link>
			  </figure>
				<div className="d-flex justify-content-between">
					<TagRow tags={post.categories} />
					<ProjectsComp githubLink={post.githubLink} />
				</div>
			  <h2>{post.title}</h2>
			  <p className="author-text">
				<span>
				  By:
				  <Link to={`/author/${post.author}`}>{post.author}</Link>
				</span>
			  </p>
			  <p className="description-text">{post.description}</p>
			  <p className="description-text">{post.point}</p>
			</div>
		  ))}
		</section>
	  </section>
	);
  }