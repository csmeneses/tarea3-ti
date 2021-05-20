import React from "react";
import {Map, TileLayer} from 'react-leaflet'

import Spot from './Spot/Spot'
import Plane from './Plane/Plane'

const { v4: uuidv4 } = require('uuid');

const MyMap = ({ flights, planes }) => {
    const position = [-37, -67];

    // const [codes, setCodes] = useState([]);

    var set = new Set(planes.map(plane => plane.code));
    var codes = new Array(...set);

    // for (let code of codes) {
    //     console.log(planes.filter(plane => plane.code === code));
    // }

    return (
        <div className="map-container">
            <h2>Flight Map</h2>
            <Map 
                className="map"
                center={position}
                zoom={4}
                style={{height: 400, width: "100%"}}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {flights.map(({destination, origin}) => (
                    <Spot key={uuidv4()} coords_dest={destination} coords_ori={origin} />
                ))}

                {codes.map((code) => (
                    <Plane key={uuidv4()} code={code} planes={planes} />
                ))}
            </Map>
        </div>
    );
}

export default MyMap;
