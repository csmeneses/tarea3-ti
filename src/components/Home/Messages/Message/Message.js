import React from "react";

import moment from 'moment';

import './Message.css';

const Mensaje = ({ name, date, message }) => {
    
    var date_full = new Date(parseInt(date));
    var date_pretty = moment(date_full).format('DD/MM/YYYY HH:mm');

    return (
        <div className="mensaje">
            <b>{name}:</b>
            <br></br>
            [{date_pretty}] {message}
            <br></br>
        </div>
    );
  }

export default Mensaje;
