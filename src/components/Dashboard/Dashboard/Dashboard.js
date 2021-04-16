import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookService from '../BookService/BookService';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const [appointments, setAppointments] = useState([]);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const handleDateChange = date => {
    //     setSelectedDate(date);
    // }

    // useEffect(() => {
        
    //     fetch('http://localhost:5252/addAppointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'Content-Type' : 'application/json'},
    //         body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
    //     })
    //     .then(res => res.json())
    //     .then(data => setAppointments(data))
    // }, [selectedDate])

    return (
        <section className='dashboard'>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h6>Dashboard</h6>
                    <BookService></BookService>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;