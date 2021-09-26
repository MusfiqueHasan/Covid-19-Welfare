import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className="cart-container">
            <p className="cart-title">Get Involved</p>
            <h1>Join the movement</h1>
            <p>Become part of our action network and help us continue to forge a society that provides equal opportunity to all.</p><br />

            <div>
                <p className="cart-info">Donors:</p>
                <p className="cart-info">Total Donations:</p>
                <p className="cart-info">Donor List:</p>
            </div>
        </div>
    );
};

export default Cart;