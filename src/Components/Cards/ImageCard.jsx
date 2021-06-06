import React from 'react'

// import teamImg from '../../Images/team.jpg'


const imageCard = ({img, angle }) => {



    const cardStyle = {
        position: "absolute",
        width: "var(--image-card-width)",
        height: "var(--image-card-width)",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",  
        borderRadius: "20px",
        transform: `rotate(${angle})`
    }

    return (
        <div style={cardStyle}>

        </div>
    )

}

export default imageCard;