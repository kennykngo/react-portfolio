import React, { useContext } from "react";
import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";

import HeroImage from "../assets/images/_DSC0459-2.jpg"
import { ThemeContext } from "./theme-provider";

const logoLinks = [
    {
        alt: "github",
        src: "fa-github-square",
        // src: "fa-github",
        path: "https://github.com/kennykngo",
        class: "",
    },
    {
        alt: "behance",
        src: "fa-behance-square",
        // src: "fa-behance",
        path: "https://behance.net/kennyngo",
        class: "",
    },
    {
        alt: "linkedin",
        src: "fa-linkedin",
        // src: "fa-linkedin-in",
        path: "https://linkedin.com/in/kenny-ngo",
        class: "",
    },
    {
        alt: "medium",
        src: "fa-medium",
        // src: "fa-medium-m",
        path: "https://medium.com/@kenny.ngo.design",
        class: "br-5",
    },
]

const Hero = () => {
    
    const state = useContext(ThemeContext);
    const heroStyle = {
        backgroundColor: state.theme.primary,
        color: state.theme.text,
    }

    const A = styled.a`
        color: ${state.theme.text};

        &:hover {
            box-shadow: ${state.theme.hover}
        }
    `;


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
                                            <A href={link.path}> 
                                                <i className={`fab ${link.src} circle-icon fa-3x`} style={heroStyle, {backgroundColor: "transparent"}}>
                                                </i>
                                            </A>
                                        </li>
                                    ))}
                                </ul>
                                <p style={{fontWeight: state.theme.pFontWeight}}>
                                    Recently graduated front-end developer seeking to marry both my design degree, from San Francisco State University, and full-stack development certificate, from University of California, Berkeley Extension. Equipped with skills in JavaScript, React.js, CSS, NodeJS, and responsive web design, my passion is shown when tackling various mobile-first projects. Through my self-motivation and problem-solving aptitude in addition to my passion for web-development skills such as object-oriented principles and debugging, I will excel as part of a fast-paced, goal-driven team. 
                                </p>
                                
                            </div>          
                        </Col>
            </Row>
        </div>
    </div>
    )
}

export default Hero;