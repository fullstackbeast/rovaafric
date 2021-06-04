import React from 'react'
import './TopNav.css'

import logo from '../../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

const TopNav = () => {

    const dispatch = useDispatch();
    return (
        <div className="topnav-container">
            <div className="topnav-logo-container">
                <img src={logo} alt="logo" />
            </div>

            <div>
                <FontAwesomeIcon icon={faBars} size="2x"  onClick={() => dispatch({ type: 'TOOGGLESIDEBAR' })}/>
            </div>
        </div>
    )
}

export default TopNav;