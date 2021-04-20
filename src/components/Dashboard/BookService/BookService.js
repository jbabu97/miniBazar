import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import Sidebar from '../Sidebar/Sidebar';
import './BookService.css';

const BookService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const {bookingId} = useParams();
    const [bookService, setBookService] = useState({});
    

    const handleBooking = (paymentId) => {
        
        const newBooking = {
            ...loggedInUser,
            bookingService: bookService, 
            paymentId,
            orderTime: new Date()
        };

        fetch('http://localhost:4747/addBooking', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({newBooking, email: loggedInUser.email})  
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                setBookService(success);
                alert('Thanks for booking service.');
                
            }
        })
    };


    useEffect(() => {
        fetch(`http://localhost:4747/serviceDetails/${bookingId}`)
        .then(res => res.json())
        .then(data => {
            setBookService(data);
        })
      }, [bookingId]);


    return (
        <section className='row dash_bg'>
            <div className="col-md-3 p-0">
                <Sidebar></Sidebar>
            </div>
            <div className=' p-0'>
                <h1 className='ml-5 my-3'>Book Now</h1>
                <div className='service_detail border p-4'>
                    <img className='img-fluid' src={`data:image/png;base64,${bookService.image?.img}`} alt=""/>
                    <h3 className='text-center my-2'>{bookService.newService?.name}</h3>
                    <h5>{bookService.newService?.serviceCharge}</h5> 
                    <PaymentProcess handleBooking={handleBooking}></PaymentProcess>
                </div>
            </div>
            
        </section>
    );
};

export default BookService; 