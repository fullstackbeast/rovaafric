import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLinks from './NavLink';

import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi'
import { ImPhone } from 'react-icons/im'
import { AiFillMail } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'

import './SideNav.css'

import logo from '../../Images/logo.png'

const SideNav = () => {

    const isSidebarOpen = useSelector(state => state.isSideNavOpen);

    const companyDetails = useSelector(state => state.companyDetails);

    const dispatch = useDispatch();

    return (

        <div className={`sidenav-container ${isSidebarOpen ? "open" : ""}`}>

            <div className="sidenav-top">
                <img src={logo} alt="logo" width="70%" />
                <button onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}>X</button>
            </div>
            <div className="sidenav-center">
                {
                    NavLinks.map(link =>
                        <div>
                            <Link to={link.to} className="sidenav-link" onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}>
                                {link.name}
                            </Link>
                        </div>)
                }
            </div>

            <div className="sidenav-bottom">

                <div className="sidenav-contact-container">
                    <div>
                        <ImPhone />
                        <span>{companyDetails.phone}</span>
                    </div>
                    <div>
                        <AiFillMail />
                        <span>{companyDetails.email}</span>
                    </div>
                    <div>
                        <FaMapMarkerAlt />
                        <span>{companyDetails.address}</span>
                    </div>
                </div>

                <div className="sidenav-socials-container">
                    <FiTwitter />
                    <FiInstagram />
                    <FiFacebook />
                    <FiLinkedin />
                </div>

            </div>

        </div>

    )

}

export default SideNav;