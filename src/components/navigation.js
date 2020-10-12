import React, { useState } from 'react';
import { Link } from "react-router-dom";

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



    return ( 
        <nav className="site-navigation">
            <span className="menu-title">Kenny Ngo</span>
            <div className={`menu-content-container ${menuActive && "active"}` } >
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}> 
                            <Link to={link.path}>{link.title}</Link>
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
