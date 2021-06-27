import React from 'react'

import Blog from '../Components/Blog/Blog'
import AppointmentCard from '../Components/Cards/AppointmentCard'
import ContactFormPlugin from '../Components/Form/ContactFormPlugin'
import Services from '../Components/Services/Services'
import Testimonials from '../Components/Testimonials/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import Hero from '../Components/Hero/Hero'
import AboutSummary from '../Components/AboutUs/AboutSummary'

import './Styles/allpages.css'


const Home = () => {


    return (
        <div className="home-container">
            <Hero />

            <AppointmentCard />

            <section className="page-section">
                <h3>ABOUT ROVA AFRIC GROUP</h3>
                <AboutSummary />
            </section>

            <section className="page-section">
                <h3>OUR SERVICES</h3>
                <Services />
            </section>

            <section className="page-section">
                <h3>TESTIMONIALS</h3>
                <Testimonials />
            </section>
            <section className="grouped-page-section">
                <section>
                    <h3 className="grouped-page-section-title" >Why Choose Us</h3>
                    <WhyChooseUs />
                </section>

                <ContactFormPlugin />
            </section>


            <section className="page-section">
                <h3>From Our Blog</h3>
                <Blog count={3} />
            </section>

        </div>
    )

}

export default Home;