import React from 'react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {

    const whyChooseUs = [
        {
            title: "Strong Market Analysis",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, optio culpa numquam rem dolorum voluptates dolorem commodi, laboriosam, animi blanditiis nihil? Dolores reiciendis explicabo alias."
        },
        {
            title: "Experience and Percision",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, optio culpa numquam rem dolorum voluptates dolorem commodi, laboriosam, animi blanditiis nihil? Dolores reiciendis explicabo alias."
        },
        {
            title: "Experts About Business",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, optio culpa numquam rem dolorum voluptates dolorem commodi, laboriosam, animi blanditiis nihil? Dolores reiciendis explicabo alias."
        }
    ]

    return (
        <div className="wcu-container">
       
            {
                whyChooseUs.map(w => 
                <div className="single-wcu-container">
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                </div>)
            }
        </div>
    )
}

export default WhyChooseUs;