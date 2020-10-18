import React, { useState, useContext, useEffect } from 'react'
import { Col, Row } from "react-flexbox-grid";
import Masonry from 'react-masonry-css';

import experiences from "../assets/experience/experience-post";
import Arrow from "../assets/images/arrow.svg";
import { ThemeContext } from "./theme-provider";
import { ExperienceComp } from "./ui-components";
import { useMediaQuery } from "./ui-components/useMediaQuery"


export default function Experience () {
	// const [experience, setExperience] = useState({ experiencePosts: experiences });
	const [filterResult, setFilterResult] = useState(null); 
	const [pickedFilter, setPickedFilter] = useState("all"); 
	const [filterMenuActive, setFilterMenuActive] = useState(false); 
	const [pickedFilterDropdown, setPickedFilterDropdown] = useState("NEWEST");

	useEffect(() => filterGallery("all"));

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

		let experienceArr = [...filterResult];
		let result;

		if (filter === "NEWEST") {
			result = experienceArr.sort((a, b) => (a.id > b.id ? 1 : -1));
		} else if (filter === "OLDEST") {
			result = experienceArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
		}

		setFilterResult({ filterResult: result });
	}

		// Rendering experience
		let experienceRender = null;
		if (experiences) {
			experienceRender = experiences.map((experience, index) => (
				<ExperienceComp 
					title={experience.title} 
					company={experience.company} 
					description={experience.description} 
					date={experience.date} 
					location={experience.location}
					key={index}
				/>
			));
		}

		// Experience Breakpoints
		const experienceBreakpoints = {
			default: 3,
			992: 2,
			686: 1
		};

		const expStyle = {
		// maxWidth: "1200px",
		// background: styling.theme.primary,
		width: "100%",
		height: "100%",
		margin: "0 auto",
		padding: "0 15px"
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
				  onClick={() => this.filterDropDownHandler("NEWEST")}
				>
				  NEWEST
				</p>
				<p
				  className="font12"
				  onClick={() => this.filterDropDownHandler("OLDEST")}
				>
				  OLDEST
				</p>
			  </div>
			);
		}

		return (
			<div style={expStyle}>
				<div className="expWrapper">
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
									onClick={() => this.filterGallery(`${post.expTag}`)}
									>{post.text}</li>
								)})}
							</ul>
						</div>
						</Col>
						<Col xs={12} sm={12} md={4} lg={3}>
						<div
							className="portfolio__filter"
							onMouseEnter={() => filterMenuHover(true)}
							onMouseLeave={() => filterMenuHover(false)}
						>
							<p className="font12">
							{pickedFilterDropdown} FIRST
							</p>
							<i class="fas fa-angle-down"></i>
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

// export default Experience;

// class Experience extends React.Component {
// 	constructor(exp) {
// 		super(exp);
// 		this.state = {
// 			experiencePosts: experience,
// 			filterResult: null, 
// 			pickedFilter: "all", 
// 			filterMenuActive: false, 
// 			pickedFilterDropdown: "NEWEST"
// 		}
// 	}
	

// 	componentDidMount() {
// 		this.filterGallery("all");
// 	}

// 	// Filtering Experience by Tag
// 	filterGallery = (target) => {
// 		let experienceArr = [...this.state.experiencePosts];
// 		let result;

// 		if (target !== "all") {
// 			result = experienceArr.filter((expTag) => expTag.tag === target)
// 		} else {
// 			result = experienceArr
// 		}

// 		this.setState({
// 			filterResult: result,
// 			pickedFilter: target,
// 			pickedFilterDropdown: "NEWEST",
// 		});
// 	};

// 	// Filter Drop Down Hover Menu
// 	filterMenuHover = (event) => {
// 		if (event) {
// 			this.setState({ filterMenuActive: true });
// 		} else {
// 			this.setState({ filterMenuActive: false });
// 		}
// 	};

// 	// Filter drop down handler
// 	filterDropDownHandler = (filter) => {
// 		this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

// 		let experienceArr = [...this.state.filterResult];
// 		let result;

// 		if (filter === "NEWEST") {
// 			result = experienceArr.sort((a, b) => (a.id > b.id ? 1 : -1));
// 		} else if (filter === "OLDEST") {
// 			result = experienceArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
// 		}

