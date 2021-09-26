import React from 'react';
import './Donors.css'
const Donors = (props) => {
    const { name, companies, img, networth, born, donate } = props.data
    return (
        <div className="donors-section">
            <div className="donors-container">
                <div>
                    <img width="300px" height="170px" src={img} alt="" />
                </div>
                <div className="donors-data">
                    <p> <span className="donors-info">Name:</span>  {name}</p>
                    <p> <span className="donors-info">Companies:</span>  {companies}</p>
                    <p> <span className="donors-info">Born:</span>  {born}</p>
                    <p> <span className="donors-info">NetWorth:</span>  {networth}</p>
                    <p> <span className="donors-info">Donations:</span>  {donate}</p>
                    <button>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default Donors;