import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items ordered - </h4>
            <div className="carts">
                <div className="cart-product-left">
                    <p><small>items</small></p>
                    <p><small>Shipping and Handling</small></p>
                    <p><small>Total before Tax</small></p>
                    <p><small>Estimated Tax</small></p>
                    <h3>Order Total - </h3>
                </div>
                <div>
                    <p><small>0</small></p>
                    <p><small>0</small></p>
                    <p><small>0</small></p>
                    <p><small>0</small></p>
                    <p><strong>0</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Cart;