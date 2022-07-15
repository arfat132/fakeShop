import React from 'react';
import Banner1 from './Assests/Banner9.png';
import Banner2 from './Assests/Banner10.png';
import Banner3 from './Assests/Banner11.png';
const AddBanner = () => {
    return (
        <div className='container my-5'>
            <div className='row row-cols-1 row-cols-lg-2'>
                <div className='col'>
                    <img className='img-fluid mb-4 rounded' src={Banner2} alt="" srcset="" />
                    <img className='img-fluid mb-4 mb-lg-0 rounded' src={Banner3} alt="" srcset="" />
                </div>
                <div className='col'>
                    <img className='img-fluid mb-4 mb-lg-0 rounded' src={Banner1} alt="" srcset="" />
                </div>
            </div>
        </div>

    );
};

export default AddBanner;