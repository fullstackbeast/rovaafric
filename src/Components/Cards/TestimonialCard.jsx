import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'

import './TestimonialCard.css'

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="testimonial-card-container">
            <FaQuoteRight className="testimonial-card-quote"/>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.testimony}</p>
        </div>
    )
}

export default TestimonialCard;