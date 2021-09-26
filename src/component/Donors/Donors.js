// Donors Component

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import './Donors.css'
const Donors = (props) => {
    // object destructuring 
    const { name, companies, img, networth, born, donate } = props.data;
    // react font awesome
    const element = <FontAwesomeIcon icon={faDonate} />

    return (
        <div className="donors-section">
            {/* card container */}
            <div className="donors-container">
                {/* donors image */}
                <div>
                    <img width="320px" height="180px" src={img} alt="" />
                </div>
                {/* donors social media */}
                <div className="donors-social-media">
                    <a href="/"><i className="fab fa-facebook"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-youtube"></i></a>
                </div>
                {/* donors info */}
                <div className="donors-data">
                    <p> <span className="donors-info">Name:</span>  {name}</p>
                    <p> <span className="donors-info">Companies:</span>  {companies}</p>
                    <p> <span className="donors-info">Born:</span>  {born}</p>
                    <p> <span className="donors-info">NetWorth:</span>  {networth}</p>
                    <p> <span className="donors-info">Donations:</span>  ${donate}</p>
                </div>
                {/* passing the whole data as a props to parent component */}
                <div className="donors-btn">
                    <button className="btn" onClick={() => props.handleDonations(props.data)}>{element} Donate</button>

                </div>
            </div>
        </div>
    );
};

export default Donors;