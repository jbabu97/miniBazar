import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);
    console.log(addService);

    const handleBlur = (e) => {
        const newService = {...addService};
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', addService.name);
        formData.append('serviceCharge', addService.serviceCharge);
        console.log(formData);
      
        fetch(`https://whispering-bayou-36600.herokuapp.com/addService`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          setAddService(data)
          console.log(data);
          alert('Service added')
        })
        .catch(error => {
            const errorMessage = error.message;
            setAddService(errorMessage);
        })
      };
      

    return (
        <section className='row'>
            <div className="col-md-3 p-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 dash_bg p-0">
                <h1 className='ml-5 my-5'>Add Service</h1>
                <h6 className='user_name'>{loggedInUser.name}</h6>
            <form onSubmit={handleSubmit} className='mx-5 w-75'>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input onBlur={handleBlur} name='name' type="text" class="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <label for="serviceCharge">Service Charge</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="serviceCharge" name="serviceCharge" placeholder="Service Charge"/>
                        </div>
                        <div class="form-group">
                            <label for="file">Upload Photo</label>
                            <br/>
                            <input onChange={handleFileChange} name='file' type="file" id="file" />
                        </div>
                        <button type="submit" class="custom_btn">Add Service</button>
                    </form>
            </div>
        </section>
    );
};

export default AddService;