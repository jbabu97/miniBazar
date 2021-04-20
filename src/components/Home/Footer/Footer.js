import { faFacebookSquare, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../photos/sewing_logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer_section text-center'>
            <div className='footer_logo'>
                <Link to='/home'><img src={Logo} alt=""/></Link>
            </div>
            <div className='social'>
                <a href="#"><FontAwesomeIcon className="social_icon" icon={faFacebookSquare} /></a>
                <a href="#"><FontAwesomeIcon className="social_icon" icon={faTwitterSquare} /></a>
                <a href="#"><FontAwesomeIcon className="social_icon" icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon className="social_icon" icon={faInstagram} /></a>
            </div>
            <div className="copyright">
                <p>mama-sewing &copy; {(new Date()).getFullYear()} All right reserved</p>
            </div>
        </section>
    );
};

export default Footer;