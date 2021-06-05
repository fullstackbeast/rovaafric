import React from 'react'


const ColorCard = ({ color }) => {

    const cardStyle = {
        width: "var(--image-card-width)",
        height: "var(--image-card-width)",
        backgroundColor: "var( --theme-green)", 
        borderRadius: "20px",
        transform: "rotate(-25deg)"
    }

    return (
        <div style={cardStyle}>

        </div>
    )

}

export default ColorCard;