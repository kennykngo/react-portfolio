import React, { useState, useContext, useEffect } from 'react'
import { Col, Row } from "react-flexbox-grid";
import Masonry from 'react-masonry-css';

import experiences from "../assets/posts/experience-post";
import Arrow from "../assets/images/arrow.svg";
import { ThemeContext } from "./theme-provider";
import { ExperienceComp, DropdownMenu, Title } from "./ui-components";
import styled from "styled-components";

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

	const Li = styled.li`
		color: ${state.theme.text};

		&:hover { 
			color: #1890ff;
		}
	`;

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
			text: "CODING"
		},
		{
			expTag: "people interaction",
			text: "INTERACTION"
		},
	]

	console.log(pickedFilter.pickedFilter);
		
		return (
			<div style={expStyle} id="experience">
				<div className="expWrapper">
				<Title>Experience</Title>
					<Row>
						<Col xs={12} md={8} lg={9}>
						<div className="portfolio__nav">
							<ul>
								{tags.map((post, index) => {
									return(
									<Li
									key={index}
									className={`${pickedFilter.pickedFilter} === ${post.expTag}
										? return "portfolio__nav-active font12"
										: return "font12"
									`} 
									onClick={() => filterGallery(`${post.expTag}`)}
									>{post.text}</Li>
								)})}
							</ul>
						</div>
						</Col>
						<Col xs={12} md={4} lg={3} end="xs">
							<DropdownMenu filterStyle={{backgroundColor: `${state.theme.card}`, invert: `${state.theme.invert}`}} textStyle={{color: `${state.theme.text}`}}btnStyle={{backgroundColor: `${state.theme.primaryNav}`}}current={pickedFilterDropdown.pickedFilterDropdown} newest={() => filterDropDownHandler("NEWEST")} oldest={() => filterDropDownHandler("OLDEST")}/>
							<p className="font12">
							</p>
							<br/>
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