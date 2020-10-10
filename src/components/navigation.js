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
    

    return ( 
        <nav className="site-navigation">
            <span className="menu-title">Kenny Ngo</span>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}> 
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
