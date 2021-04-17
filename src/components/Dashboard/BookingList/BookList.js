import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './BookList.css';

const BookList = () => {
    const [bookings, setBookings] = useState([]);
    console.log(bookings);

    useEffect(() => {
        fetch(`http://localhost:4747/bookings`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookings(data);
    })
    }, []);

    // const bookingStatus = document.getElementById('status').innerText;
    // const showingStatus = document.getElementById('booking_status');
    // showingStatus.innerText = bookingStatus;

    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 row">
                <div className="row">
                    {
                        bookings.map(booking => (
                            <div className="col-md-4">
                                <div className='book_list'>
                                    <div id='booking_status' className="btn btn">status</div>
                                    <div key={booking._id}>
                                        <h4>{booking.bookingService.serviceName}</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi vitae earum saepe illo soluta fugiat?</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BookList;