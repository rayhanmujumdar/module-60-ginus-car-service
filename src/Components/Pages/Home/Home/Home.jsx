import React from 'react';
import Banner from '../Banner.jsx/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;