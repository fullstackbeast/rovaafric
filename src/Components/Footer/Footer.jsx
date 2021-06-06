import React from 'react'
import './Footer.css'

import logo from '../../Images/logo.png'
import { useSelector } from 'react-redux'

import {HiArrowCircleRight} from 'react-icons/hi'

const Footer = () => {

    const companyDetails = useSelector(state => state.companyDetails);

    return (
        <div className="footer-container">

            <div>
                <img src={logo} alt="" width="56%" />
            </div>
            <div>
                <h3>Call us directly</h3>
                <p>{companyDetails.phone}</p>
                <p>{companyDetails.email}</p>
            </div>
            <div>
                <h3>Company</h3>
                <ul className="footer-quicklinks">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Team</li>
                    <li>Offices</li>
                </ul>
            </div>
            <div>
                <h3>Our Newsletter</h3>
                <p>Subscribe to our newsletter and we will inform you about latest updates and offers</p>
                <form>
                    <input type="email" name="email" id="email" />
                    <button type="submit"><HiArrowCircleRight/> </button>
                </form>
            </div>
            <div className="copyright-container">
                &copy; Rova Afric Group 2021
            </div>

        </div>
    )

}

export default Footer;