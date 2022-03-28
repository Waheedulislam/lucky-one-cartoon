import { useEffect, useState } from 'react';
import React from 'react';
import './Card.css'
import Product from '../Product/Product';

const Card = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        (fetch('data.json'))
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    carts.map(cart => <Product
                        key={cart.id}
                        cart={cart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Choose Cartoon</h3>
            </div>
        </div>
    );
};

export default Card;