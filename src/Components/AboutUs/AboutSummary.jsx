import React from 'react'
import { useSelector } from 'react-redux';
import { Slide, Fade } from 'react-reveal'

import './AboutUsSections.css'

import ColorCard from '../Cards/ColorCard'
import ImageCard from '../Cards/ImageCard'

import signature from '../../Images/signature.svg'
import teamImg from '../../Images/team.jpg'



const AboutSummary = () => {

    const companyDetails = useSelector(state => state.companyDetails);

    const ceo = companyDetails.staffs.filter(staff => staff.designation === "CEO")[0];

    return (
        <div className="about-us-section-container">
            <Slide bottom>
                <div style={{ display: "flex", marginTop: "50px", marginBottom: "40px", justifyContent: "center" }}>
                    <ColorCard />
                    <ImageCard img={teamImg} angle="-9deg" />
                </div>
            </Slide>
            <div className="about-us-section-description" >
                <h3 className="about-us-section-title" >Leading <span style={{ color: "var(--theme-green)" }}>Investment</span> Company</h3>
                <Fade top>
                    <p className="paragraph-text">
                        Rova Afric Group is a leading global investment banking, securities, and investment management organisation that serves a large and diverse customer base of corporations, financial institutions, governments, and individuals.  <br /> <br />
                        At Rova Afric Group we provide underwriting and mergers and acquisitions advisory services by delivering exceptional client service, acting with integrity and responsibility.
                    </p>
                </Fade>
                <div>
                    <img src={signature} width="150px" alt="signature" />
                    <br />
                    <span>{ceo.name} CEO</span>
                </div>
            </div>
        </div>
    )

}

export default AboutSummary;