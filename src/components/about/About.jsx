import React from 'react';
import Banner from '../banner/Banner';
import TeamMember from '../team-member/teamMember/TeamMember';
import './About.css';
import AboutContent from './aboutContent/aboutContent';
import Heading from '../title-heading/Heading';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <div className='about'>
      <Banner title={'About Us'} pageName={'about'} />
      <AboutContent/>
      <Heading title={'team members'} description={'our master chefs'} />      
      <TeamMember/>
      <Footer />
    </div>
  )
};

export default About
