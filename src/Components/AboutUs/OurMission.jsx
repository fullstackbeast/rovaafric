import React from 'react'
import ColorCard from '../Cards/ColorCard';
import ImageCard from '../Cards/ImageCard';
import { Slide, Fade } from 'react-reveal'

import './AboutUsSections.css'

import mission from '../../Images/mission.jpg'

const OurMission = () => {

    return (
        <div className="about-us-section-container">

            <Slide bottom>
                <div style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                    <ColorCard />
                    <ImageCard img={mission} angle="-9deg" />
                </div>
            </Slide>
            <div className="about-us-section-description" >
                <h1 className="about-us-section-title">Our Mission</h1>
                <Fade top>
                    <p className="paragraph-text">We work hard every day to make Rova Afric Groupt the world’s leading investment brand.</p>
                </Fade>
            </div>
        </div>
    )


}

export default OurMission;