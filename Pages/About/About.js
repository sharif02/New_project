import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2>Our Company Dtails</h2>
            <Container>
                <Row className="mb-5 my-5">
                    <div className="d-flex col-sm-6 col-lg-12 col-md-12">
                        <Col className="m-5 shadow-lg p-3 mb-5 bg-white rounded" >
                            <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields. Medicine, dentistry, pharmacy, midwifery, nursing, optometry, audiology, psychology, occupational therapy, physical therapy, athletic training, and other health professions are all part of health care. It includes work done in providing primary care, secondary care, and tertiary care, as well as in public health.

                                tively the use of medical services, the efficacy of treatments, and overall outcome (well-being, mortality rates).</p>
                        </Col>
                        <Col className="m-5"><img className="w-100" src="https://as2.ftcdn.net/v2/jpg/04/63/11/47/500_F_463114791_GAD141PB7X7uXi47FXxuBDJ1GCPouRQF.jpg" alt="" srcset="" /></Col>
                    </div>
                </Row>


            </Container>
        </div >
    );
};

export default About;