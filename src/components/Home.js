import React from 'react';
import Carousel from './Carousel';
import Info from './Info';
import Products from './Products';
import Counter from './Shared/Counter';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <Products></Products>
            <Counter></Counter>
        </div>
    );
};

export default Home;
