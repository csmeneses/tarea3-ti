import React from "react";

import Message from './Message/Message';

import './Messages.css';

const { v4: uuidv4 } = require('uuid');

const Messages = ({ messages }) => {
    return (
        <div className="Mensajes">
            <h2>Messages</h2>
            {messages.map(({name, date, message}) => (
                <Message key={uuidv4()} name={name} date={date} message={message} />
            ))}
        </div>
    );
}

export default Messages;
