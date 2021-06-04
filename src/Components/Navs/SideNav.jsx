import React from 'react'
import { useSelector } from 'react-redux';
import './SideNav.css'

const SideNav = () => {

    const isSidebarOpen = useSelector(state => state.isSideNavOpen);

    return (

        <div className={`sidenav-container ${isSidebarOpen ? "open" : ""}`}>

        </div>

    )

}

export default SideNav;