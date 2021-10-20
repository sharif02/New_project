import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const HomeDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    const homedoctore = doctors.slice(0, 6)
    return (

        <div className="container mb-5">
            <div className="row">
                {
                    homedoctore.map(doctor =>
                        <Doctor
                            key={doctor.id}
                            doctor={doctor}

                        ></Doctor>)
                }
            </div>
        </div >


    );
};

export default HomeDoctor;