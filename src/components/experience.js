import React, {useContext} from 'react'
import Masonry from 'react-masonry-css';
import experience from "../assets/experience/experience-post";
import {ExperienceComp} from "./ui-components";
import {ThemeContext } from "./theme-provider";
import {useMediaQuery } from "./ui-components/useMediaQuery"
import {Row, Col } from "react-flexbox-grid";

class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			experiencePosts: (exp) => [...exp],
			filterResult: null, 
			pickedFilter: "all", 
			filterMenuActive: false, 
			pickedFilterDropdown: "NEWEST"
		}
	}
	

	componentDidMount() {
		this.filterGaller("all");
	}
}
export default function Experiences () {
	const state = useContext(ThemeContext);

	const is900Width = useMediaQuery('(min-width: 992px)');

	const expStyle = {
		// maxWidth: "1200px",
		background: state.theme.primary,
		width: "100%",
		height: "100%",
		margin: "0 auto",
		padding: "0 15px"
	}

	const h1Style = {
		container: is900Width => ({
			fontWeight: 800,
			color: state.theme.text,
			fontSize: "60px",
			// marginLeft: is900Width && "-4rem",
		})
	}	
	
	const experienceBreakpoints = {
		default: 3,
		992: 2,
		686: 1
	}

	const experiencePosts = [{filterResult: null, pickedFilter: "all", filterMenuActive: false, pickedFilterDropdown: "NEWEST"}, ...experience]

	console.log(experiencePosts);


	return (
		<div style={expStyle}>
			<Row start="xs" center="lg" style={{display: "flex"}}>
				<Col lg={4}>
					<h2 style={h1Style.container(is900Width)}>Experience</h2>
				</Col>
				{/* <Col md={12} lg={3}>
					<p></p>
				</Col> */}
			</Row>
			<Masonry 
				breakpointCols={experienceBreakpoints} 
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{experiencePosts.map((post, index) => 
				<ExperienceComp 
					title={post.title} 
					company={post.company} 
					description={post.description} 
					date={post.date} 
					location={post.location}
					key={index}
				/>)
				}
			</Masonry>
		</div>
	)
}