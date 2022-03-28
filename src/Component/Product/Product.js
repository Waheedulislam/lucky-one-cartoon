import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, id } = props.cart;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p className='product-name'>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;