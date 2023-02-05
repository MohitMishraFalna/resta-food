import React from 'react';
import './Footer.css';
import {FaAngleRight, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaEnvelope} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
// import {HiEnvelope} from 'react-icons/hi2';

const Footer = () => {
  return (
    <div className='footer-contenair'>
        <div className="footer-content">
            <div className="company-link">
                <div className="footer-heading">
                    Company
                </div>
                <ul className='footer-text'>
                    <li><a href="#"> <FaAngleRight /> <span>about Us</span> </a></li>
                    <li><a href="#"> <FaAngleRight /> <span>contact Us</span> </a></li>
                    <li><a href="#"> <FaAngleRight /> <span>Reservation</span> </a></li>
                    <li><a href="#"> <FaAngleRight /> <span>privacy policy</span> </a></li>
                    <li><a href="#"> <FaAngleRight /> <span>term & condition</span> </a></li>
                </ul>
            </div>

            <div className="contact-address">
                <div className="footer-heading">
                    <h5>Contact</h5>
                </div>
                <div className='footer-text'>
                    <p className='address'><span className='add-icon'><MdLocationOn/></span> <span className="add-text">850 Plote, Pune, India</span></p>
                    <p className='phone-number'><span className='add-icon'><BsFillTelephoneFill/></span> <span className="add-text"> +8690716407 </span></p>
                    <p className='postal-add'><span className='add-icon'><FaEnvelope/></span> <span className="add-text">mohitmishra.falna850@gmail.com</span></p>
                </div>
                <div className="footer-social">
                    <p className="social-icon"><FaTwitter/></p>
                    <p className="social-icon"><FaFacebookF/></p>
                    <p className="social-icon"><FaYoutube/></p>
                    <p className="social-icon"><FaLinkedinIn/></p>
                </div>
            </div>

            <div className="opening">
                <div className="footer-heading">
                    <h5>Opening</h5>
                </div>
                <div className='footer-text'>
                    <p className='opening-day'>monday - sanday</p>
                    <p className="opening-time">09AM - 09PM</p>
                    
                    <p className='opening-day'>sanday</p>
                    <p className="opening-time">10AM - 08PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
