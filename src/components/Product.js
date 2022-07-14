import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, image, price, rating } = product;
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/productDetails/${id}`);
    }
    return (
        <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <div onClick={() => navigateToDetails(id)} class="card product-card">
                <div className='bg-light'>
                <img src={image} class="card-img-top p-5" alt="..." />
               </div>
                <div class="card-body text-center">
                    <h3 className='fs-6'>{title}</h3>
                    <span class="card-text">{rating.rate}</span>
                    <span class="card-text">({rating.count} Reviews)</span>
                    <h3 className='fs-5 fw-bold'>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Product;