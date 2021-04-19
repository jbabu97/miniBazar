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

    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 row">
                <div className="row">
                    {
                        bookings.map(booking => (
                            <div key={booking._id} className="col-md-4">
                                <div className='book_list'>
                                    <div className='d-flex'>
                                        <div className='booking_photo'>
                                            <img src={`data:image/png;base64,${booking.bookingService.image?.img}`} alt=""/>
                                        <div className="btn btn status_btn">status</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>{booking.bookingService.newService.name}</h4>
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