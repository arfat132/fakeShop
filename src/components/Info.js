import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Info = () => {
    return (
        <div className='m-5 border py-5 shadow-sm'>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                        <div class="fs-2 pe-3">
                        <FontAwesomeIcon icon={faComments} />
                        </div>
                        <div class="">
                            <h3 className='fs-5 fw-bold'>Customer Support</h3>
                            <span>Call or e-mail us 24/7</span>
                        </div>
                       </div>
                    </div>
                    <div class="col">
                        <div className='d-flex'>
                        <div class="fs-2 pe-3">
                        <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <div>
                            <h3 className='fs-5 fw-bold'>Free Shipping & Returns</h3>
                            <span>For all orders over $99</span>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='d-flex'>
                        <div class="fs-2 pe-3">
                        <FontAwesomeIcon icon={faKey} />
                        </div>
                        <div>
                            <h3 className='fs-5 fw-bold'>Secure Payment</h3>
                            <span>We ensure secure payment</span>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='d-flex'>
                        <div class="fs-2 pe-3">
                        <FontAwesomeIcon icon={faCoins} />
                        </div>
                        <div>
                            <h3 className='fs-5 fw-bold'>Money Back Guarantee</h3>
                            <span>Any back within 15 days</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;