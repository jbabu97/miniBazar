import React, { useEffect, useState } from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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
        <section className='container mt-5 review_section'>
            
                <div className='px-4 text-center'>
                    <div>
                        <h6>testimonials</h6>
                        <h1 className='mb-5'>Clients Quote</h1>
                        <hr/>
                        <p className='w-50 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam deleniti blanditiis odio. Ad, temporibus? Lorem ipsum dolor sit amet.</p>
                    <div className='my-5'>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    </div>
                   <div className="row">
                        {
                            reviews.map(review => <ReviewMessage review={review}></ReviewMessage>)
                        }
                   </div>
                </div>
            
        </section>
    );
};

export default Review;