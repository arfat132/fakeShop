import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Shared/Spinner';

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data));
        setLoading(false)
    }, [id])
    const { title, category, image, price, description, rating } = productDetails;
    return (
        <>
            {loading ? <Spinner></Spinner> :
                (<div className='container my-5 mx-lg-5 mx-lg-auto'>
                    <div class="card w-75 mb-3 mx-auto">
                        <div class="row ">
                            <div class="col-md-5">
                                <img src={image} class="img-fluid p-5" alt="..." />
                            </div>
                            <div class="col-md-7">
                                <div class="card-body py-5">
                                    <h5 class="card-title fw-bold">{title}</h5>
                                    <p class="card-text my-2">{category}</p>
                                    <span class="card-text">{rating?.rate}</span>
                                    <span class="card-text">({rating?.count} Reviews)</span>
                                    <h3 className='fs-3 fw-bold mt-2'>${price}</h3>
                                    <p class="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </>
    );
};

export default ProductDetails;