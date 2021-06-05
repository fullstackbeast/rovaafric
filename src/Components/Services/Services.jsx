import React from 'react'
import ServiceCard from '../Cards/ServiceCard'
import { BiChalkboard } from 'react-icons/bi'
import { GiCoins } from 'react-icons/gi'

const Services = () => {

    const services = [
        {
            icon: <GiCoins className="service-card-icon"/>,
            title: "Investment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, labore! Different Startegies l"
        },
        {
            icon: <BiChalkboard className="service-card-icon"/>,
            title: "Strategy",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, labore! Different Startegies l"
        },
    ]

    return (
        <div>

            {
                services.map(service => <ServiceCard service={service} />)
            }

        </div>

    )

}

export default Services;