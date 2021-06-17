import React from 'react'
import vision from '../../Images/vision.jpg'
import ColorCard from '../Cards/ColorCard';
import ImageCard from '../Cards/ImageCard';

import './AboutUsSections.css'


const OurVision = () => {

    return (
        <div className="about-us-section-container vision-about">

            <div className="about-us-image-card" style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                <ColorCard />
                <ImageCard img={vision} angle="9deg" />
            </div>
            <div className="about-us-section-description " >
                <h1 className="about-us-section-title">Our Vision</h1>

                <p className="paragraph-text">We aspire to become the locally owned, independent community bank of choice for small and medium-sized businesses, professionals, and individuals in central Pennsylvania. We will combine steady growth, consistent earnings, and firm control of risk factors to provide safety for our depositors. Our people will be the difference in establishing consistency in earnings and enhanced shareholder value</p>
            </div>
        </div>
    )


}

export default OurVision;