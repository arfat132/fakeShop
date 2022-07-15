import React, { useEffect, useState } from 'react';
import Product from './Product';
import Banner1 from './Assests/Banner6.png';
import Banner2 from './Assests/banner7.png';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div className='container py-5'>
            <div class="row row-cols-1 row-cols-lg-2 mb-5">
                <img className='rounded img-fluid' src={Banner1} alt="" srcset="" />
                <img className='rounded img-fluid' src={Banner2} alt="" srcset="" />
            </div>
            {products?.length ?
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
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