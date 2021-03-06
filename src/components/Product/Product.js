import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const { img, name, key, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt={key} />
            </div>
            <div className="product-right">
                <h4>{name}</h4>
                <small>By - {seller}</small>
                <br />
                <br />
                <h4>$ {price}</h4>
                <small>Only {stock} left - Order soon</small>
                <br />
                <button className="addToCartBtn" onClick = {() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;