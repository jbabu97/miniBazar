import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';
// import PaymentForm from '../PaymentForm/PaymentForm';

const stripePromise = loadStripe('pk_test_51Ie1CSLxr8cq9zwUKY7gal5KMSdqkGv5rB2Kjy3CXabfrKoxCjyOeiUAGrLTuXzR9jDFGAWh515DFeER5DIAbWCk00uyc0VXfh'); // default
// const stripePromise = loadStripe('sk_test_51Ie1CSLxr8cq9zwU2N98mYm94rEVue7kpjB3uhWxj1Vvk17Ruq9IjWRG26zJMLdXCtIvQccOVUSjfS6mG0Vn3dT700fzYtSclC');

const PaymentProcess = ({handleBooking}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard handleBooking={handleBooking}></PaymentCard>
            {/* <SimpleCardForm></SimpleCardForm> */}
        </Elements>
    );
};

export default PaymentProcess;