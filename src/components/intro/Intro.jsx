import React from 'react';
import Button from '../button/Button';
import './Intro.css';
import Navigation from './navigation-bar/Navigation';
import Hero from '../../img/hero.png';

const intro = () => {
        
    return (
        <div className="intro">
            <Navigation />

            {/* Intro part */}
            <div className="intro-container">
                <div className="left-container">
                    <h1>Enjoy Our <br/> Delicious Meal</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <Button title={'book a table'} pTB={'18px'} pLR={'45px'}/>
                </div>
                <div className="right-container">
                    <img src={Hero} alt="Hero"/>
                </div>
            </div>

        </div>
    )
}

export default intro
