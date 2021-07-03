import React from 'react'
import ServiceCard from '../Cards/ServiceCard'
import { BiChalkboard } from 'react-icons/bi'
import { GiCoins } from 'react-icons/gi'

import './Services.css'

const Services = () => {

    const services = [
        {
            icon: <GiCoins className="service-card-icon"/>,
            title: "Innovate",
            desc: "We create new perspectives, new products, and new growth avenues through generating ideas and conducting research."
        },
        {
            icon: <BiChalkboard className="service-card-icon"/>,
            title: "Invest",
            desc: "We invest our capital alongside our clients’ capital to help businesses grow."
        },
        {
            icon: <BiChalkboard className="service-card-icon"/>,
            title: "Manage",
            desc: "We preserve and grow assets for institutions, including mutual funds, pension funds and foundations, as well as individuals."
        },
        {
            icon: <BiChalkboard className="service-card-icon"/>,
            title: "Support",
            desc: "We work to keep markets efficient and liquid so that investors and businesses can fulfill their objectives, whether it's to invest, raise capital, or manage risk."
        },
        {
            icon: <BiChalkboard className="service-card-icon"/>,
            title: "Transact",
            desc: "We trade on behalf of our clients in all major financial markets, including shares, bonds, currencies, and commodities, in order to facilitate capital flows, job creation, and economic growth."
        },
        {
            icon: <BiChalkboard className="service-card-icon"/>,
            title: "Advise",
            desc: "We help businesses expand by advising them on how to buy and sell firms, raise financing, and manage risks."
        },
    ]

    return (
        <div className="services-container">

            {
                services.map(service => <ServiceCard service={service} />)
            }

        </div>

    )

}

export default Services;