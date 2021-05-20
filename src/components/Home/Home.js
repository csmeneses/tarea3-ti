import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import { Button, Container, Row, Col } from 'react-bootstrap';


import Info from './Info/Info'
import Messages from './Messages/Messages'

import './Home.css';
import MyMap from "./MyMap/MyMap";
import logo from "./icons/control-tower.png"

const ENDPOINT = 'wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/';

let socket;

// const { v4: uuidv4 } = require('uuid');

const Home = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [flights, setFlights] = useState([]);
    const [planes, setPlanes] = useState([]);
    

    useEffect(() => {
    socket = io(ENDPOINT, {path: '/flights'});
    socket.emit('FLIGHTS')
    }, []);
    
    // Recibir mensaje
    useEffect(() => {
        socket.on('CHAT', message => {
            console.log(message);
            setMessages(messages => [ ...messages, message ]);
            // console.log(messages);
        });
    }, []);

    // Recibir flights
    useEffect(() => {
        socket.on('FLIGHTS', flights => {
            console.log(flights);
            setFlights(flights);
        });
    }, []);

    
    // Recibir position
    useEffect(() => {
        socket.on('POSITION', plane => {
            setPlanes(planes => [ ...planes, plane ]);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(message);
        if (message) {
            socket.emit('CHAT', {name: name, message: message}, () => setMessage(''));
        }
        setMessage('');
    }

    const askFlights = (event) => {
        event.preventDefault();
        console.log('Pidiendo vuelos');
        socket.emit('FLIGHTS');
    }

    return (
        <div className="home">
            <h1><img src={logo} className="logo" alt="site logo" />DCControl Center</h1>
            <Container fluid>
                <Row>
                    <Col xs={8}>
                        <MyMap flights={flights} planes={planes} />
                    </Col>
                    <Col xs={4}>
                        <h2>Chat</h2>
                        <Messages messages={messages} />
                        <div className="form-chat">
                            <form className="form">
                                <input
                                className="input"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={({ target: { value } }) => setName(value)}
                                />
                                <input
                                className="input"
                                type="text"
                                placeholder="Type a message..."
                                value={message}
                                onChange={({ target: { value } }) => setMessage(value)}
                                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                                />
                                {' '}<Button className="boton" onClick={e => sendMessage(e)}>Send</Button>{' '}
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr></hr>
                        <Info askFlights={askFlights} flights={flights} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;