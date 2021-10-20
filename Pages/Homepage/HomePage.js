import React from 'react';
import './Homepage.css'
import About from '../About/About';
import HomeDoctor from '../Doctors/HomeDoctor/HomeDoctor';
import HomeService from '../Services/ServiceForHome/HomeService';
import Banner from '../Banner/Banner';
const HomePage = () => {
    return (
        <div className="m-3 body-container">
            <Banner></Banner>
            <h2 className="text-warning mb-5 my-5 text-2xl">Our Services </h2>
            <HomeService></HomeService>
            <h2 className="text-danger mb-3">Our Honourable Doctor </h2>
            <HomeDoctor></HomeDoctor>
            <About></About>


        </div>

    );
};

export default HomePage;