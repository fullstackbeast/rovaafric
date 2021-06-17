import React from 'react'
import AboutSummary from '../Components/AboutUs/AboutSummary';
import OurMission from '../Components/AboutUs/OurMission';
import OurVision from '../Components/AboutUs/OurVision';
import MiniHero from '../Components/Hero/MiniHero';
import Team from '../Components/Team/Team';
import Testimonials from '../Components/Testimonials/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';

import './Styles/allpages.css'
import aboutheaderimg from '../Images/aboutheader.jpg'
import ContactFormPlugin from '../Components/Form/ContactFormPlugin';

const About = () => {

    return (
        <div>
            <MiniHero img={aboutheaderimg} text="ABOUT US" />
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
            <section className="grouped-page-section">
                <section>
                    <h3 className="grouped-page-section-title" >Why Choose Us</h3>
                    <WhyChooseUs />
                </section>

                <ContactFormPlugin />
            </section>
            
            <section className="page-section">
                <h3>TESTIMONIALS</h3>
                <Testimonials />
            </section>
            <section className="page-section">
                <h3>Meet The Team</h3>
                <Team />
            </section>
            

        </div>
    )

}

export default About;