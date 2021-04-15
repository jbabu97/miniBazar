import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section className='header_container'>
            <Navbar></Navbar>
            <div className='header_content'>
                <div className='text-center text-white'>
                    <h1>Create your own style</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque, quidem quasi alias nam placeat.</p>
                </div>
            </div>
        </section>
    );
};

export default Header;