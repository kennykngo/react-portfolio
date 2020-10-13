import React from 'react';
import styled from "styled-components";

const Button = ({ children }) => {

	const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    background-color: #6200ee;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    outline: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.3);

		&:active { 
			text-decoration: none;
		}
	`;

	function createRipple(event) {
	  const button = event.currentTarget;
  
	  const circle = document.createElement("span");
	  const diameter = Math.max(button.clientWidth, button.clientHeight);
	  const radius = diameter / 2;
  
	  circle.style.width = circle.style.height = `${diameter}px`;
	  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
	  circle.classList.add("ripple");
  
	  const ripple = button.getElementsByClassName("ripple")[0];
  
	  if (ripple) {
		ripple.remove();
	  }
  
	  button.appendChild(circle);
	}
  
	return <Button onClick={createRipple}>{children}</Button>;
  };
  
export default Button;