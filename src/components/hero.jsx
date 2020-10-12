import React, { useContext } from "react";
import { Col, Row } from "react-flexbox-grid";

import HeroImage from "../assets/images/_DSC0459-2.jpg"
import { ThemeContext } from "./theme-provider";

const Hero = () => {

    const state = useContext(ThemeContext);
    const heroStyle = {
        backgroundColor: state.theme.primary,
        color: state.theme.text,
    }

    return (
    <div className="hero" style={heroStyle}>
        <div className="wrapper">
            <Row>
                {/* <Col xs={12} lg={10}>
                    <Row around="lg"> */}
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
                                <h4>
                                    kenny.ngo.design@gmail.com · (415)716-1608
                                    </h4>
                                <p>
                                    Recently graduated front-end web developer seeking to marry both my design degree, from San Francisco State University, and full-stack development certificate, from University of California, Berkeley Extension. Equipped with skills in JavaScript, React.js, CSS, NodeJS, and responsive web design, my passion is shown when tackling various mobile-first projects. Through my self-motivation and problem-solving aptitude in addition to my passion for web-development skills such as object-oriented principles and debugging, I will excel as part of a fast-paced, goal-driven team. 
                                </p>
                                
                            </div>
                        </Col>
                    {/* </Row>
                </Col> */}
            </Row>
        </div>
    </div>
    )
}

export default Hero;