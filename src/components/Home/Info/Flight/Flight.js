import React, { useState, useEffect } from "react";
import { Card, Table } from 'react-bootstrap';

import axios from 'axios';

import './Flight.css';

const { v4: uuidv4 } = require('uuid');

const Flight = ({ airline, code, destination, origin, passengers, plane, seats }) => {

    const [lugar_dest, setLugar_dest] = useState('');
    const [lugar_ori, setLugar_ori] = useState('');

    // const destino = () => {
    //     const lat_dest = destination[0];
    //     const long_dest = destination[1];

    //     var place_dest = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long_dest},${lat_dest}.json?access_token=pk.eyJ1IjoiY3NtZW5lc2VzIiwiYSI6ImNraWRueWxkZjB0cHQyeG80OHJ0cjhwMG0ifQ.04KZZVYMSB3lpPSby2Guqw`;

    //     fetch(place_dest).then(function (response) {
    //         return response.json();
    //     }).then(function (obj) {
            
    //         var feat = obj.features
    //         if (feat.length >= 3) {
    //             setLugar_dest(feat[feat.length - 2].place_name);
    //         } else {
    //             setLugar_dest(feat[0].place_name);
    //         }
    //     });
    // };

    // destino();

    // useEffect(() => {
    //     const lat_ori = origin[0];
    //     const long_ori = origin[1];

    //     var place_ori = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long_ori},${lat_ori}.json?access_token=pk.eyJ1IjoiY3NtZW5lc2VzIiwiYSI6ImNraWRueWxkZjB0cHQyeG80OHJ0cjhwMG0ifQ.04KZZVYMSB3lpPSby2Guqw`;

    //     fetch(place_ori).then(function (response) {
    //         return response.json();
    //     }).then(function (obj) {
            
    //         var feat = obj.features
    //         if (feat.length >= 3) {
    //             setLugar_ori(feat[feat.length - 2].place_name);
    //         } else {
    //             setLugar_ori(feat[0].place_name);
    //         }
    //     });
    // }, []);

    //! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 
    // useEffect(() => {
    //     axios
    //         .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${origin[1]},${origin[0]}.json?access_token=pk.eyJ1IjoiY3NtZW5lc2VzIiwiYSI6ImNraWRueWxkZjB0cHQyeG80OHJ0cjhwMG0ifQ.04KZZVYMSB3lpPSby2Guqw`)
    //         .then(res => {
    //             var feat = res.data.features;
    //             if (feat.length >= 3) {
    //                 setLugar_ori(feat[feat.length - 2].place_name);
    //             } else {
    //                 setLugar_ori(feat[feat.length - 2].place_name);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // });

    // useEffect(() => {
    //     axios
    //         .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${destination[1]},${destination[0]}.json?access_token=pk.eyJ1IjoiY3NtZW5lc2VzIiwiYSI6ImNraWRueWxkZjB0cHQyeG80OHJ0cjhwMG0ifQ.04KZZVYMSB3lpPSby2Guqw`)
    //         .then(res => {
    //             var feat = res.data.features;
    //             if (feat.length >= 3) {
    //                 setLugar_dest(feat[feat.length - 2].place_name);
    //             } else {
    //                 setLugar_dest(feat[feat.length - 2].place_name);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // });
    //! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

    return (
        <Card>
            <Card.Header>
                {airline}
            </Card.Header>
            <Card.Body>
                <Card.Title><b>Flight {code}</b></Card.Title>
                <div><b>Destination:</b> {destination[0]}, {destination[1]}</div>
                <div><b>Origin:</b> {origin[0]}, {origin[1]}</div>
                <div><b>Plane:</b> {plane}</div>
                <div><b>Seats:</b> {seats}</div>
                <hr></hr>
                <div className="pasajeros"><b>Passengers:</b></div>
                <Table size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passengers.map(({name, age}) => (
                            <tr key={uuidv4()}>
                                <td>{name}</td>
                                <td>{age}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Flight;