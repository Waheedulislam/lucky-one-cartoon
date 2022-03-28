import { useEffect, useState } from 'react';
import React from 'react';
import './Card.css'
import Product from '../Product/Product';

const Card = () => {

    const [carts, setCarts] = useState([]);
    const [cartoon, setCartoon] = useState([]);

    useEffect(() => {
        (fetch('data.json'))
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    const handleAddToClick = (cart) => {
        const newCartoon = [...cartoon, cart];
        setCartoon(newCartoon);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    carts.map(cart => <Product
                        key={cart.id}
                        cart={cart}
                        handleAddToClick={handleAddToClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Choose Cartoon</h3>
                <div>
                    {
                        cartoon.map(item => <h2 key={item.id}>{item.name}</h2>)
                    }
                </div>
                <button className='button-style'>CHOOSE 1 FOR ME</button>
                <br />
                <br />
                <button className='button-style'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Card;