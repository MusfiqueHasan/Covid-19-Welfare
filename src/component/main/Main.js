import React, { useEffect, useState } from 'react';
import './Main.css'
import Donors from './../Donors/Donors';

const Main = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('./Data.JSON')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {
                data.map((dataS) =><Donors key={dataS.id} dataS={dataS}/>)
            }
            
        </div>
    );
};

export default Main;