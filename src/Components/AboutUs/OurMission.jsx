import React from 'react'
import ColorCard from '../Cards/ColorCard';
import ImageCard from '../Cards/ImageCard';
import { Slide, Fade } from 'react-reveal'

import mission from '../../Images/mission.jpg'

const OurMission = () => {

    return (
        <>
            <h1>Our Mission</h1>
            <Slide bottom>
                <div style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                    <ColorCard />
                    <ImageCard img={mission} angle="-9deg" />
                </div>
            </Slide>
            <Fade top>
                <p className="paragraph-text">We work hard every day to make Rova Afric Groupt the world’s leading investment brand.</p>
            </Fade>
        </>
    )


}

export default OurMission;