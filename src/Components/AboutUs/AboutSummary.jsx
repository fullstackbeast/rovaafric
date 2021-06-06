import React from 'react'
import { useSelector } from 'react-redux';

import ColorCard from '../Cards/ColorCard'
import ImageCard from '../Cards/ImageCard'

import signature from '../../Images/signature.svg'


const AboutSummary = () => {

    const companyDetails = useSelector(state => state.companyDetails);

    const ceo = companyDetails.staffs.filter(staff => staff.designation === "CEO")[0];

    return (
        <>
            <div style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                <ColorCard />
                <ImageCard />
            </div>

            <h3>Leading <span style={{ color: "var(--theme-green)" }}>Invesment</span> Company</h3>

            <p className="paragraph-text">
                Rova Afric Group is a leading invesment company located in Lagos State Nigeria. We have an unbeatable record and flawless profit history. <br /> <br />
                    We are commited to making our clients financially stable. We have strategies and fund management discipline that can withstand any condition and survive through the test of time.
            </p>
            <div>
                <img src={signature} width="150px" alt="signature" />
                <br />
                <span>{ceo.name} CEO</span>
            </div>
        </>
    )

}

export default AboutSummary;