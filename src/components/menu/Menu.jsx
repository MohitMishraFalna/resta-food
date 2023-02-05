import React, { useState } from 'react';
import Banner from '../banner/Banner';
import Heading from '../title-heading/Heading';
import {FaCoffee, FaHamburger, FaUtensils} from 'react-icons/fa';
import './Menu.css';
import MenuItem from './menuItem/MenuItem';
import Footer from '../footer/Footer';

const Menu = () => {
  const [tagName, setTagName] = useState('');

  const filterData = [
    {
      id: 1,
      icon: <FaCoffee />,
      type: 'popular',
      tag: 'breakfast'
    },
    {
      id: 2,
      icon: <FaHamburger />,
      type: 'special',
      tag: 'launch'
    },
    {
      id: 3,
      icon: <FaUtensils />,
      type: 'lovely',
      tag: 'dinner'
    },
  ]

  const filterCategories = (id, dataTag) => {
    let breakfast = document.getElementsByClassName('breakfast');
    for (let index = 0; index < breakfast.length; index++) {
      if(breakfast[index].classList.contains('menu-active')){
        breakfast[index].classList.remove('menu-active');
      }
    }
    breakfast[--id].classList.add('menu-active');
    setTagName(dataTag);
  }

  return (
    <div className='menu-option'>
      <Banner title={'Food Menu'} pageName={'Menu'} />
      <Heading title={'food menu'} description={'most popular items'} />
      <div className="menu-container">
        {filterData.map((item) => (
          <div  key={item.id}>
            <div className="breakfast" onClick={()=>filterCategories(item.id, item.tag)}>
              {item.icon}
              <p>
                <span className="menu-popular">{item.type}</span>
                <span className="menu-breakfast">{item.tag}</span>
              </p>
            </div>
          </div>
        ))}
      </div>      
      <MenuItem filterName={tagName}/>

      <Footer />
    </div>
  )
};

export default Menu
