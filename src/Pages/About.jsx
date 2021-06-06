import React from 'react'
import AboutSummary from '../Components/AboutUs/AboutSummary';
import OurMission from '../Components/AboutUs/OurMission';
import OurVision from '../Components/AboutUs/OurVision';
import Testimonials from '../Components/Testimonials/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

import './Styles/allpages.css'

const About = () => {

    return (
        <div>
            <section className="page-section">
                <h3>ABOUT ROVA AFRIC GROUP</h3>
                <AboutSummary />
            </section>
            <section className="page-section">
                <OurVision />
            </section>
            <section className="page-section">
                <OurMission />
            </section>
            <section className="page-section">
                <h3>Why Choose Us</h3>
                <WhyChooseUs />
            </section>
            <section className="page-section">
                <h3>TESTIMONIALS</h3>
                <Testimonials />
            </section>
        </div>
    )

}

export default About;