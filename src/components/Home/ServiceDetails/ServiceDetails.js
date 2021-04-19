import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({serve}) => {
    
    return (
        <div className='col-md-4 mt-3'>
            <div className='border service_details'>
                <div className='service_photo'>
                    <img className='img-fluid' src={`data:image/png;base64,${serve.image.img}`} alt=""/>
                    <h3 className='text-center my-3'>{serve.newService.name}</h3>
                </div>
                <div className='booking_btn'>
                    <Link to={`/bookService/${serve._id}`} className='ml-auto'><button className='btn btn-success'>Book Service</button></Link>
                </div>                       
                {/* <h3 className='text-center my-3'>{serve.newService.name}</h3>
                <div className='d-flex p-2'>
                    <h5>{serve.newService.serviceCharge}</h5>
                    <Link to={`/bookService/${serve._id}`} className='ml-auto'><button className='btn btn-success'>Book Service</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceDetails;