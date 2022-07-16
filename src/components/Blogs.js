import React from 'react';

const Blogs = () => {
    return (
        <div className='container mb-5'>
            <h1 className='fs-4 fw-bold py-4'>Read Our Blogs</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-472.jpg?t=st=1657956162~exp=1657956762~hmac=861a76ff78c7ebf11fc02b984746a5a9993e4a70b22acfc2e4e9f8315e76a1ab&w=996" class="card-img-top" alt="..." />
                        <div class="card-footer">
                            <small class="text-muted">By <span className='fw-bold'>Jemmy Doe</span> - 12.07.2022</small>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Women's Accessories</h5>
                            <p class="card-text">The type of accessory that an individual chooses to wear or carry to complement their outfit can be determined by several factors, including.....</p>
                        </div>
                        <button type="button" className='d-flex btn mb-3 fw-bold read-more-btn'>Read more <svg className='ms-2 mt-2' width={'10px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg></button>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://img.freepik.com/free-photo/young-woman-happy-red-french-beret_1303-31314.jpg?t=st=1657956162~exp=1657956762~hmac=9ecd54f08153f91817c43ddbcf828230a480d6ce4023e93a12c99dafba0035cc&w=996" class="card-img-top" alt="..." />
                        <div class="card-footer">
                            <small class="text-muted">By <span className='fw-bold'>Kristiana Jordan</span> - 01.06.2022</small>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Women's Winter Fashion</h5>
                            <p class="card-text">No matter the style of coat you pick, coats are chic, warm, and fashionable! A great way to transition from Fall to Winter is dressing up your button shirts...</p>
                        </div>
                        <button type="button" className='d-flex btn mb-3 fw-bold read-more-btn'>Read more <svg className='ms-2 mt-2' width={'10px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg></button>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://img.freepik.com/free-photo/lovely-couple-looking-each-other-with-crossed-hands-while-smiling_176420-15648.jpg?t=st=1657957455~exp=1657958055~hmac=b6e1b8ad19ac372a7f83231d8d2ba01e628fdbbe0e5e1e0b16a9ce625f4816cf&w=996" class="card-img-top" alt="..." />
                        <div class="card-footer">
                            <small class="text-muted">By <span className='fw-bold'>Beinjim Trembly</span> - 01.05.2022</small>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Men's and Women's Suits</h5>
                            <p class="card-text">Men have typically been wearing suits much longer than women because it was a staple of the corporate "culture" wardrobe. Women's fashion, however,....</p>
                        </div>
                        <button type="button" className='d-flex mb-3 fw-bold ms-2 read-more-btn'>Read more <svg className='ms-2 mt-2' width={'10px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;