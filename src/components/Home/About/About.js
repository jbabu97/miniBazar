import React from 'react';
import './About.css';


const About = () => {
    return (
        <section id='about' className='row about_us'>
            <div className='about_content col-md-6 p-0'>
                <div className='about_left'>
                    <h6>About us</h6>
                    <h1>Some Interesting Facts</h1>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis laboriosam minus nihil quia vel esse hic. Sapiente fugit libero incidunt nostrum quo numquam facilis.</p>
                    <button className="custom_btn mt-5">Download PDF</button>
                </div>
            </div>
            <div className='col-md-6 about_right'>
                
            </div>
            
        </section>
    );
};

export default About;