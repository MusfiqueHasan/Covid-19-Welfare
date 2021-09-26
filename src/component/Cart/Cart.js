// Cart Component

import React from 'react';
import DonorList from '../Donors/DonorList';
import './Cart.css'
const Cart = (props) => {
    // object destructuring
    const { cart } = props;
    // counting total donations
    const totalDonations = cart.reduce((prev, curr) => prev + curr.donate, 0)
    return (
        <div className="cart-container">

            {/* donation info */}
            <div>
                <p className="cart-title">Get Involved</p>
                <h1>Join the movement</h1>
                <p>Become part of our action network and help us continue to forge a society that provides equal opportunity to all.</p> <br />
            </div>
            {/* donation details */}
            <div>
                <p > <span className="cart-info">Donors:</span>  {cart.length}</p>
                <p > <span className="cart-info">Total Donations:</span>  ${totalDonations} </p>
                <p className="donor-list"> <span >Donor List</span></p>
                {
                    cart.map(listInfo => <DonorList listInfo={listInfo} />)
                }

            </div>
        </div>
    );
};

export default Cart;