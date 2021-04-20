import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageList from '../ManageList/ManageList';
import Sidebar from '../Sidebar/Sidebar';
import { BeatLoader } from 'react-spinners';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [manageService, setManageService] = useState([]);
    
    const [deleteService, setDeleteService] = useState({});

    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4747/services`)
        .then(res => res.json())
        .then(data => {
            setManageService(data);
        });
        setSpinner(true);
      }, []);

      const handleDeleteService = (serviceId) => {
        
        fetch(`http://localhost:4747/deleteService/${serviceId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
                setDeleteService(data)
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
                        spinner ?
                        <div>
                        {
                            manageService.map(manage => <ManageList key={manage._id} manage={manage} handleDelete={handleDeleteService}></ManageList>)
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

export default ManageService;