import React from 'react';
import About from '../About/About';
import FeatureWork from '../FeatureWork/FeatureWork';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main className='container'>
            <Header></Header>
            <About></About>
            <Services></Services>
            <FeatureWork></FeatureWork>
            <Review></Review>
            <Footer></Footer>
        </main>
    );
};

export default Home;