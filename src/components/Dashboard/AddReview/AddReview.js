import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const { register, handleSubmit, errors } = useForm();
    

    const onSubmit = (data) => {
        const reviewData = {
            ...loggedInUser,
            name: data.name,
            email: data.email,
            designation: data.designation,
            company: data.company,
            message: data.message
        }
        
        fetch(`http://localhost:4747/addReview`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(reviewData)
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
                    <h2>Add Review</h2>
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="name" placeholder="Name" className="form-control" value={loggedInUser.name} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="email" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" value={loggedInUser.email} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="designation" placeholder="Designation" className="form-control"/>
                                {errors.designation && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="company" placeholder="Company" className="form-control" />
                                {errors.company && <span className="text-danger">This field is required</span>}
                            </div>
                            <div>
                                <textarea ref={register({ required: true })} name="message" id="" cols="30" rows="7" className="form-control" maxlength="100" ></textarea>
                                {errors.message && <span className="text-danger">This field is required</span>}
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

export default AddReview;