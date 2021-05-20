import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

import moment from 'moment';

import './Message.css';

const Mensaje = ({ name, date, message }) => {
    
    var date_full = new Date(parseInt(date));
    var date_pretty = moment(date_full).format('DD/MM/YYYY | HH:mm');

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="card-mensaje">
                            <Card.Body className="card-texto">
                                    <b>({date_pretty}) {name}:</b>
                                    <br></br>
                                    {message}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }

export default Mensaje;
