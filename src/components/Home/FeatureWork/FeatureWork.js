import React from 'react';
import featureImg1 from '../../../photos/work_1.jpg';
import featureImg2 from '../../../photos/work_2.jpeg';
import featureImg3 from '../../../photos/work_3.png';

const workData = [
    {
        featureImg: featureImg1
    },
    {
        featureImg: featureImg2
    },
    {
        featureImg: featureImg3
    }
]

const FeatureWork = () => {
    return (
        <section className='my-5'>
            <div>
                <h1>Our Works</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum consequuntur qui dolore atque, quam reprehenderit ut incidunt reiciendis magni enim!</p>
            </div>
            <div className="row">
                {
                    workData.map(work => (
                        <div className="col-md-4">
                            <img className='img-fluid' src={work.featureImg}/>
                        </div>
                    ))
                }
            </div>
            
        </section>
    );
};

export default FeatureWork;