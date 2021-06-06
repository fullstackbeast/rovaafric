import React from 'react'


const MiniHero = ({ img, text }) => {

    const miniHeroStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        height: "20vh", 
        maxHeight: "100px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        color: "white"
    }

    return (
        <div style={miniHeroStyle}>
            <h3>{text}</h3>
        </div>
    )

}

export default MiniHero;