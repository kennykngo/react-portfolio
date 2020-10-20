import React, { useEffect, useRef, useState } from 'react';

const DropdownMenu = (props) => {
	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const onClick = () => setIsActive(!isActive);

	useEffect(() => {
		const pageClickEvent = e => {
			(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) && setIsActive(!isActive);
		};

		// if menu is active, listen for clicks
		if (isActive) {
			window.addEventListener("click", pageClickEvent);
		}

		return () => window.removeEventListener("click", pageClickEvent);
	}, [isActive])

	return (
		<div style={props.textStyle} className="menu-container">
			<button style={props.btnStyle} onClick={onClick} className="menu-trigger">
				<i className={`fas ${isActive ? "fa-angle-up" : "fa-angle-down"}`}></i>
				<span className="sorting-reference"> {props.current} </span>
			</button>
			<div ref={dropdownRef} style={props.filterStyle} className={`menu ${isActive ? "active" : "inactive"}`}>
				<ul style={props.filterStyle}>
					<li onClick={props.newest}>
						NEWEST
					</li>
					<li onClick={props.oldest}>
						OLDEST
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DropdownMenu;