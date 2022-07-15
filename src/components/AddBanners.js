import React from 'react';
import Banner1 from './Assests/Banner4.png';
import Banner2 from './Assests/Banner5.png';
import Banner3 from './Assests/Banner8.png';
const AddBanners = () => {
    return (
        <div className='container mb-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    <img className='img-fluid rounded mb-4 mb-lg-0' src={Banner2} alt="" srcset="" />
                    <img className='img-fluid rounded mb-4 mb-lg-0' src={Banner3} alt="" srcset="" />
                    <img className='img-fluid rounded mb-4 mb-lg-0' src={Banner1} alt="" srcset="" />
                </div>
            </div>
    );
};

export default AddBanners;