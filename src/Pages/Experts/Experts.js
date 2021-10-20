import React from 'react';

import health1 from '../../images/health/doctor1.jpg'
import health2 from '../../images/health/doctor2.jpg'
import health3 from '../../images/health/doctor3.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img:health1,
        name:'Dr.Tanjina',
        Specialist:'Gynecologist'
        
    },
    {
        img:health2,
        name:'Dr.Tanjina',
        Specialist:'Gynecologist'
        
    },
    {
        img:health3,
        name:'Dr.Tanjina',
        Specialist:'Gynecologist'
    },

]
const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Section title</h2>
            <div className="row">
                 {
                     experts.map(expert => <Expert
                         key={expert.name}
                         expert={expert}
                         >
                     </Expert>)
                 }
            </div>
        </div>
    );
};

export default Experts;