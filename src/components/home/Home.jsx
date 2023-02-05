import React from 'react';
import './Home.css';
import Intro from '../intro/Intro';
import Footer from '../footer/Footer';
import ServiceContent from '../services/serviceContent/Services';
import AboutContent from '../about/aboutContent/aboutContent';
import MenuItem from '../menu/menuItem/MenuItem';
import TestimonialCard from '../testimonial/testimonialCard/TestimonialCard';
import TeamMember from '../team-member/teamMember/TeamMember';
import Heading from '../title-heading/Heading';


const Home = () => {
  return (
    <div className='home-container'>
        <Intro/>
        <ServiceContent />
        <AboutContent />
        <Heading title={'food menu'} description={'most popular items'} />
        <MenuItem filterName={'breakfast'} />        
        <TestimonialCard />
        <Footer />
    </div>
  )
}

export default Home
