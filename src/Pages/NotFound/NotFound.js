import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/3747371.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{width:'70%'}}src={notfound} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;