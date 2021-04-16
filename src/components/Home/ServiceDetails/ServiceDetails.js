import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({serve}) => {
    return (
        <div className='col-md-4'>
            <div className='service_detail border p-4'>
                    <img className='img-fluid' src={`data:image/png;base64,${serve.image.img}`} alt=""/>
                    
                <h3 className='text-center my-3'>{serve.newService.name}</h3>
                <div className='d-flex'>
                    <h5>{serve.newService.serviceCharge}</h5>
                    <Link to={`/bookService/${serve._id}`} className='ml-auto'><button className='btn btn-success'>Book Service</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;