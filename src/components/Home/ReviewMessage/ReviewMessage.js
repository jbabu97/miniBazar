import React from 'react';

const ReviewMessage = ({review}) => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <p className='mb-5 mt-3'>{review.message}</p>
                            </div>
                        </div>
                        
                        {/* <div class="carousel-inner">
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
                        </div> */}
                    </div>
        </div>
    );
};

export default ReviewMessage;