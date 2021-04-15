import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import PaymentForm from '../PaymentForm/PaymentForm';


const stripePromise = loadStripe('pk_test_51Ie1CSLxr8cq9zwUKY7gal5KMSdqkGv5rB2Kjy3CXabfrKoxCjyOeiUAGrLTuXzR9jDFGAWh515DFeER5DIAbWCk00uyc0VXfh');

const BookingForm = ({bookService}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const handlePayment = data => {
        data.created = new Date().toLocalDateString(); 
        console.log(data.service);
        
        fetch(`http://localhost:5252/addAppointment`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                alert('Thanks for booking an appointment.')
            }
        })
                
    }

    return (
        <div>
            <form className="p-5" onSubmit={handleSubmit(handlePayment)}>
                    {/* <div className="form-group">
                        <input type="text"  name="name" ref={register({ required: true })} placeholder="Your Name" value={loggedInUser.name} className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" value={loggedInUser.email} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="serviceName" placeholder="Service Name" value={bookService.serviceName} className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div> */}

                    <div>
                        <Elements stripe={stripePromise}>
                            <PaymentForm handlePayment={handlePayment} bookService={bookService}></PaymentForm>
                        </Elements>
                    </div>

                    {/* <div className="form-group text-right">
                        <button type="submit" className="btn btn-info">Submit</button>
                    </div> */}
                </form>
        </div>
    );
};

export default BookingForm;