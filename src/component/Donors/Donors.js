// Donors Component

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import './Donors.css'
const Donors = (props) => {
    const { name, companies, img, networth, born, donate } = props.data;


    const element = <FontAwesomeIcon icon={faDonate} />
    return (
        <div className="donors-section">
            <div className="donors-container">
                <div>
                    <img width="320px" height="180px" src={img} alt="" />
                </div>
                <div className="donors-social-media">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
                <div className="donors-data">
                    <p> <span className="donors-info">Name:</span>  {name}</p>
                    <p> <span className="donors-info">Companies:</span>  {companies}</p>
                    <p> <span className="donors-info">Born:</span>  {born}</p>
                    <p> <span className="donors-info">NetWorth:</span>  {networth}</p>
                    <p> <span className="donors-info">Donations:</span>  ${donate}</p>
                </div>
                <div className="donors-btn">
                    <button className="btn" onClick={() => props.handleDonations(props.data)}>{element} Donate</button>

                </div>
            </div>
        </div>
    );
};

export default Donors;