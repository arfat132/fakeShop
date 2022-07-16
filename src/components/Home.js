import React from 'react';
import AddBanner from './AddBanner';
import AddBanners from './AddBanners';
import Carousel from './Carousel';
import Counter from './Counter';
import Info from './Info';
import Products from './Products';
import Banner from './Assests/Banner12.png'
import Blogs from './Blogs';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Info></Info>
            <AddBanners></AddBanners>
            <Products></Products>
            <AddBanner></AddBanner>
            <Counter></Counter>
            <div className='container my-5'>
                <img className='img-fluid w-100' src={Banner} alt="" srcset="" />
            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;
