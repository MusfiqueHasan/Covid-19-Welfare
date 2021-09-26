import React from 'react';

const Donors = (props) => {
    const {name, companies, img, networth} =props.data
    return (
        <div>
            <img width="200px"  src={img} alt="" />
            <p>Name : {name}</p>
            <p>Companies: {companies}</p>
            <p>NetWorth: {networth}</p>
        </div>
    );
};

export default Donors;