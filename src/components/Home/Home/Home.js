import React from 'react';
import About from '../About/About';
import FeatureWork from '../FeatureWork/FeatureWork';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Review></Review>
            <FeatureWork></FeatureWork>
            <Footer></Footer>
        </main>
    );
};

export default Home;