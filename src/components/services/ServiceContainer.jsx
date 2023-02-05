import React from 'react';
import Banner from '../banner/Banner';
import Heading from '../title-heading/Heading';
import './ServiceContainer.css';
import Services from './serviceContent/Services';
import Footer from '../footer/Footer';

const ServiceContainer = () => {
  return (
    <div className='ServiceContainer'>      
      <Banner title={'Services'} pageName={'service'} />
      <Heading title={'our services'} cn={'service'} description={'Explore Our Services'} />
      <Services/>
      <Services/>
      <Footer />
    </div>
  )
};

export default ServiceContainer
