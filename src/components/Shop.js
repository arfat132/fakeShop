import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div className='container py-5'>
            {products?.length ?
                <div className="row">
                    {
                        products.map(product => <Product
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

export default Shop;