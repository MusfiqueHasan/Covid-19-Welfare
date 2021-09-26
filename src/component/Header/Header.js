// Header Component

import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div >
            <div className="header">
                {/* website title */}
                <div>
                    <h2 className="header-title">Covid-19 <br /> Welfare</h2>
                </div>
                {/* site info */}
                <div className="header-details">
                    <p>Your donation will help fund our work to supporting policies and projects that support the Latino community.</p>
                    <h2>Target of Donations: $2.7 Billion</h2>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;