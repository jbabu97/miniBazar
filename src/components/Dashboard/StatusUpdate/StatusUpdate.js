import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const StatusUpdate = () => {

    const {bookingId} = useParams();

    const [update, setUpdate] = useState({});

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
    }

    useEffect(() => {

        fetch(`http://localhost:4747/update/${bookingId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUpdate(data)
        })

    }, [])

    return (
        <div>
            <h2>Status Update</h2>
            <h3>{update.newBooking?.bookingService.newService}</h3>
            <select className='custom_btn' onChange={handleChange} name="status" id="">
                <option value="Pending">Pending</option>
                <option value="On Going">On Going</option>
                <option value="Done">Done</option>
            </select>
        </div>
    );
};

export default StatusUpdate;