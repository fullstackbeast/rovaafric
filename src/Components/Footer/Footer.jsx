import React from 'react'
import './Footer.css'

import logo from '../../Images/logo.png'
import { useSelector } from 'react-redux'

import { HiArrowCircleRight } from 'react-icons/hi'

import NavLinks from '../Navs/NavLink'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Footer = () => {

    const companyDetails = useSelector(state => state.companyDetails);

    return (
        <div className="footer-container">

            <div className="footer-logodiv" style={{width: "56%", maxWidth: "200px"}}>
                <img src={logo} alt="" width="100%" />
            </div>
            <div className="footer-sections">
                <h3 style={{color: "var(--grey-text)"}}>Call us directly</h3>
                <p style={{fontSize: "1.4em", margin: "0", marginBottom: "2px" ,letterSpacing: "1px"}}>{companyDetails.phone}</p>
                <p style={{fontSize: "1em", margin: "0"}}>{companyDetails.email}</p>
            </div>
            <div className="footer-sections">
                <h3 className="footer-section-titles">Company</h3>
                <ul className="footer-quicklinks">
                    {
                        NavLinks.map(navLink =>
                            <li>
                                <Link className="footer-navlink" to={navLink.to}>{navLink.name}</Link>
                            </li>)
                    }

                </ul>
            </div>
            <div className="footer-sections newsletter-section">
                <h3 className="footer-section-titles">Our Newsletter</h3>
                <p>Subscribe to our newsletter and we will inform you about latest updates and offers</p>
                <form className="newsletterform">
                    <input type="email" name="email" id="email" placeholder="Email Address......"/>
                    <button type="submit"><HiArrowCircleRight /> </button>
                </form>
            </div>
            <div className="copyright-container">
                &copy; Rova Afric Group 2021
            </div>

        </div>
    )

}

export default Footer;