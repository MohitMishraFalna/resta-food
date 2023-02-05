import React from 'react';

import ServiceCard from '../cards/ServiceCard';
import './Services.css';
import {FaUserTie} from 'react-icons/fa';
import {FaUtensils} from 'react-icons/fa';
import {FaCartPlus} from 'react-icons/fa';
import {FaHeadset} from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services animClass">
            <div className="col">
                <ServiceCard cardIcon={<FaUserTie className='icon ' />} cardHeading={'master chefs'} cardDesc={'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'} />
                <ServiceCard cardIcon={<FaUtensils className='icon ' />} cardHeading={'master chefs'} cardDesc={'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'} />
                <ServiceCard cardIcon={<FaCartPlus className='icon ' />} cardHeading={'master chefs'} cardDesc={'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'} />
                <ServiceCard cardIcon={<FaHeadset className='icon ' />} cardHeading={'master chefs'} cardDesc={'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'} />
            </div>
        </div>
    )
}

export default Services
