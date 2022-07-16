import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const Counter = () => {
    return (
        <div className="container my-5">
            <h1 className='fs-4 fw-bold py-4'>Our Business Summery</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-5">
                <div >
                    <div className="border shadow-sm text-center pt-4 pb-2">
                        <FontAwesomeIcon className='fs-3 icon' icon={faUsers} />
                        <h2 className="fs-4 fw-bold my-1"><CountUp end={542} />+</h2>
                        <p className="">Happy People</p>
                    </div>
                </div>
                <div >
                    <div className="border shadow-sm text-center pt-4 pb-2">
                        <FontAwesomeIcon className='fs-3 icon' icon={faComments} />
                        <h2 className="fs-4 fw-bold my-1"><CountUp end={542} />+</h2>
                        <p className="">Reviews</p>
                    </div>
                </div>
                <div>
                    <div className="border shadow-sm text-center pt-4 pb-2">
                        <svg width={'30px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z" /></svg>
                        <h2 className="fs-4 fw-bold my-1"><CountUp end={242} />+</h2>
                        <p className="">Revenue</p>
                    </div>
                </div>
                <div>
                    <div className="border shadow-sm text-center pt-4 pb-2">
                        <svg width={'30px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M541.2 448C542.1 453 544.1 458.4 544.1 464C544.1 490.5 522.6 512 496 512C469.5 512 448.1 490.5 448.1 464C448.1 458.4 449.2 453 450.1 448H253.1C254.9 453 256 458.4 256 464C256 490.5 234.5 512 208 512C181.5 512 160 490.5 160 464C160 458.4 161.1 453 162.9 448L96 448C78.4 448 64 433.6 64 416V80C64 71.16 56.84 64 48 64H32C14.4 64 0 49.6 0 32C0 14.4 14.4 0 32 0H64C99.2 0 128 28.8 128 64V384H608C625.6 384 640 398.4 640 416C640 433.6 625.6 448 608 448L541.2 448zM432 0C458.5 0 480 21.5 480 48V320H288V48C288 21.5 309.5 0 336 0H432zM336 96H432V48H336V96zM256 320H224C206.4 320 192 305.6 192 288V128C192 110.4 206.4 96 224 96H256V320zM576 128V288C576 305.6 561.6 320 544 320H512V96H544C561.6 96 576 110.4 576 128z" /></svg>
                        <h2 className="fs-4 fw-bold my-1"><CountUp end={200} />+</h2>
                        <p className="">Products</p>
                    </div>
                </div>
                <div>
                    <div className="border shadow-sm text-center pt-4 pb-2">
                        <FontAwesomeIcon className='fs-3' icon={faAward} />
                        <h2 className="fs-4 fw-bold my-1"><CountUp end={7} />+</h2>
                        <p className="">Awards</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Counter;