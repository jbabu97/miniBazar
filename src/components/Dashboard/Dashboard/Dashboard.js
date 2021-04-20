import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookList from '../BookingList/BookList';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import { BeatLoader } from 'react-spinners';

const Dashboard = () => {
    const [bookingByCustomer, setBookingByCustomer] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        fetch('https://whispering-bayou-36600.herokuapp.com/bookingByCustomer', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setBookingByCustomer(data);
        })
        setSpinner(true)
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
                        spinner ?
                        <div>
                            {
                                bookingByCustomer.length ? 
                                <BookList bookingByCustomer={bookingByCustomer}></BookList> :
                                <h4 className='text-center text-warning my-5'>You have no bookings</h4>
                            }
                        </div> :
                        <div className="spinner">
                            <BeatLoader size={30} color='#be2edd' loading/>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;