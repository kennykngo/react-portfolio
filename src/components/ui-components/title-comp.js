import React, {useContext} from 'react';
import {Row, Col} from "react-flexbox-grid";
import {ThemeContext} from "../theme-provider"

export default function Title (props) {
	const state = useContext(ThemeContext);
	const h2Style = {
		color: state.theme.text,
		fontWeight: 800,
		fontSize: "60px",
	}
	return (
	<Row start="xs" center="lg" style={{display: "flex"}}>
		<Col lg={4}>
			<h2 style={h2Style}>{props.children}</h2>
		</Col>
	</Row>
	)
}