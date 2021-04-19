import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const stripePromise = loadStripe('pk_test_51Ie1CSLxr8cq9zwUKY7gal5KMSdqkGv5rB2Kjy3CXabfrKoxCjyOeiUAGrLTuXzR9jDFGAWh515DFeER5DIAbWCk00uyc0VXfh'); 

const PaymentProcess = ({handleBooking}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard handleBooking={handleBooking}></PaymentCard>
        </Elements>
    );
};

export default PaymentProcess;