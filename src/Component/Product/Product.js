import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { cart, handleAddToClick } = props
    const { name, img, price } = cart;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p className='product-name'>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToClick(cart)} className='btn-cart'>
                <h3 className='text-color'>Add to Cart</h3>
                <FontAwesomeIcon className='text-color' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;