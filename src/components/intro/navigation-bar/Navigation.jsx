import React, { useEffect, useState } from 'react';
import './Navigation.css'
import {FaUtensils} from 'react-icons/fa';
import Button from '../../button/Button';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    window.addEventListener('scroll', () => {
        let findMenu = document.querySelectorAll('.nav-right ul');        
        if(findMenu[0].classList.contains('menu')){
            setScrolled(window.pageYOffset === 0 ? false : true);
        }
    });
    
    const active = (e) => {
        let menuActive = document.querySelectorAll('.menuItem a');
        for (let index = 0; index < menuActive.length; index++) {
            if(menuActive[index].classList.contains('active')){
                menuActive[index].classList.remove('active')
            }         
        }
        e.target.classList.add('active')
    }

    const subActive = (e) => {
        let subMenuActive = document.querySelectorAll('.submenuItem a');
        for (let index = 0; index < subMenuActive.length; index++) {
            if(subMenuActive[index].classList.contains('active')){
                subMenuActive[index].classList.remove('active')
            }            
        }
        e.target.classList.add('active')
    }
    
    // menu bar for responsive
    const smallScreenMenu = () => {
        let navRight = document.querySelector('.nav-right ul');        
        if(navRight.classList.contains('menu')){
            navRight.classList.remove('menu');
            navRight.classList.add('menuToggle');            
        }else{
            navRight.classList.remove('menuToggle');            
            navRight.classList.add('menu');
        }
    }

    return (
        <nav className={scrolled ? 'content-scroll' : ''}>
            <div className={`nav-container ${scrolled ? '' : 'padding-scroll'}`}>
                <div className="nav-left">
                    <FaUtensils />
                    <div className="logo-text">
                        <p>Veg Resta</p>
                    </div>
                </div>
                <div className="nav-right">
                    <ul className="menu" onClick={active}>
                        <li className="menuItem"><Link to='/' className='active'>HOME</Link></li>
                        <li className="menuItem"><Link to='/about'>ABOUT</Link></li>
                        <li className="menuItem"><Link to='/services'>SERVICE</Link></li>
                        <li className="menuItem"><Link to='/menu'>MENU</Link></li>
                        <li className="menuItem chevron">
                            PAGES
                            <ul className="submenu"  onClick={subActive}>
                                <li className="submenuItem"><Link to='/booking'>Booking</Link></li>
                                <li className="submenuItem"><Link to='/team'>Our Team</Link></li>
                                <li className="submenuItem"><Link to='/testimonial'>Testimonial</Link></li>
                            </ul>
                        </li>
                        <li className="menuItem"><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                                        
                    <div className="btn-box" onClick={smallScreenMenu}>
                        <div className="bar-line"></div>
                        <div className="bar-line"></div>
                        <div className="bar-line"></div>
                    </div>

                    <div className='responsive-btn-hide'>
                        <Button title={'book a table'} pTB={'9px'} pLR={'25px'}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
