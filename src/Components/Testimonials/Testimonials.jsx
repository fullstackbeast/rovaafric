import React from 'react'
import TestimonialCard from '../Cards/TestimonialCard';
import './Testimonials.css'


const Testimonials = () => {

    const testimonials = [
        {
            name: "Ibrahim Awolowo",
            testimony: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sint laborum iure quod harum sit iste. Suscipit saepe sapiente veniam minus quis ipsam"
        },
        {
            name: "Idris Ejanla",
            testimony: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sint laborum iure quod harum sit iste. Suscipit saepe sapiente veniam minus quis ipsam"
        },
        {
            name: "Mubarak Moshood",
            testimony: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sint laborum iure quod harum sit iste. Suscipit saepe sapiente veniam minus quis ipsam"
        }
    ]

    return (
        <div className="testimonials-container">
            {
                testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}/>)
            }
        </div>
    )

}

export default Testimonials;