import React from 'react';
import Banner from '../banner/Banner';
import TeamMember from './teamMember/TeamMember';
import Heading from '../title-heading/Heading';
import './Team.css';
import Footer from '../footer/Footer';

const Team = () => {
  return (
    <div className='team'>
      <Banner title={'Our Team'} pageName={'Team'} />
      <Heading title={'team members'} description={'our master chefs'} />      
      <TeamMember/>

      <Footer />
    </div>
  )
};

export default Team
