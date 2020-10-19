import React, { useEffect, useRef, useState } from 'react';

const DropdownMenu = (props) => {
	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const onClick = () => setIsActive(!isActive);

	useEffect(() => {
		const pageClickEvent = e => {
			console.log(e);
		};

		if (isActive) {
			window.addEventListener("click", pageClickEvent);
		}
	}, [isActive])

	return (
		<div className="menu-container">
			<button onClick={onClick} className="menu-trigger">
				<span className="sorting-reference"></span>
			</button>
			<div ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
				<ul>
					<li>
						OLDEST
					</li>
					<li>
						NEWEST
					</li>
				</ul>
			</div>
		</div>
	);
};
