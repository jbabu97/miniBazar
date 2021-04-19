import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderBooking = () => {

    const [bookings, setBookings] = useState([]);
    console.log(bookings);

    const [status, setStatus] = useState('');
    console.log(status);

    useEffect(() => {
        fetch(`http://localhost:4747/bookings`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookings(data);
    })
    }, []);

    const handleStatus = () => {


    // useEffect(() => {
        
        fetch('http://localhost:4747/status', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(result => {
            setStatus(result)
            console.log(result);
        })
    // }, [])
}


    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="add_product">
                    <h2>Booking booking</h2>
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
                                        <td>{booking.bookingService?.name}</td>
                                        <td></td>
                                        <td>{booking.bookingService.newService?.name}</td>
                                        <td>{booking.paymentId}</td>
                                        <td>
                                            <button onClick={handleStatus} className='btn'>Pending</button>
                                            {/* <select id='status' name="status">
                                                <option style={{color: 'red'}} value="pending">Pending</option>
                                                <option style={{color: 'orange'}} value="onGoing">On Going</option>
                                                <option style={{color: 'green'}} value="done">Done</option>
                                            </select> */}
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