import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BookingPreview.css';


const BookingPreview = () => {
    
    const {serviceId} = useParams();
    console.log(serviceId);
    const [bookService, setBookService] = useState({});
    console.log(bookService);

    useEffect(() => {
        fetch(`http://localhost:4747/services/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            setBookService(data);
            console.log(data);
        })
      }, [serviceId]);

    return (
        <div>
            <div className='service_detail border p-4'>
                <img className='img-fluid' src={`data:image/png;base64,${bookService.image.img}`} alt=""/>
                <h3 className='text-center my-3'>{bookService.newService.name}</h3>
                <h5>Service Charge: {bookService.newService.serviceCharge}</h5>
                <Link to='/dashboard'><button className="btn btn-success">Book Now</button></Link>
            </div>
        </div>
    );
};

export default BookingPreview;