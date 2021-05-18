import React from "react";

import Flight from './Flight/Flight';

import './Info.css';

const { v4: uuidv4 } = require('uuid');

const Info = ({ askFlights, flights }) => {
    return (
        <div>
            <h2>INFO</h2>
            <button className="infoButton" onClick={e => askFlights(e)}>Get Info</button>
            {flights.map(({airline, code, destination, origin, passengers, plane, seats}) => (
                <Flight key={uuidv4()} airline={airline} code={code} destination={destination} origin={origin} passengers={passengers} plane={plane} seats={seats} />
            ))}
        </div>
    );
}

export default Info;
  