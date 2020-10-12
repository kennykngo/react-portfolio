import React, { useState, useContext} from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "./theme-provider"

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Experience",
        path: "/experience",
    },
];

export default function Navigation ({user}) {
    
    const [menuActive, setMenuActive] = useState(false);

    const state = useContext(ThemeContext);

    const navBar = {
        backgroundColor: state.theme.primary,
        color: state.theme.text
    }

    return ( 
        <nav className="site-navigation" style={navBar}>
            <span className="menu-title">Kenny Ngo</span>
            <div className={`menu-content-container ${menuActive && "active"}` } style={navBar}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}  > 
                            <Link style={navBar} to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span className="menu-avatar-container">
                    {/* <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`} </span> */}
                </span>
            </div>
            {/* <i 
                className={`ionicons icon ${menuActive ? "ion-ios-close": "ion-ios-menu"}`} 
                onClick={() => setMenuActive(!menuActive)} 
            /> */}
            <div id="nav-icon1" className={`${menuActive && "open" }`} onClick={() => setMenuActive(!menuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}
