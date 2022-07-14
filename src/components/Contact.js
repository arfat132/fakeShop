import React from 'react';

const Contact = () => {
    return (
        <div className='container bg-light'>
            <h1 className='text-center fs-3 fw-bold my-4'>Contact With Us</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 border shadow-sm pt-4 px-4">
                <div>
                    <h2 className="fs-5">Email</h2>
                    <p>fakeshop_official@email.com</p>
                    <p className="lh-1">fakeshop123@email.com</p>
                </div>
                <div>
                    <h2 className="fs-5">Phone</h2>
                    <p>123-456-7890</p>
                    <p className="lh-1">123-456-7890</p>
                </div>
                <div>
                    <h2 className="fs-5">ADDRESS</h2>
                    <p className="mt-1">No: 58 A, East Madison Street,
                        Baltimore, MD, California, USA 4508</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mb-5 mt-1 g-5">
                <div className="">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                </div>
                <div className="border p-5 shadow-sm">
                    <h2 className="">Feedback</h2>
                    <p >Send your Feedback</p>
                    <div className='mb-4'>
                        <label for="name" className="d-block mb-1">Name</label>
                        <input type="text" id="name" name="name" className="w-100 py-1" />
                    </div>
                    <div className='mb-4'>
                        <label for="email" className="d-block mb-1">Email</label>
                        <input type="email" id="email" name="email" className="w-100 py-1" />
                    </div>
                    <div className='mb-4'>
                        <label for="message" className="d-block mb-1">Message</label>
                        <textarea id="message" name="message" className="w-100 py-2"></textarea>
                    </div>
                    <button className="w-100 py-2 contact-btn">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;