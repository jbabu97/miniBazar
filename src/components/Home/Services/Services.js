import React, { useEffect, useState } from 'react';
import serviceImg1 from '../../../photos/shortening.jpg';
import serviceImg2 from '../../../photos/service_2.jpg';
import serviceImg3 from '../../../photos/service_1.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';

const serviceData = [
    {
        img: serviceImg1,
        serviceName: 'shortening',
        serviceCharge: '$ 50',
        id: 1
    },
    {
        img: serviceImg2,
        serviceName: 'shortening',
        serviceCharge: '$ 50',
        id: 2
    },
    {
        img: serviceImg3,
        serviceName: 'shortening',
        serviceCharge: '$ 50',
        id: 3
    }
]

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => { 
        fetch(`http://localhost:5757/services`)
        .then(res => res.json())
        .then(data => {
            setService(data);
    });
    // setSpinner(true)
    }, []);
    return (
        <section className='mt-5'>
            <h1 className='mb-5 text-center'>Our offers to clients</h1>
            <hr/>
            <div className='row'>
                {
                    service.map(serve => <ServiceDetails key={serve._id} serve={serve}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;