import React, { useContext, useState } from 'react'
import { ThemeContext } from './theme-provider';
import styled from "styled-components"

export default function ToggleTheme() {

	const Button = styled.button`
		border-radius: 12px 2px 12px 2px;

		&:active { 
			
		}
	`;

  const state = useContext(ThemeContext);

  const btn = {
    color: state.theme.textOnSecondary,
	// marginTop: '70px',
	
	background: state.theme.secondary,

  }

  return (
    <Button
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

