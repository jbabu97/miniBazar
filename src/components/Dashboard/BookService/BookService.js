import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { useParams } from 'react-router';
import './BookService.css';

const BookService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const {serviceId} = useParams();
    console.log(serviceId);
    const [bookService, setBookService] = useState({});
    console.log(bookService);
    

    const handleBooking = (paymentId, data) => {
        const newBooking = {
            ...loggedInUser,
            bookingService: bookService, 
            paymentId,
            orderTime: new Date()
        };

        fetch('http://localhost:4747/addBooking', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                setBookService(success);
                alert('Thanks for booking service.')
                
            }
        })
    };


    useEffect(() => {
        fetch(`http://localhost:4747/serviceDetails/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            setBookService(data);
            console.log(data);
        })
      }, [serviceId]);


    return (
        <section className='row'>
            <div>
                <div className='service_detail border p-4 bg-info'>
                    <img className='img-fluid' src={`data:image/png;base64,${bookService.image?.img}`} alt=""/>
                    <h3 className='text-center my-3'>{bookService.newService?.name}</h3>
                    <h5>Service Charge: {bookService.newService?.serviceCharge}</h5> 
                    <PaymentProcess handleBooking={handleBooking}></PaymentProcess>
                </div>
            </div>
            
        </section>
    );
};

export default BookService; 