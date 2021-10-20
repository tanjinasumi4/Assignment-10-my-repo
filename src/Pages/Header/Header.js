import React from 'react';
import logo from '../../images/banner/HealthCare-logo.jpg'

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;