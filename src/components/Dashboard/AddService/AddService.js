import React, { useState } from 'react';
import serviceImg1 from '../../../photos/service_1.jpg';
import serviceImg2 from '../../../photos/service_2.jpg';
import serviceImg3 from '../../../photos/service_3.jpg';

const serviceData = [
    {
        img: serviceImg1,
        serviceName: 'shortening',
        serviceCharge: '$ 50'
    },
    {
        img: serviceImg2,
        serviceName: 'shortening',
        serviceCharge: '$ 50'
    },
    {
        img: serviceImg3,
        serviceName: 'shortening',
        serviceCharge: '$ 50'
    }
]

const AddService = () => {
    const [addService, setAddService] = useState();

    const handleAddProduct = () => {
        fetch(`http://localhost:5757/addService`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(serviceData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
        }

    return (
        <section>
            <button onClick={handleAddProduct} className="btn btn-success">Add Service</button>
        </section>
    );
};

export default AddService;