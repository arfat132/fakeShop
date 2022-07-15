import React from 'react';
import AddBanner from './AddBanner';
import AddBanners from './AddBanners';
import Carousel from './Carousel';
import Counter from './Counter';
import Info from './Info';
import Products from './Products';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <AddBanners></AddBanners>
            <Products></Products>
            <AddBanner></AddBanner>
            <Counter></Counter>
        </div>
    );
};

export default Home;
