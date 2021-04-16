import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <section className='row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <div className="add_product">
                    <h2>Booking List</h2>
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>a</td>
                                    <td>b</td>
                                    <td>c</td>
                                </tr>
                            </tbody>
                        </table>  
                        
                </div>
            </div>
        </section>
    );
};

export default OrderList;