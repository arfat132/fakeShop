import React from 'react';
import Carousel from './Carousel';
import Info from './Info';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <Products></Products>
        </div>
    );
};

export default Home;
