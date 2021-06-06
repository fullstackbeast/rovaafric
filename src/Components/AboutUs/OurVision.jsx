import React from 'react'
import vision from '../../Images/vision.jpg'
import ColorCard from '../Cards/ColorCard';
import ImageCard from '../Cards/ImageCard';


const OurVision = () => {

    return (
        <>
            <h1>Our Vision</h1>
            <div style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                <ColorCard />
                <ImageCard img={vision} angle="9deg" />
            </div>

            <p className="paragraph-text">We aspire to become the locally owned, independent community bank of choice for small and medium-sized businesses, professionals, and individuals in central Pennsylvania. We will combine steady growth, consistent earnings, and firm control of risk factors to provide safety for our depositors. Our people will be the difference in establishing consistency in earnings and enhanced shareholder value</p>
        </>
    )


}

export default OurVision;