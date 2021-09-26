import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    const totalDonations = cart.reduce((prev, curr) => prev + curr.donate, 0)
    return (
        <div className="cart-container">
            <p className="cart-title">Get Involved</p>
            <h1>Join the movement</h1>
            <p>Become part of our action network and help us continue to forge a society that provides equal opportunity to all.</p> <br />
            <div>
                <p > <span className="cart-info">Donors:</span>  {cart.length}</p>
                <p > <span className="cart-info">Total Donations:</span>  ${totalDonations} </p>
                <p > <span className="cart-info">Donor List:</span>  { }</p>
            </div>
        </div>
    );
};

export default Cart;