import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer-area col-sm-12">
            <Row>
                <Col></Col>
                <Col className="my-5">CopyRight All Reserved Hero Team</Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Footer;