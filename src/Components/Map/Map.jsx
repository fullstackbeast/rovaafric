import React from 'react'

import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'



const MapTemplate = () => {
    return <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.421532, lng: -75.697189 }} />
}

const WrappedMap = withScriptjs(withGoogleMap(MapTemplate));


const Map = () => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}

            />
        </div>
    )
}



export default Map;