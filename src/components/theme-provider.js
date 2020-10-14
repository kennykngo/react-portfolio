import React, { useState } from 'react';

export const ThemeContext = React.createContext({
  theme: {
    type: 'light',
    primary: '#f8f9fa',
    text: '#black'
  },
  setTheme: () => {}
})

export const ThemeContextProvider = props => {
  const theme = {
    light: {
      type: 'light',
      primary: '#f8f9fa',
      primaryBtn: '#f8f9fa',
      text: '#444444',
      primaryNav: "#ffffff",
      invert: "invert(0.25)",
      pFontWeight: "1",
      hover: "0px 0px 50px #f8f9fa"

    },
    dark:{
      type: 'dark',
      primary: '#212121',
      primaryBtn: '#212121',
      text: '#ccc',
      primaryNav: "#121212",
      invert: "invert(0.75)",
      pFontWeight: "51",
      hover: "#f8f9fa"
    },
  }

  const setTheme = type => {
    setState({ ...state, theme: type === 'dark' ? theme.light : theme.dark })
  }

  const initState = {
    theme: theme.light,
    setTheme: setTheme
  }

  const [state, setState] = useState(initState)

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}
