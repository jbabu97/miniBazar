import React, { useContext, useEffect, useState } from 'react';
import { faCalendar, faCartPlus, faCog, faFilePrescription, faHome, faSignOutAlt, faTh, faThList, faUserCog, faUserMd, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';
import Logo from '../../../photos/sewing_logo2.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4747/isAdmin`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, []);
    
    return (
        <aside>
            <div className='text-white text-center p-5'>
                <Link to='/home'><img src={Logo} alt=""/></Link>
            </div>
            <ul>
                {/* {
                    isAdmin ?                 */}
                    <div>
                        <Link to='/orderList' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faThList} ></FontAwesomeIcon> Order List</li>
                        </Link>
                        <Link to='/addAdmin' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faUserPlus} ></FontAwesomeIcon> Make Admin</li>
                        </Link>
                        
                        <Link to='/addService' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faUserMd} ></FontAwesomeIcon> Add Service</li>
                        </Link>
                        <Link to='/manageService' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faCog} ></FontAwesomeIcon> Manage Service</li>
                        </Link>
                    </div> 
                
                    <div>
                        <Link to='/dashboard' style={{textDecoration: 'none'}}>
                        <li><FontAwesomeIcon className="aside_icon" icon={faCartPlus} ></FontAwesomeIcon> Booking</li>
                        </Link>
                        <Link to='/bookingList' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faThList} ></FontAwesomeIcon> Booking List</li>
                        </Link>
                        <Link to='/addReview' style={{textDecoration: 'none'}}>
                            <li><FontAwesomeIcon className="aside_icon" icon={faFilePrescription} ></FontAwesomeIcon> Add Review</li>
                        </Link>

                    </div>
                
                <Link to='/home' style={{textDecoration: 'none'}}>
                    <li><FontAwesomeIcon className="aside_icon" icon={faHome} ></FontAwesomeIcon> Home</li>
                </Link>
            </ul>
            <button onClick={() => setLoggedInUser({})} className="logout"><FontAwesomeIcon className="aside_icon" icon={faSignOutAlt} ></FontAwesomeIcon> Log Out</button>
        </aside>
    );

};

export default Sidebar;

