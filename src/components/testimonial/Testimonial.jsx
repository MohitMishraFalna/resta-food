import React from 'react';
import Banner from '../banner/Banner';
import Heading from '../title-heading/Heading';
import './Testimonial.css';
import TestimonialCard from './testimonialCard/TestimonialCard';
import Footer from '../footer/Footer';

const Testimonial = () => {
  return (
    <div className='testimonial-container'>      
        <Banner title={'Testimonial'} pageName={'testimonial'}/>
        <Heading title={'testimonial'} description={'our clients say!!!'} />
        <TestimonialCard />
        <Footer />
    </div>
  )
}

export default Testimonial
