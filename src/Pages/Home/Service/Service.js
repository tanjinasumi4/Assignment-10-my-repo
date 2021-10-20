import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,title,descroption,img} = service;
    
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h5 className="px-5">{descroption}</h5>
            <Link to={`/booking/${id}`}>
                <button>Book{title.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;