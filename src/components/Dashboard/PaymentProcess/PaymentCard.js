import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';



const PaymentCard = ({handleBooking}) => {
    const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    
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
      handleBooking(paymentMethod.id);
    }
  };

    return (
        <div>
            <form className="border p-5 rounded bg-light mt-5" onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-success mt-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {paymentError && <p style={{color: 'red'}}>{paymentError}</p>}
            {paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>}
        </div>
    );
};

export default PaymentCard;