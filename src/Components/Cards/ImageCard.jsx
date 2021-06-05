import React from 'react'

import teamImg from '../../Images/team.jpg'


const imageCard = ({ color }) => {



    const cardStyle = {
        position: "absolute",
        width: "var(--image-card-width)",
        height: "var(--image-card-width)",
        backgroundImage: `url(${teamImg})`,
        backgroundSize: "cover",  
        borderRadius: "20px",
        transform: "rotate(-9deg)"
    }

    return (
        <div style={cardStyle}>

        </div>
    )

}

export default imageCard;