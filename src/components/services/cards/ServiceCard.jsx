import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({cardIcon, cardHeading, cardDesc}) => {
  return (
    <div className='card'>
      <div className="card-content">
        {cardIcon}
        <h5>{cardHeading}</h5>
        <p>{cardDesc}</p>
      </div>

    </div>
  )
}

export default ServiceCard
