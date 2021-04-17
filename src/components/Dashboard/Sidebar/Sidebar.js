import React, { useContext, useEffect, useState } from 'react';
import { faCalendar, faCog, faFilePrescription, faHome, faSignOutAlt, faTh, faUserMd, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';
import Logo from '../../../photos/sewing_logo2.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     fetch(`http://localhost:5252/isDoctor`, {
    //         method: 'POST',
    //         headers: { 'Content-Type' : 'application/json'},
    //         body: JSON.stringify({email: loggedInUser.email})
    //     })
    //     .then(res => res.json())
    //     .then(data => setIsAdmin(data))
    // }, []);
    
    return (
        <aside>
            <div className='text-white text-center p-5'>
                <Link to='/home'><img src={Logo} alt=""/></Link>
            </div>
            <ul>
                <Link to='/dashboard' style={{textDecoration: 'none'}}>
                <li><FontAwesomeIcon className="aside_icon" icon={faTh} ></FontAwesomeIcon> Book</li>
                </Link>
                {/* {
                    isAdmin &&  */}
                    <div>
                        <Link to='/bookingList' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faCalendar} ></FontAwesomeIcon> Booking List</li>
                        </Link>
                        <Link to='/orderList' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faCalendar} ></FontAwesomeIcon> Order List</li>
                        </Link>
                        <Link to='/addAdmin' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faUsers} ></FontAwesomeIcon> Make Admin</li>
                        </Link>
                        <Link to='/addReview' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faFilePrescription} ></FontAwesomeIcon> Add Review</li>
                        </Link>
                        <Link to='/addService' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faUserMd} ></FontAwesomeIcon> Add Service</li>
                        </Link>
                        <Link to='/manageService' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faCog} ></FontAwesomeIcon> Manage Service</li>
                        </Link>
                    </div>
                {/* } */}
                <Link to='/home' style={{textDecoration: 'none'}}>
                    <li><FontAwesomeIcon className="aside_icon" icon={faHome} ></FontAwesomeIcon> Home</li>
                </Link>
            </ul>
            <button onClick={() => setLoggedInUser({})} className="logout"><FontAwesomeIcon className="aside_icon" icon={faSignOutAlt} ></FontAwesomeIcon> Log Out</button>
        </aside>
    );


    <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


};

export default Sidebar;

