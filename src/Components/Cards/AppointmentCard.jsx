import React from 'react'
import { useSelector } from 'react-redux';

import './AppointmentCard.css'


const AppointmentCard = () => {

    const companyDetails = useSelector(state => state.companyDetails);

    return (
        <div className="appointment-card-container">
            <div>
                <h3>
                    Book an appointment quickly?
                    <span> Call us now!</span>
                </h3>

                <p>We provide a dedicated support 24/7 for any question</p>
            </div>
            <h3>{companyDetails.phone}</h3>
        </div>
    )

}

export default AppointmentCard;