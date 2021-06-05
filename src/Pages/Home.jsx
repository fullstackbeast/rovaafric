import React from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from '../Components/Cards/AppointmentCard'
import ColorCard from '../Components/Cards/ColorCard'
import ImageCard from '../Components/Cards/ImageCard'
import Services from '../Components/Services/Services'
import Testimonials from '../Components/Testimonials/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'

import signature from '../Images/signature.svg'


const Home = () => {

    const companyDetails = useSelector(state => state.companyDetails);

    const ceo = companyDetails.staffs.filter(staff => staff.designation === "CEO")[0];

    return (
        <div className="home-container">
            {/* <Hero /> */}
            <AppointmentCard />
            <div>
                <div style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                    <ColorCard />
                    <ImageCard />
                </div>

                <h3>ABOUT ROVA AFRIC GROUP</h3>
                <h3>Leading <span style={{ color: "var(--theme-green)" }}>Invesment</span> Company</h3>
                <p style={{ textAlign: "justify" }}>
                    Rova Afric Group is a leading invesment company located in Lagos State Nigeria. We have an unbeatable record and flawless profit history. <br />
                    We are commited to making our clients financially stable. We have strategies and fund management discipline that can withstand any condition and survive through the test of time.
                </p>
                <div>
                    <img src={signature} width="150px" alt="signature" />
                    <br />
                    <span>{ceo.name} CEO</span>
                </div>
            </div>

            <div>
                <h3>OUR SERVICES</h3>
                <Services />
            </div>
            <div>
                <h3>TESTIMONIALS</h3>
                <Testimonials />
            </div>
            <div>
                <h3>Why Choose Us</h3>
                <WhyChooseUs />
            </div>
        </div>
    )

}

export default Home;