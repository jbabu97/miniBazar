import React from 'react';
import DelBtn from '../../../photos/delete.png';
import EditBtn from '../../../photos/edit.png';
import './ManageList.css';

const ManageList = ({manage, handleDelete}) => {

    

    return (
        <div className='ml-5'>
            <div className='manage_list d-flex m-3 p-4 w-75'>
                <div>
                    <img style={{width: '200px'}} className='img-fluid' src={`data:image/png;base64,${manage.image.img}`} alt=""/>
                </div>
                <div className='mx-5 manage_info'>
                    <h3>{manage.newService.name}</h3>
                    <h2>{manage.newService.serviceCharge}</h2>
                </div>
                <div className='ml-5 manage_btn'>
                    <img src={EditBtn} alt="Edit"/>
                    <br/>
                    <img onClick={() => handleDelete(manage._id)} src={DelBtn} alt="Delete"/>
                </div>
            </div>
        </div>
    );
};

export default ManageList;