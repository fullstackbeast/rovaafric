
import React, { useState } from 'react';
import Inputfield from './Inputfield';
import './ContactForm.css'

const ContactForm= () =>{
    const [userDetails, setUserDetails] = useState({});

    const handleInput = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.id]: e.target.value
        });
    }



    return(
        <div className="contact-form-container">
               <form className="form-container">
                <Inputfield fieldType="text" fieldLabel="FULL NAME" fieldId="fullname" placeHolder="Enter your full name" handler={handleInput} />
                
                <Inputfield fieldType="email" fieldLabel="EMAIL" fieldId="email" placeHolder="Enter your email" handler={handleInput} />
                
                <Inputfield fieldType="text" fieldLabel="PHONE NUMBER" fieldId="phoneNumber" placeHolder="Enter your phone number" handler={handleInput} />
                
                <Inputfield fieldType="text" fieldLabel="SUBJECT" fieldId="subject" placeHolder="Enter your subject" handler={handleInput} />
                
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="message">Message</label>
                    <textarea cols="30" rows="7" id="message"></textarea>
                </div>
                
                <input type="submit" value="Send Message" className="submitbutton" />
            </form>
        </div> 
    )

} 

export default ContactForm;