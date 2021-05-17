import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

import Map from './Map/Map'
import Info from './Info/Info'
import Messages from './Messages/Messages'

import './Home.css';

const ENDPOINT = 'wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/';

let socket;

// const { v4: uuidv4 } = require('uuid');

const Home = ({ location }) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
    socket = io(ENDPOINT, {path: '/flights'});
    }, []);
    
    // Recibir mensaje
    useEffect(() => {
        socket.on('CHAT', message => {
            console.log(message);
            setMessages(messages => [ ...messages, message ]);
            // console.log(messages);
        });
    }, []);

    //! Enviar mensaje
    // useEffect(() => {
    //     socket.emit('CHAT', {name: "El Sujeto", message: "Buena"});
    // }, []);

    //! Pedir flights
    // useEffect(() => {
    //     socket.emit('FLIGHTS');
    // });

    //! Recibir flights
    // useEffect(() => {
    //     socket.on('FLIGHTS', flights => {
    //         console.log(flights);
    //     });
    // });

    //! Recibir position
    // useEffect(() => {
    //     socket.on('POSITION', pos => {
    //         console.log(pos);
    //     });
    // });

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(message);
        if (message) {
            socket.emit('CHAT', {name: name, message: message}, () => setMessage(''));
        }
        setMessage('');
    }


    return (
        <div className="home">

            <Map />
            <Info />

            <h1>Centro de Control</h1>
            <h2>Chat</h2>
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
                    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
                </form>
            </div>
            <Messages messages={messages} />
        </div>
    );
}

export default Home;