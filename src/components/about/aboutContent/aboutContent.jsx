import React, { useState } from 'react';
import './aboutContent.css';
import Button from '../../button/Button';
import {FaUtensils} from 'react-icons/fa';
import About1 from '../../../img/about-1.jpg';
import About2 from '../../../img/about-2.jpg';
import About3 from '../../../img/about-3.jpg';
import About4 from '../../../img/about-4.jpg';

const AboutContent = () => {

  const [counting, setCounting] = useState();

  window.addEventListener('scroll', () => {
    let upperBig = document.querySelector('.upperBig');
    let upperSmall = document.querySelector('.upperSmall');
    let lowerSmall = document.querySelector('.lowerSmall');
    let lowerBig = document.querySelector('.lowerBig');
    let contentPositionTop = upperBig.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7; // you can use fixed value but it do not work on other divice.
    if(contentPositionTop < screenPosition){
      upperBig.classList.add('zoomOut');
      upperSmall.classList.add('zoomOut');
      lowerSmall.classList.add('zoomOut');
      lowerBig.classList.add('zoomOut');
    }else{
      upperBig.classList.remove('zoomOut');
      upperSmall.classList.remove('zoomOut');
      lowerSmall.classList.remove('zoomOut');
      lowerBig.classList.remove('zoomOut');
    }

    // increse the number
    const dataClass = document.querySelectorAll('.number');

    // set time for the increase number
    const increaseTime = 5;

    dataClass.forEach((ele) =>{
      const updateNumber = () => {
        
        // get data and convert to int.
        const targetNumber = parseInt(ele.dataset.number);
        
        // div inner text.
        const initialNum = parseInt(ele.innerText);
        
        // get the number for increase number
        const increaseNumber = Math.trunc(targetNumber/increaseTime);

        if(initialNum < targetNumber){
          ele.innerText = initialNum + increaseNumber;
          setTimeout(updateNumber, 100);
        }
      };
      updateNumber();
    });
  });
  return (
    <div className="about-container">
      <div className="about-left">
          <div className="upperImg">
            <img src={About1} alt="" className='upperBig'/>
            <img src={About2} alt="" className='upperSmall'/>
          </div>
          <div className="lowerImg">
            <img src={About3} alt="" className='lowerSmall' />
            <img src={About4} alt="" className='lowerBig' />
          </div>
      </div>
      <div className="about-right">
          <h5>about us</h5>
          <h1>Welcome to <FaUtensils/> Restoran</h1>

          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit. </p>
          <br />
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

          <div className="quality">
            <p className="years"><span className='number' data-number="15">0</span> <span> Years of <br /> <span className='text'>experience</span></span></p>
            <p className="popular"><span className='number' data-number="50">0</span> <span>Popular <br /> <span className='text'>master chefs</span></span></p>
          </div>
          <Button title={'read more'} pTB={'18px'} pLR={'45px'}/>
      </div>
    </div>
  )
}

export default AboutContent
