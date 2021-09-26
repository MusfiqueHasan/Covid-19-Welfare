// Main Component

import React, { useEffect, useState } from 'react';
import './Main.css'
import Donors from './../Donors/Donors';
import Cart from '../Cart/Cart';

const Main = () => {
    // state chang by useState
    const [info, setInfo] = useState([]);
    const [cart, setCart] = useState([]);

    // data loaded using useEffect
    useEffect(() => {
        fetch('./Data.JSON')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []);

    // creating a function and passing it as a props
    const handleDonations = (data) => {
        setCart([...cart, data])
    }
    return (
        <div className="main-container">
            {/* left child */}
            <div className="info-container">
                {
                    info.map((data) => <Donors key={data.id} data={data} handleDonations={handleDonations} />)
                }
            </div>
            {/* right child */}
            <div className="cart-container">
                <Cart cart={cart} />
            </div>

        </div>
    );
};

export default Main;