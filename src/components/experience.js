import React, { useState, useContext, useEffect } from 'react'
import { Col, Row } from "react-flexbox-grid";
import Masonry from 'react-masonry-css';

import experiences from "../assets/posts/experience-post";
import Arrow from "../assets/images/arrow.svg";
import { ThemeContext } from "./theme-provider";
import { ExperienceComp, DropdownMenu } from "./ui-components";
// import { useMediaQuery } from "./ui-components/useMediaQuery"


export default function Experience () {

	const state = useContext(ThemeContext);
	// const [experience, setExperience] = useState({ experiencePosts: experiences });
	const [filterResult, setFilterResult] = useState([]); 
	const [pickedFilter, setPickedFilter] = useState("all"); 
	const [filterMenuActive, setFilterMenuActive] = useState(false); 
	const [pickedFilterDropdown, setPickedFilterDropdown] = useState("NEWEST");
	const [click, setClick] = useState(false);

	useEffect(() => filterGallery("all"), []);

	// Filtering Experience by Tag
	const filterGallery = (target) => {
		let experienceArr = [...experiences];
		let result;

		if (target !== "all") {
			result = experienceArr.filter((expTag) => expTag.tag === target)
		} else {
			result = experienceArr
		}
		setFilterResult({ filterResult: result });
		setPickedFilter({ pickedFilter: target });
		setPickedFilterDropdown({ pickedFilterDropdown: "NEWEST" });
	};

	// Filter Drop Down Hover Menu
	const filterMenuHover = (event) => {
		(event) 
		? setFilterMenuActive({ filterMenuActive: true }) 
		: setFilterMenuActive({ filterMenuActive: false });
	};

	// Filter drop down handler
	const filterDropDownHandler = (filter) => {
		setPickedFilterDropdown({ pickedFilterDropdown: filter});
		setFilterMenuActive({ filterMenuActive: false });

		console.log(filterResult);
		let experienceArr = [...filterResult.filterResult];
		let result;
		
		console.log(experienceArr);

		if (filter === "NEWEST") {
			result = experienceArr.sort((a, b) => (a.id > b.id ? 1 : -1));
		} else if (filter === "OLDEST") {
			result = experienceArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
		}

		setFilterResult({ filterResult: result });
	}

	console.log(filterResult);

		// Rendering experience
		let experienceRender = null;
		if (filterResult.filterResult) {
			{experienceRender = filterResult.filterResult.map((experience, index) => (
				<ExperienceComp 
					title={experience.title} 
					company={experience.company} 
					description={experience.description} 
					date={experience.date} 
					location={experience.location}
					key={index}
				/>
			))};
		}

		// Experience Breakpoints
		const experienceBreakpoints = {
			default: 3,
			992: 2,
			686: 1
		};

		const expStyle = {
		background: state.theme.primary,
		width: "100%",
		height: "100%",
		margin: "0 auto",
		padding: "0 15px"
	}

		const h1Style = {
			fontWeight: 800,
			color: state.theme.text,
			fontSize: "60px",
			// marginLeft: is900Width && "-4rem",
	}	

	const tags = [
		{
			expTag: "all",
			text: "ALL"
		},
		{
			expTag: "design",
			text: "DESIGN"
		},
		{
			expTag: "coding",
			text: "Coding"
		},
		{
			expTag: "people interaction",
			text: "People Interaction"
		},
	]

		let filterDropDown = null;
		if (filterMenuActive) {
			filterDropDown = (
				<div className="portfolio__filter-menu shadow">
					<p
						className="font12"
						onClick={() => filterDropDownHandler("NEWEST")}
					>
						NEWEST
					</p>
					<p
						className="font12"
						onClick={() => filterDropDownHandler("OLDEST")}
					>
						OLDEST
					</p>
				</div>
			);
		}
		
		return (
			<div style={expStyle}>
				<div className="expWrapper">
				<Row start="xs" center="lg" style={{display: "flex"}}>
					<Col lg={4}>
					<h2 style={h1Style}>Experience</h2>
				</Col>
				</Row>
					<Row>
						<Col xs={12} sm={12} md={8} lg={9}>
						<div className="portfolio__nav">
							<ul>
								{tags.map((post, index) => {
									return(
									<li 
									key={index}
									className={`${pickedFilter} === ${post.expTag}
										? return "portfolio__nav-active font12"
										: return "font12"
									`} 
									onClick={() => filterGallery(`${post.expTag}`)}
									>{post.text}</li>
								)})}
							</ul>
						</div>
						</Col>
						<Col xs={12} sm={12} md={4} lg={3}>
						<div
							className="portfolio__filter"
							// onMouseEnter={() => filterMenuHover(true)}
							// onMouseLeave={() => filterMenuHover(false)}
							onClick={() => filterMenuHover(false) && !filterMenuHover(true)}
						>
						<DropdownMenu />
							<p className="font12">
							{pickedFilterDropdown.pickedFilterDropdown} FIRST
							</p>
							<i className="fas fa-angle-down"></i>
							{filterDropDown}
						</div>
						</Col>
				</Row>
			</div>

			<Masonry 
				breakpointCols={experienceBreakpoints} 
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{experienceRender}
			</Masonry>
		</div>
		)
}


// export default function Experiences () {
// 	const state = useContext(ThemeContext);

// 	const is900Width = useMediaQuery('(min-width: 992px)');

// 	const h1Style = {
// 		container: is900Width => ({
// 			fontWeight: 800,
// 			color: state.theme.text,
// 			fontSize: "60px",
// 			// marginLeft: is900Width && "-4rem",
// 		})
// 	}	

// 	return (
// 		<div style={expStyle}>
// 			<Row start="xs" center="lg" style={{display: "flex"}}>
// 				<Col lg={4}>
// 					<h2 style={h1Style.container(is900Width)}>Experience</h2>
// 				</Col>
// 				{/* <Col md={12} lg={3}>
// 					<p></p>
// 				</Col> */}
// 			</Row>
// 			<Masonry 
// 				breakpointCols={experienceBreakpoints} 
// 				className="my-masonry-grid"
// 				columnClassName="my-masonry-grid_column"
// 			>
// 				{experiencePosts.map((post, index) => 
// 				<ExperienceComp 
// 					title={post.title} 
// 					company={post.company} 
// 					description={post.description} 
// 					date={post.date} 
// 					location={post.location}
// 					key={index}
// 				/>)
// 				}
// 			</Masonry>
// 		</div>
// 	)
// }