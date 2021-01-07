import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import React, { useContext } from "react";

import { ThemeContext } from "./theme-provider";

// import styled from "styled-components";

import "./__toggle-theme.scss";

export default function ToggleTheme() {
  const state = useContext(ThemeContext);
  const [checked, setChecked] = React.useState(false);

  // const Button = styled.button`
  //   text-decoration: none;
  //   cursor: pointer;
  //   position: relative;
  //   overflow: hidden;
  //   transition: background 400ms;
  //   background-color: ${state.theme.primary};
  //   outline: 0;
  //   border-radius: 0.25rem;

  //   &:active {
  //     text-decoration: none;
  //   }

  //   &:hover {
  //     background-color: ${state.theme.hoverBtn};
  //     color: #f8f9fa;
  //   }
  // `;

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onClick={() => {
              state.setTheme(state.theme.type);
            }}
            onChange={toggleChecked}
          />
        }
      />
    </FormGroup>
  );
}
