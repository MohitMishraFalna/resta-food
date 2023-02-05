import React from 'react';
import './Heading.css';

const Heading = ({ title, description, cn}) => {
  return (
    <div className='heading'>
        <h5>{title}</h5>
        <h1>{description}</h1>
    </div>
  )
}

export default Heading
