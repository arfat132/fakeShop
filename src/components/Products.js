import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div className='container'>
            <div className='d-flex justify-content-between title'>
            <h1 className='fs-3 fw-bold py-4'>Our Featured Poducts</h1>
            <button type="button" class="btn my-4">View All Collection</button>
            </div>
             {products?.length ?
                            <div className="row">
                                {
                                    products.slice(-8).map(product => <Product
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