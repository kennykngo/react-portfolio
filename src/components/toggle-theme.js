import React, { useContext } from 'react'
import { ThemeContext } from './theme-provider'

function ToggleTheme() {
  const state = useContext(ThemeContext)

  const btn = {
    color: state.theme.textOnSecondary,
    marginTop: '70px',
    marginBottom: '70px',
    background: state.theme.secondary
  }

  return (
    <button
      variant='contained'
      onClick={() => {
        state.setTheme(state.theme.type)
      }}
      style={btn}
    >
      Toggle Theme
    </button>
  )
}

export default ToggleTheme
