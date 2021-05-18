import React from "react";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'



const MyMap = () => {
    const position = [-30, -70];
    return (
        <div className="map-container">
            <h2>Flight Map</h2>
            <Map 
                className="map"
                center={position}
                zoom={4}
                style={{height: 400, width: "50%"}}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        </div>
        
    );
}

export default MyMap;