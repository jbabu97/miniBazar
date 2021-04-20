import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});
    const { register, handleSubmit, errors } = useForm();
    

    const onSubmit = (data) => {
        const adminData = {
            email: data.email
        }
        
        fetch(`https://whispering-bayou-36600.herokuapp.com/addAdmin`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({adminData})
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                setAdmin(success);
                alert('Admin added successfully.');
            }
        })
                
    } 

    return (
        <section className='row'>
            <div className="col-md-3 p-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 dash_bg p-0">
                <div className="add_admin">
                    <h1 className='ml-5 my-5'>Add Admin</h1>
                    <h6 className='user_name'>{loggedInUser.name}</h6>
                        <form className="px-5 w-50" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            
                            <div className="form-group text-right">
                                <button type="submit" className="custom_btn">Add</button>
                            </div>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;