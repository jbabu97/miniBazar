import React, { useEffect, useState } from 'react';
import ManageList from '../ManageList/ManageList';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [manageService, setManageService] = useState([]);
    console.log(manageService);

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
          .then((result) => {
            console.log("deleted clicked", result);
          });
      };
    
    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div>
                    <h2>Manage Services</h2>
                    {
                        manageService.map(manage => <ManageList key={manage._id} manage={manage} handleDelete={handleDeleteService}></ManageList>)
                    }
                        
                </div>
            </div>
        </section>
    );
};

export default ManageService;