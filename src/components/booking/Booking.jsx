import React from 'react';
import './Booking.css';
import Banner from '../banner/Banner';
import Form from '../form/Form';
import Footer from '../footer/Footer';

const Booking = () => {
  return (
    <div className='booking-container'>
      <Banner title={'Booking'} pageName={'booking'}/>
      <Form type={'booking'} title={'reservation'} desc={'book a table'}/>

      <Footer />
    </div>
  )
}

export default Booking
