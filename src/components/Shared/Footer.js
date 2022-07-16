import React from 'react';
import logo from '../Assests/logo.png';
const Footer = () => {
    return (
        <div>
            <div class="subscribe pt-3">
                <div class="container">
                    <div class="d-lg-flex d-sm-block justify-content-between">
                        <div class="d-flex pt-2">
                            <input className='mb-lg-4 mb-0 me-3 p-2 subscripe-input rounded' type="text" placeholder="Your E-mail Address" />
                            <button type="button" class="btn btn-dark px-lg-5 px-1 text-light mb-lg-4 mb-0">Subscribe</button>
                        </div>
                        <div class="text-light py-3">
                            <h4 className='fs-5 fw-bold'>SUBSCRIBE TO OUR NEWSLETTER</h4>
                            <p className='mb-0'>Get all the latest information on Events, Sales and Offers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-5 bg-dark text-light">
                <div class="container">
                    <div class="">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                            <div class="col pe-5">
                                <div class="fs-2 fw-bold pb-2"><img src={logo} alt="" /></div>

                                <span className='contact'>Got Question? Call us 24/7</span>
                                <h3>1-600-570-3434</h3>
                                <p className='contact'>Register now to get updates on pronot get up icons & coupons ster now toon.</p>
                            </div>
                            <div class="col">
                                <h4 className='fs-5'>COMPANY</h4>
                                <ul class="list-inline list">
                                    <li>About Us</li>
                                    <li>Team Member</li>
                                    <li>Career</li>
                                    <li>Contact Us</li>
                                    <li>Affliate</li>
                                    <li>Order History</li>
                                </ul>
                            </div>
                            <div class="col">
                                <h4 className='fs-5'>MY ACCOUNT</h4>
                                <ul class="list-inline list">
                                    <li>About Us</li>
                                    <li>Team Member</li>
                                    <li>Career</li>
                                    <li>Contact Us</li>
                                    <li>Affliate</li>
                                    <li>Order History</li>
                                </ul>
                            </div>
                            <div class="col">
                                <h4 className='fs-5'>CUSTOMER SERVICE</h4>
                                <ul class="list-inline list">
                                    <li>Payment Methods</li>
                                    <li>Money-back guarantee!</li>
                                    <li>Product Returns</li>
                                    <li>Support Center</li>
                                    <li>Shipping</li>
                                    <li>Term and Condition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-3 bg-dark copyright ">
                <hr />
                <div class="container">
                    <div class="text-center">
                        <p>Copyright © 2022 FakeShop Store. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;