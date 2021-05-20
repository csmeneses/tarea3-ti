import React from "react";
import { CardColumns, Button } from 'react-bootstrap';


import Flight from './Flight/Flight';

import './Info.css';

const { v4: uuidv4 } = require('uuid');

const Info = ({ askFlights, flights }) => {
    return (
        <div>
            <h2>Information</h2>
            <Button className="infoButton boton" onClick={e => askFlights(e)}>Get Info</Button>
            <CardColumns>
                {flights.map(({airline, code, destination, origin, passengers, plane, seats}) => (
                    <Flight key={uuidv4()} airline={airline} code={code} destination={destination} origin={origin} passengers={passengers} plane={plane} seats={seats} />
                ))}
            </CardColumns>
        </div>
    );
}

export default Info;
  