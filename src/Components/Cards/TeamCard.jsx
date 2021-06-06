import React from 'react'
import './TeamCard.css'

const TeamCard = ({ staff }) => {


    return (
        <div className="teamcard-container">
            <div className="staff-image" style={{ backgroundImage: `url(${staff.image})` }}>

            </div>
            <div className="staff-details">
                <h3>{staff.name}</h3>
                <p>{staff.desc}</p>
            </div>

        </div>
    )
}

export default TeamCard;