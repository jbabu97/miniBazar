import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageList from '../ManageList/ManageList';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [manageService, setManageService] = useState([]);
    console.log(manageService);
    const [deleteService, setDeleteService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4747/services`)
        .then(res => res.json())
        .then(data => {
            setManageService(data);
        })
      }, []);

      const handleDeleteService = (serviceId) => {
        console.log("deleted");
        fetch(`http://localhost:4747/deleteService/${serviceId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
                setDeleteService(data)
                console.log("deleted clicked", data);
                alert('Service has been removed.')
          });
      };
    
    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div>
                    <h1 className='ml-5 my-5'>Manage Services</h1>
                    <h6 className='user_name'>{loggedInUser.name}</h6>
                    {
                        manageService.map(manage => <ManageList key={manage._id} manage={manage} handleDelete={handleDeleteService}></ManageList>)
                    }
                        
                </div>
            </div>
        </section>
    );
};

export default ManageService;