import React from 'react'
import ContactCard from '../Components/Cards/ContactCard'
import ContactForm from '../Components/Form/ContactForm'
import MiniHero from '../Components/Hero/MiniHero'
import Map from '../Components/Map/Map'

import contactheaderImg from '../Images/contactheader.jpg'


const ContactUs = () => {

    return (
        <div>
            <MiniHero img={contactheaderImg} text="CONTACT US" />
            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                <Map />
                <ContactCard />
            </div>
            <div style={{margin: "0px auto", marginTop:"5em", maxWidth: "1000px"}}>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h6 style={{ margin: "0" }}>CONTACT US</h6>
                    <p>We are Always Here To Answer You</p>
                </div>

                <ContactForm />
            </div>

        </div>
    )

}

export default ContactUs;