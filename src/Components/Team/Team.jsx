import React from 'react'
import { useSelector } from 'react-redux';
import TeamCard from '../Cards/TeamCard';


const Team = () => {

    const staffs = useSelector(state => state.companyDetails.staffs.filter(staff => staff.designation === "staff"));


    return (
        <>
            <h4>We are <span style={{color: "var(--theme-green)"}}>friendly and professional</span></h4>
            {
                staffs.map(staff => <TeamCard staff={staff}/>)
            }
        </>
    )
}

export default Team;