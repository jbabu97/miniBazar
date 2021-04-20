import React from 'react';
import './FeatureWork.css';
import featureImg1 from '../../../photos/work_1.jpg';
import featureImg2 from '../../../photos/work_2.jpeg';
import featureImg3 from '../../../photos/work_3.png';
import featureImg4 from '../../../photos/work_4.jpg';
import featureImg5 from '../../../photos/work_5.jpg';
import featureImg6 from '../../../photos/work_6.jpg';
import featureImg7 from '../../../photos/work_7.jpg';
import featureImg8 from '../../../photos/work_8.jpg';

const workData = [
    {
        featureImg: featureImg1
    },
    {
        featureImg: featureImg2
    },
    {
        featureImg: featureImg3
    },
    {
        featureImg: featureImg4
    },
    {
        featureImg: featureImg5
    },
    {
        featureImg: featureImg6
    },
    {
        featureImg: featureImg7
    },
    {
        featureImg: featureImg8
    },
]

const FeatureWork = () => {
    return (
        <section className='mt-5'>
            <div className='text-center'>
                <h1 className='mb-5'>Our Works</h1>
                <hr/>
                <p className='w-50 mx-auto my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum consequuntur qui dolore atque, quam reprehenderit magni enim!</p>
            </div>
            <div className="row">
                {
                    workData.map(work => (
                        <div className="gallery col-md-3 p-0">
                            <img className='img-fluid' src={work.featureImg} alt=''/>
                        </div>
                    ))
                }
            </div>
            
        </section>
    );
};

export default FeatureWork;