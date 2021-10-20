import React from 'react';

import health1 from '../../images/health/doctor1.jpg'
import health2 from '../../images/health/doctor2.jpg'
import health3 from '../../images/health/doctor3.jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        img:health1,
        name:'Dr.Alex',
        Specialist:' He is M.D/ M.S or M.Sc in Medicine from Dhaka Medical College.'
        
    },
    {
        img:health2,
        name:'Dr.Tanjina',
        Specialist:'She is Bachelor of Medicine and BChir, ChB or BS (Bachelor of Surgery) from India.'
        
    },
    {
        img:health3,
        name:'Dr.Mahi',
        Specialist:'She is Bachelor of Medicine and BChir, ChB or BS (Bachelor of Surgery) from Rajshahi Medical College.'
    },

]
const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Out Specialist</h2>
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