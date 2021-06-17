import React from 'react'
import { useSelector } from 'react-redux';
import './ContactCard.css'


const ContactCard = () => {

    const companyDetails = useSelector(state => state.companyDetails);
    return (
        <div className="contact-card-container">
            <div>
                <p className="address-summary">{companyDetails.addressDetails.town}, <span>{companyDetails.addressDetails.state}</span></p>
                <p>{companyDetails.address}</p>
                <h3>Email: <span>{companyDetails.email}</span> </h3>
            </div>
            <div>
                <section className="contact-card-section">
                    <h5>Call DIrectly</h5>
                    <p>{companyDetails.phone}</p>
                </section>

                <section className="contact-card-section">
                    <h5>Branch Offices: </h5>
                    {companyDetails.branches.map(branch => <p>{branch}</p>)}
                </section>

                <section className="contact-card-section">
                    <h5>Work Hours: </h5>
                    <p>Mon - Sat: 8:00 - 17:00</p>
                </section>


            </div>
        </div>
    )

}

export default ContactCard;