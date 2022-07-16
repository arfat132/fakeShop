import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
    const { id, title, image, price, rating } = product;
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/productDetails/${id}`);
    }
    return (
        <div className='mb-4'>
            <div onClick={() => navigateToDetails(id)} class="card product-card rounded-0">
                <div className='bg-light'>
                    <img src={image} class="card-img-top p-5 img-fluid" alt="..." />
                </div>
                <div class="card-body text-center">
                    <h3 className='fs-6'>{title.slice(0, 20)}...</h3>
                    <div className='px-5 me-4'>
                    <span class="card-text w-25"><Rating value={rating?.rate}></Rating></span>
                    </div>
                    <span class="card-text w-100">({rating?.count} Reviews)</span>
                    <h3 className='fs-5 fw-bold mt-1'>${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Product;