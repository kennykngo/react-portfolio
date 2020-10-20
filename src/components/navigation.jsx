import React, { useContext, useState } from 'react';
import { Link } from "react-scroll";
import styled from "styled-components";

import { ThemeContext } from "./theme-provider";
import ToggleTheme from "./toggle-theme";

const navLinks = [
    {
        title: "Home",
        path: "hero",
    },
    {
        title: "Projects",
        path: "projects",
    },
    {
        title: "Education & Skills",
        path: "education-skills",
    },
    {
        title: "Experience",
        path: "experience",
    },
];

export default function Navigation ({user}) {
    
    const [menuActive, setMenuActive] = useState(false);
    const state = useContext(ThemeContext);
    const Links = styled(Link)`
        color: ${state.theme.text};

        &:hover {
            color: ${state.theme.hover}
        }
    `;

    const navBar = {
        backgroundColor: state.theme.primaryNav,
        color: state.theme.text
    }

    return ( 
        <nav className="site-navigation" style={navBar}>
            <span className="menu-title">Kenny Ngo</span>
            
            <div className={`menu-content-container ${menuActive && "active"}` } style={navBar}>
                <span className="menu-avatar-container">
                        <ToggleTheme />
                </span>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}  > 
                            <Links 
                                activeClass="active-link"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                to={link.path}
                                >
                                    {link.title}
                            </Links>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="nav-icon1" className={`${menuActive && "open" }`} onClick={() => setMenuActive(!menuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}
