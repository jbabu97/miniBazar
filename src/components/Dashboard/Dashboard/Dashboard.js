import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookList from '../BookingList/BookList';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    const [bookingByCustomer, setBookingByCustomer] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email);
    useEffect(() => {
        fetch('http://localhost:4747/bookingByCustomer', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookingByCustomer(data);
        })
    }, []);



    return (
        <section className='dashboard'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 dash_content">
                    <h1 className='ml-5 my-5'>Booking List</h1>
                    <h6 className='user_name'>{loggedInUser.name}</h6>
                    {
                        bookingByCustomer.length ? 
                        <BookList bookingByCustomer={bookingByCustomer}></BookList> :
                        <h4 className='text-center text-warning my-5'>You have no bookings</h4>
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;