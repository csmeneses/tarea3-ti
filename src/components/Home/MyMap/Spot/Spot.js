import React from "react";

import {Marker, Polyline} from 'react-leaflet'
import L from 'leaflet'

import spot from '../icons/airport.png'

function getSpot(_spotSize) {
    return new L.Icon({
        iconUrl: spot,
        iconSize: [_spotSize, _spotSize]
    })
}

const Spot = ({ coords_dest, coords_ori }) => {
    return (
        <div>
            <Marker position={coords_dest} icon={getSpot(25)}>
            </Marker>
            <Marker position={coords_ori} icon={getSpot(25)}>
            </Marker>
            <Polyline positions={[coords_ori, coords_dest]} color={'red'} dashArray={'25'} />
        </div>
    );
}

export default Spot;
