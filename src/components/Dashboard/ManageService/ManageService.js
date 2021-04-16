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
    
    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div>
                    <h2>Manage Services</h2>
                    {
                        manageService.map(manage => <ManageList key={manage._id} manage={manage}></ManageList>)
                    }
                        
                </div>
            </div>
        </section>
    );
};

export default ManageService;