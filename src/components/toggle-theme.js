import React, { useContext, useState } from 'react';
import styled from "styled-components";

// import Button from "./button-ripple";
import { ThemeContext } from './theme-provider';

export default function ToggleTheme() {

	const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    // background-color: #ffffff;
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

  const state = useContext(ThemeContext);

  const btn = {
    // color: state.theme.textOnSecondary,
	// marginTop: '70px',
	backgroundColor: state.theme.primary,
	// color: state.theme.secondary,

  }

  return (
    <Button
      className="mb-5"
      variant='contained'
      onClick={() => {
        state.setTheme(state.theme.type)
      }}
      style={btn}
    >
      Toggle Theme
    </Button>
  )
}

