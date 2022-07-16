import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';
import Spinner from './Shared/Spinner';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true)
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)
    }, [products])
    return (
        <>
            {loading ? <Spinner></Spinner> :
                (<div className='container'>
                    <div className='d-flex justify-content-between title'>
                        <h1 className='fs-4 fw-bold py-4'>Our Featured Poducts</h1>
                        <button onClick={() => navigate('/shop')} type="button" class="btn my-4">View All Collection</button>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                        {
                            products.slice(-5).map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>)}
        </>
    );
};

export default Products;