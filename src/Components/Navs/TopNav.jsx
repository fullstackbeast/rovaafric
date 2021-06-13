import React from 'react'
import './TopNav.css'

import logo from '../../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import NavLinks from './NavLink'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const TopNav = () => {

    const dispatch = useDispatch();
    return (
        <div className="topnav-container">
            <div className="topnav-logo-container">
                <img src={logo} alt="logo" />
            </div>

            <div>
                <FontAwesomeIcon className="hide-on-medium-upward" icon={faBars} size="2x" onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })} />
            </div>
            <div className="top-nav-list-container">
                <ul className="top-nav-links-list">
                    {
                        NavLinks.map(navLink =>
                            <li>
                                <Link className="topnav-link" to ={navLink.to}>{navLink.name}</Link>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default TopNav;