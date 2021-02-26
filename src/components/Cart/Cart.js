import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const subTotal = cart.reduce((total, item) => total += item.price, 0);
    let shipping = 0;
    if(subTotal > 0 &&  subTotal < 15) {
        shipping = 4.99;
    } else {
        shipping = 0;
    }
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax 

    const formatNumber = num => {
        return Number(num.toFixed(2));  
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items ordered - {cart.length}</h4>
            <div className="carts">
                <div className="cart-product-left">
                    <p><small>items</small></p>
                    <p><small>Shipping and Handling</small></p>
                    <p><small>Total before Tax</small></p>
                    <p><small>Estimated Tax</small></p>
                    <h3>Order Total - </h3>
                </div>
                <div>
                    <p><small>{cart.length}</small></p>
                    <p> <small>${formatNumber(shipping)}</small></p>
                    <p> <small>${formatNumber(subTotal)}</small></p>
                    <p> <small>${formatNumber(tax)}</small></p>
                    <p> <strong>${formatNumber(grandTotal)}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Cart;