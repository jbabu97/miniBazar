import React from 'react';

const Footer = () => {
    return (
        <section className='footer_section text-center'>
            <p>mama sewing &copy; {(new Date()).getFullYear()} All right reserved</p>
        </section>
    );
};

export default Footer;