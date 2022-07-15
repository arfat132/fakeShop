import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div className='container'>
            <div className='d-flex justify-content-between title'>
            <h1 className='fs-4 fw-bold py-4'>Our Featured Poducts</h1>
            <button onClick={()=>navigate('/shop')} type="button" class="btn my-4">View All Collection</button>
            </div>
             {products?.length ?
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                                {
                                    products.slice(-5).map(product => <Product
                                        key={product.id}
                                        product={product}
                                    ></Product>)
                                }
                            </div>
                            :
                            <div><p className='text-center my-[232px]'>No Product Found</p></div>

                        }
        </div>
    );
};

export default Products;