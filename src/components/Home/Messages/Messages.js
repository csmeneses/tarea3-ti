import React from "react";

import Message from './Message/Message';

import './Messages.css';

const { v4: uuidv4 } = require('uuid');

const Messages = ({ messages }) => {
    return (
        <div>
            {/* <h4>Messages:</h4> */}
            <div className="Mensajes">
                <div className="intro">
                    <hr></hr>
                    <b>¡Welcome to the Pilot's chat!</b>
                    <hr></hr>
                </div>
                {messages.map(({name, date, message}) => (
                    <Message key={uuidv4()} name={name} date={date} message={message} />
                ))}
            </div>
        </div>
    );
}

export default Messages;
