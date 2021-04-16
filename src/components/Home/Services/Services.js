import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';



const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => { 
        fetch(`http://localhost:4747/services`)
        .then(res => res.json())
        .then(data => {
            setService(data);
            console.log(data);
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