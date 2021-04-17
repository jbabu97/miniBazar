import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import BookingForm from '../BookingForm/BookingForm';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const BookService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const [bookingData, setBookingData] = useState(null);

    const onSubmit = data => {
       
        setBookingData(data);
           
    };

    const handleBooking = (paymentId) => {
        const newBooking = {
            ...loggedInUser,
            bookingService: bookingData, 
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
                alert('Thanks for booking service.')
            }
        })
    }

    return (
        <section>
            <div className="row">
                <div style={{display: bookingData ? 'none' : 'block'}} className="col-md-6 bg-info">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text"  name="name" ref={register({ required: true })} placeholder="Your Name" value={loggedInUser.name} className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="email" ref={register({ required: true })} name="email" placeholder="Email" value={loggedInUser.email} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" placeholder="Service Name" className="form-control" />
                        {errors.serviceName && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className='form-group'>
                        <textarea name="message" id=""  placeholder="Message" className="form-control" cols="30" rows="5"></textarea>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
                    {/* <BookingForm ></BookingForm> */}
                    {/* <Link to={`/bookingForm`}><button onClick={handleBooking} className="btn btn-success order_btn">Submit</button></Link> */}
                </div>
                <div style={{display: bookingData ? 'block' : 'none'}} className="col-md-6 bg-warning">
                    <h2>Payment Here</h2>
                    <PaymentProcess handleBooking={handleBooking}></PaymentProcess>
                </div>
            </div>
        </section>
    );
};

export default BookService; 