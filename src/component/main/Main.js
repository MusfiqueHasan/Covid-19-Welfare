import React, { useEffect, useState } from 'react';
import './Main.css'
import Donors from './../Donors/Donors';
import Cart from '../Cart/Cart';

const Main = () => {
    const [info, setInfo] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./Data.JSON')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, []);

    const handleDonations = (data) => {
        setCart([...cart, data])
    }
    return (
        <div className="main-container">
            <div className="info-container">
                {
                    info.map((data) => <Donors key={data.id} data={data} handleDonations={handleDonations} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>

        </div>
    );
};

export default Main;