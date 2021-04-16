import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const [admin, setAdmin] = useState({});
    const { register, handleSubmit, errors } = useForm();
    

    const onSubmit = (data) => {
        const adminData = {
            email: data.email
        }
        
        fetch(`http://localhost:4747/addAdmin`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                alert('Admin added successfully.')
            }
        })
                
    } 

    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="add_product">
                    <h2>Add Admin</h2>
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            

                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-info">Submit</button>
                            </div>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;