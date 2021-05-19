import React from "react";

import {Marker, Polyline, Popup} from 'react-leaflet'
import L from 'leaflet'

import plane from '../icons/plane.png'

function getSpot(_spotSize) {
    return new L.Icon({
        iconUrl: plane,
        iconSize: [_spotSize, _spotSize]
    })
}

const Plane = ({ code, planes }) => {

    var my_planes = planes.filter(plane => plane.code === code);
    // console.log(my_planes);

    var set = new Set(my_planes.map(plane => plane.position));
    var positions = new Array(...set);

    return (
        <div>
            <Marker 
                position={positions[positions.length - 1]} 
                icon={getSpot(35)}
                onmouseover={(e) => {e.target.openPopup();}} 
                onmouseout={(e) => {e.target.closePopup();}}
            >
            <Popup>
                Flight {my_planes[my_planes.length - 1].code}
            </Popup>
            </Marker>
            <Polyline positions={positions} color={'darkblue'} weight="6"/>
        </div>
    );
}

export default Plane;