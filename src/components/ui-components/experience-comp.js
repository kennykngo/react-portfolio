import React, { useContext } from "react";
import { ThemeContext } from "../theme-provider";

export default function ExperienceComp(props) {
  const state = useContext(ThemeContext);

  const headingStyle = {
    backgroundColor: "transparent",
    color: state.theme.text,
    fontWeight: 800,
  };

  const pStyle = {
    color: state.theme.text,
    backgroundColor: "transparent",
    fontWeight: state.theme.pFontWeight,
  };

  const dateStyle = {
    color: "#2997ff",
  };

  return (
    <div className="experience-box">
      <h2 style={headingStyle}>{props.title}</h2>
      <h4 style={pStyle}>{props.company}</h4>
      <p style={pStyle}>{props.location}</p>
      <p style={pStyle}>{props.tag}</p>
      <p style={pStyle}>{props.description}</p>
      <p style={dateStyle}>{props.date}</p>
    </div>
  );
}
