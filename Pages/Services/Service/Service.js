import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, serviceName, url, serviceDetails, drname } = service;
    return (
        <div className="col-md-4 mb-5">
            <Card className="shadow-lg p-1 mb-5 border border-success  bg-white rounded" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <span style={{ fontSize: '18px', fontWeight: '750px' }}>By : {drname}</span>
                    <Card.Text>
                        {serviceDetails}
                    </Card.Text>
                    <Link to={`/booking/ ${id}`}>
                        <Button variant="primary">Book Service</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Service;