import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewImg from '../../../photos/review.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReviewMessage from '../ReviewMessage/ReviewMessage';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 
        fetch(`http://localhost:4747/reviews`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            console.log(data);
    });
    // setSpinner(true)
    }, []);
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
                    {
                        reviews.map(review => <ReviewMessage review={review}></ReviewMessage>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;