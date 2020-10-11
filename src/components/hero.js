import React from "react";
import { Col, Row } from "react-flexbox-grid";

// Need hero image
import HeroImage from "../assets/images/_DSC0459-2.jpg"

const Hero = () => {
    return (
    <div className="hero">
        <div className="wrapper">
            <Row>
                <Col sm={8} lg={6}>
                    <div className="hero-image">
                        <img src={HeroImage} alt="hero" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="hero-info">
                        <h1 className="font-weight-800 font-60">
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

            </Row>
        </div>
    </div>
    )
}

export default Hero;