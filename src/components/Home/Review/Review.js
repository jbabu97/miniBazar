import React from 'react';
import './Review.css';
import ReviewImg from '../../../photos/review.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Review = () => {
    return (
        <section className='row mt-5 review_section'>
            <div className="col-md-6 review_img">
                {/* <img src={ReviewImg} alt=""/> */}
            </div>
            <div className="col-md-6 text-center review_content">
                <div className='px-4'>
                    <h1 className='mt-5'>Clients Quote</h1>
                    <hr/>
                    <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam deleniti blanditiis odio. Ad, temporibus? Lorem ipsum dolor sit amet.</p>
                    <div>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img style={{width: '100px'}} src={ReviewImg} alt="..." />
                            <h5 className='mb-5 mt-3'>Name</h5>
                            </div>
                            <div class="carousel-item">
                            <img style={{width: '100px'}} src={ReviewImg} alt="..." />
                            <h5 className='mb-5 mt-3'>Name</h5>
                            </div>
                            <div class="carousel-item">
                            <img style={{width: '100px'}} src={ReviewImg} alt="..."/>
                            <h5 className='mb-5' mt-3>Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;