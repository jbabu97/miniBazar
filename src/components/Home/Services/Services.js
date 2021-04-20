import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';
import { BeatLoader } from 'react-spinners';




const Services = () => {
    const [service, setService] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => { 
        fetch(`https://whispering-bayou-36600.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => {
            setService(data);
    });
    setSpinner(true)
    }, []);
    
    return (
        <section className='container mt-5'>
            <h6 className='text-center'>Services</h6>
            <h1 className='mb-5 text-center'>Our offers to clients</h1>
            <hr/>
            {
                spinner ?
                <div className='row'>
                    {
                        service.map(serve => <ServiceDetails key={serve._id} serve={serve}></ServiceDetails>)
                    }   
                </div> :
                    <div className="spinner">
                    <BeatLoader size={30} color='#c9af7f' loading/>
                </div>
            }
        </section>
    );
};

export default Services;