// 		this.setState({ filterResult: result });
// 	}

// 	render() { 
// 		// Rendering experience
// 		let experienceRender = null;
// 		if (this.state.filterResult) {
// 			experienceRender = this.state.filterResult.map((experience, index) => (
// 				<ExperienceComp 
// 					title={experience.title} 
// 					company={experience.company} 
// 					description={experience.description} 
// 					date={experience.date} 
// 					location={experience.location}
// 					key={index}
// 				/>
// 			));
// 		}

// 		// Experience Breakpoints
// 		const experienceBreakpoints = {
// 			default: 3,
// 			992: 2,
// 			686: 1
// 		};

// 		const expStyle = {
// 		// maxWidth: "1200px",
// 		// background: styling.theme.primary,
// 		width: "100%",
// 		height: "100%",
// 		margin: "0 auto",
// 		padding: "0 15px"
// 	}

// 	const tags = [
// 		{
// 			expTag: "all",
// 			text: "ALL"
// 		},
// 		{
// 			expTag: "design",
// 			text: "DESIGN"
// 		},
// 		{
// 			expTag: "coding",
// 			text: "Coding"
// 		},
// 		{
// 			expTag: "people interaction",
// 			text: "People Interaction"
// 		},

// 	]

// 		let filterDropDown = null;
// 		if (this.state.filterMenuActive) {
// 			filterDropDown = (
// 				<div className="portfolio__filter-menu shadow">
// 				<p
// 				  className="font12"
// 				  onClick={() => this.filterDropDownHandler("NEWEST")}
// 				>
// 				  NEWEST
// 				</p>
// 				<p
// 				  className="font12"
// 				  onClick={() => this.filterDropDownHandler("OLDEST")}
// 				>
// 				  OLDEST
// 				</p>
// 			  </div>
// 			);
// 		}

// 		return (
// 			<div style={expStyle}>
// 				<div className="expWrapper">
// 					<Row>
// 						<Col xs={12} sm={12} md={8} lg={9}>
// 						<div className="portfolio__nav">
// 							<ul>
// 								{tags.map((post, index) => {
// 									return(
// 									<li 
// 									key={index}
// 									className={`${this.state.pickedFilter} === ${post.expTag}
// 										? return "portfolio__nav-active font12"
// 										: return "font12"
// 									`} 
// 									onClick={() => this.filterGallery(`${post.expTag}`)}
// 									>{post.text}</li>
// 								)})}
// 							</ul>
// 						</div>
// 						</Col>
// 						<Col xs={12} sm={12} md={4} lg={3}>
// 						<div
// 							className="portfolio__filter"
// 							onMouseEnter={() => this.filterMenuHover(true)}
// 							onMouseLeave={() => this.filterMenuHover(false)}
// 						>
// 							<p className="font12">
// 							{this.state.pickedFilterDropdown} FIRST
// 							</p>
// 							<i class="fas fa-angle-down"></i>
// 							{filterDropDown}
// 						</div>
// 						</Col>
// 				</Row>
// 			</div>

// 			<Masonry 
// 				breakpointCols={experienceBreakpoints} 
// 				className="my-masonry-grid"
// 				columnClassName="my-masonry-grid_column"
// 			>
// 				{experienceRender}
// 			</Masonry>
// 		</div>
// 		)
// 	}
// }

// export default Experience;

// export default function Experiences () {
// 	const state = useContext(ThemeContext);

// 	const is900Width = useMediaQuery('(min-width: 992px)');

// 	const expStyle = {
// 		// maxWidth: "1200px",
// 		background: state.theme.primary,
// 		width: "100%",
// 		height: "100%",
// 		margin: "0 auto",
// 		padding: "0 15px"
// 	}

// 	const h1Style = {
// 		container: is900Width => ({
// 			fontWeight: 800,
// 			color: state.theme.text,
// 			fontSize: "60px",
// 			// marginLeft: is900Width && "-4rem",
// 		})
// 	}	
	
// 	const experienceBreakpoints = {
// 		default: 3,
// 		992: 2,
// 		686: 1
// 	}

// 	const experiencePosts = [...experience]

// 	console.log(experiencePosts);


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