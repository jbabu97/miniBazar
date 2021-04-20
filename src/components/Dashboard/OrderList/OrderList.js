import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4747/bookings`)
        .then(res => res.json())
        .then(data => {
            setBookings(data);
    })
    }, []);


    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className='ml-5'>
                    <h1 className='my-5'>All Bookings</h1>
                    <h6 className='user_name'>{loggedInUser.name}</h6>
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Payment Id</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            {
                                bookings.map((booking, index) => (
                                    <tr key={booking._id}>
                                        <th >{index + 1}</th>
                                        <td>{booking.newBooking?.name}</td>
                                        <td>{booking.newBooking?.email}</td>
                                        <td>{booking.newBooking?.bookingService.newService?.name}</td>
                                        <td>{booking.newBooking?.paymentId}</td>
                                        <td>
                                            <button className='btn'>Pending</button>                                            
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>  
                        
                </div>
            </div>
        </section>
    );
};

export default OrderBooking;