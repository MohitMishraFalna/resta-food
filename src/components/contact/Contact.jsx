import React from 'react';
import './Contact.css';
import Banner from '../banner/Banner';
import Form from '../form/Form';
import {FaEnvelopeOpen} from 'react-icons/fa';
import Footer from '../footer/Footer';

const Contact = () => {
  return (
    <div className='contact-container'>
      <Banner title={'Contact'} pageName={'contact'}/>
      <div className="middle-section">
        <div className="booking">
          <p className="small-heading">
              booking
          </p>
          <p className="normal-text">
            <span><FaEnvelopeOpen /></span> 
            <p className='postal-address'> book@example.com</p>
          </p>
        </div>
        <div className="general">
          <p className="small-heading">
            general
          </p>
          <p className="normal-text">
            <span><FaEnvelopeOpen /></span> 
            <p className='postal-address'> info@example.com</p>
          </p>
        </div>
        <div className="technical">
          <p className="small-heading">
            technical
          </p>
          <p className="normal-text">
            <span><FaEnvelopeOpen /></span> 
            <p className='postal-address'> tech@example.com</p>
          </p>
        </div>
      </div>
      <Form type={'contact'} title={'cotact us'} desc={'contact for any query'}/>
      <Footer />
    </div>
  )
}

export default Contact
