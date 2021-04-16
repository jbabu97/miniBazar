import React, { useState } from 'react';
import serviceImg1 from '../../../photos/service_1.jpg';
import serviceImg2 from '../../../photos/service_2.jpg';
import serviceImg3 from '../../../photos/service_3.jpg';
import Sidebar from '../Sidebar/Sidebar';

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
    const [addService, setAddService] = useState({});
    // const [doctorInfo, setDoctorInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newService = {...addService};
        newService[e.target.name] = e.target.value;
        setAddService(newService);
        console.log(newService);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', addService.name);
        formData.append('serviceCharge', addService.serviceCharge);
      
        fetch(`http://localhost:4747/addService`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          setAddService(data)
          console.log(data)
        })
        .catch(error => {
            const errorMessage = error.message;
            setAddService(errorMessage);
            console.log(errorMessage);
        })
      }
      

    // const handleAddProduct = () => {
    //     fetch(`http://localhost:5757/addService`, {
    //             method: 'POST',
    //             headers: { 'Content-Type' : 'application/json' },
    //             body: JSON.stringify(serviceData)
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     }

    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <form onSubmit={handleSubmit} className='mx-4 w-75'>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input onBlur={handleBlur} name='name' type="text" class="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <label for="serviceCharge">Service Charge</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="serviceCharge" name="serviceCharge" placeholder="Service Charge"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="file">Upload Photo</label>
                            <br/>
                            <input onChange={handleFileChange} name='file' type="file" id="file" />
                        </div>
                        <button type="submit" class="btn btn-info">Add Service</button>
                    </form>
            </div>
        </section>
    );
};

export default AddService;