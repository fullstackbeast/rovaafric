import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ service }) => {

    return (
        <div className="service-card-container">
            {service.icon}
            <h4 className="service-card-title">{service.title}</h4>
            <p className="service-card-desc">{service.desc}</p>
        </div>
    )
}

export default ServiceCard;