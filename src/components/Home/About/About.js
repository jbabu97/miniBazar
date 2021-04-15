import React from 'react';
import './About.css';
import before from '../../../photos/about_1.jpg';
import after from '../../../photos/about.jpg';

const About = () => {
    return (
        <section className='row about_us'>
            <div className='about_content col-md-6'>
                <div className='about_content_left'>
                    <h6>About us</h6>
                    <h1>Some Interesting Facts</h1>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis laboriosam minus nihil quia vel esse hic. Sapiente fugit libero incidunt nostrum quo numquam facilis.</p>
                </div>
            </div>
            <div className='col-md-6 about_right'>
                <img className='img-fluid' src={after} alt=""/>
            </div>
            
        </section>
    );
};

export default About;