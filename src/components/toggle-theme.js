import React, { useContext, useState } from 'react';
import styled from "styled-components";

// import Button from "./button-ripple";
import { ThemeContext } from './theme-provider';

export default function ToggleTheme() {

	const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    background-color: state.theme.primaryBtn;
    outline: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.3);

		&:active { 
			text-decoration: none;
    }
    
    &:hover { 
      // background-color: rgb(0,122,255);
      box-shadow: 0px 0px 5px #1890ff; 
      // color: #f8f9fa;
    }
	`;

  const state = useContext(ThemeContext);

  const btn = {
	backgroundColor: state.theme.primary,
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

