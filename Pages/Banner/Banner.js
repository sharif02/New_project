
import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <div style={{ height: '700px' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: '700px' }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-psd/dentist-dental-care-web-banner-template_120329-1327.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '700px' }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-psd/dentist-dental-care-web-banner-template_120329-1323.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '700px' }}
                            className="d-block w-100 "
                            src="https://image.freepik.com/free-psd/dentist-dental-care-web-banner-template_120329-1331.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
