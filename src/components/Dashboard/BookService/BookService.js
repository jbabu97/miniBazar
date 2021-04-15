import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import BookingForm from '../BookingForm/BookingForm';

const BookService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {serviceId} = useParams();
    console.log(serviceId);
    const [bookService, setBookService] = useState({});
    console.log(bookService);

    useEffect(() => {
        fetch(`http://localhost:5757/services/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            setBookService(data);
        })
      }, [serviceId]);
    
      const handleOrderPlace = () => {
        const newService = {...loggedInUser, ...bookService, orderTime: new Date()};
        fetch('https://immense-crag-85115.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    
      alert('Your order has been successfully done. Thank You.')
    }

    return (
        <section>
            <div className="row">
                <div className="col-md-3 bg-dark"></div>
                <div className="col-md-4 bg-info">
                    <div>
                        <div className='service_detail border p-4'>
                            <img className='img-fluid' src={bookService.img} alt=""/>
                            <h3 className='text-center my-3'>{bookService.serviceName}</h3>
                            <h5>Service Charge: {bookService.serviceCharge}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 bg-warning">
                    <BookingForm bookService={bookService}></BookingForm>
                </div>
            </div>
        </section>
    );
};

export default BookService; 