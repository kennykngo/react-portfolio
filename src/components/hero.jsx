import React, { useContext, useState } from "react";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import HeroImage from "../assets/images/_DSC0459-2.jpg"
import { ThemeContext } from "./theme-provider";

import linkedInLogo from "../assets/images/logos/linkedin.svg"
import behanceLogo from "../assets/images/logos/behance.svg"
import githubLogo from "../assets/images/logos/github.svg"

const logoLinks = [
    {
        alt: "github",
        src: githubLogo,
        path: "https://github.com/kennykngo",
    },
    {
        alt: "behance",
        src: behanceLogo,
        path: "https://behance.net/kennyngo",
    },
    {
        alt: "linkedin",
        src: linkedInLogo,
        path: "https://linkedin.com/in/kenny-ngo",
    },
]

const Hero = () => {
    
    const state = useContext(ThemeContext);
    const heroStyle = {
        backgroundColor: state.theme.primary,
        color: state.theme.text,
    }

    // const [darkMode, setDarkMode] = useState("light");
    
    return (
    <div className="hero" style={heroStyle}>
        <div className="wrapper">
            <Row>
                        <Col lg={4}>
                            <div className="hero-image">
                                <img src={HeroImage} alt="hero" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="hero-info">
                                <h1 className="font-weight-800 font-60" style={heroStyle}>
                                    Kenny Ngo
                                </h1>
                                <h4 style={heroStyle}>
                                    kenny.ngo.design@gmail.com · (415)716-1608
                                </h4>
                                <ul className="logo-images">
                                    {logoLinks.map((link, index) => (
                                        <li key={index} >
                                            {/* Do not use Link since it will load to the same page */}
                                            <a href={link.path} > <img src={`${link.src}`} alt={link.alt} style={heroStyle, {backgroundColor: "transparent", filter: state.theme.invert, fill: "#ffffff", fill: "#fff"}}/></a>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{fontWeight: state.theme.pFontWeight}}>
                                    Recently graduated front-end web developer seeking to marry both my design degree, from San Francisco State University, and full-stack development certificate, from University of California, Berkeley Extension. Equipped with skills in JavaScript, React.js, CSS, NodeJS, and responsive web design, my passion is shown when tackling various mobile-first projects. Through my self-motivation and problem-solving aptitude in addition to my passion for web-development skills such as object-oriented principles and debugging, I will excel as part of a fast-paced, goal-driven team. 
                                </p>
                                
                            </div>          
                        </Col>
            </Row>
        </div>
    </div>
    )
}

export default Hero;