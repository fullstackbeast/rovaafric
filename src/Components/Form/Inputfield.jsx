import React from 'react'
import './Inputfield.css'


const Inputfield = ({fieldType, fieldLabel, fieldId, handler, placeHolder}) => {

    return (
        <div className="field-container">
            <label htmlFor={fieldId}>{fieldLabel}</label>
            <input placeholder={placeHolder} type={fieldType} id={fieldId} onChange={handler}/>
        </div>
    )

}

export default Inputfield;