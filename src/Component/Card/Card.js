import { useEffect, useState } from 'react';
import React from 'react';
import './Card.css'
import Product from '../Product/Product';

const Card = () => {

    const [carts, setCarts] = useState([]);
    const [cartoon, setCartoon] = useState([]);
    const [random, setRandom] = useState({});


    const clearCarts = () => {
        setCartoon([]);
        setRandom({});
    }

    const btnClicks = () => {
        const randomClick = Math.floor(Math.random() * cartoon.length)
        const randomClickes = cartoon[randomClick]
        setRandom(randomClickes);
    }

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
                <h2 className='edit-choose'>Choose Cartoon</h2>
                <div>
                    <div>
                        {
                            cartoon.map(item => <h5 key={item.id}>{item.name}</h5>)
                        }
                    </div>
                    <button onClick={btnClicks} className='button-style'>
                        CHOOSE 1 FOR ME
                    </button>
                    <h4>{random.name}</h4>
                    <button onClick={clearCarts} className='button-style' >CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Card;