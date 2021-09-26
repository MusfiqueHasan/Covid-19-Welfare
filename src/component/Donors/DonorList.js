// Donor list component

import React from 'react';

const DonorList = (props) => {
    const { name, img, donate } = props.listInfo;
    return (
        <div className="donor-list-info">
            <div className="img"><img  src={img} alt="" /></div>
            <div className="list-info">
                <span>{name}</span>
                <span>${donate}</span>
            </div>

        </div>
    );
};

export default DonorList;