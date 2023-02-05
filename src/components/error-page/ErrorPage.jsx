import React from 'react';
import './ErrorPage.css';
import ErrorImage from '../../img/errorpage.png';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';

const ErrorPage = () => {
  return (
    <div className='error-container'>
        <Banner title={'404 Page'} pageName={'error-page'} />
        <div className="error-img">
            <img src={ErrorImage} alt="" />      
        </div>
        <Footer/>
    </div>
  )
}

export default ErrorPage
