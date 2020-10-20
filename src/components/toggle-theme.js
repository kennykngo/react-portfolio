import React, { useContext } from 'react';
import styled from "styled-components";

// import Button from "./button-ripple";
import { ThemeContext } from './theme-provider';

export default function ToggleTheme() {

  const state = useContext(ThemeContext);

	const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    background-color: ${state.theme.primary};
    outline: 0;
    border-radius: 0.25rem;

		&:active { 
			text-decoration: none;
    }
    
    &:hover { 
      background-color: ${state.theme.hoverBtn};
      color: #f8f9fa;
    }
    `;

  // const btn = {
	// backgroundColor: state.theme.primary,
  // }

  return (
    <Button
      className="mb-5"
      variant='contained'
      onClick={() => {
        state.setTheme(state.theme.type)
      }}
      // style={btn}
    >
      Toggle Theme
    </Button>
  )
}

