// Donor list component

import React from 'react';

const DonorList = (props) => {
    // object destructuring 
    const { name, img, donate } = props.listInfo;
    return (
        // donor list info
        <div className="donor-list-info">
            <div className="img"><img  src={img} alt="" /></div>
            <div className="list-info">
                <span className="donor-name">{name}</span>
                <span>${donate}</span>
            </div>

        </div>
    );
};

export default DonorList;