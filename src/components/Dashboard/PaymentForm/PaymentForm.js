import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const PaymentForm = ({handlePayment, bookService}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors } = useForm();
    const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

    return (
        <div>
            <div>
            <form className="border p-5 rounded bg-light mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
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
                    </div>
                <CardElement />
                <button className="btn btn-success mt-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {paymentError && <p style={{color: 'red'}}>{paymentError}</p>}
            {paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>}
        </div>
        </div>
    );
};

export default PaymentForm;