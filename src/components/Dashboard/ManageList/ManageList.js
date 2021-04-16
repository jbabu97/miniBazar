import React from 'react';
import DelBtn from '../../../photos/delete.png';
import EditBtn from '../../../photos/edit.png';

const ManageList = ({manage}) => {
    return (
        <div className='manage_list ml-5'>
            <div className='d-flex m-3 p-4 border w-75'>
                <div>
                    <img style={{width: '200px'}} className='img-fluid' src={`data:image/png;base64,${manage.image.img}`} alt=""/>
                </div>
                <div className='mx-5'>
                    <h3>{manage.newService.name}</h3>
                    <h2>{manage.newService.serviceCharge}</h2>
                </div>
                <div className='ml-5'>
                    <button type="button" class="btn btn-outline-primary"><img src={EditBtn} alt=""/></button>
                    <br/>
                    <button type="button" class="btn btn-outline-primary"><img src={DelBtn} alt=""/></button>
                </div>
            </div>
        </div>
    );
};

export default ManageList;