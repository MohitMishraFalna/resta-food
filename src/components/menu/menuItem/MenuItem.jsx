import React from 'react';
import './MenuItem.css';

const MenuItem = ({filterName}) => {
    const menuList = [
        {
            id: 1,
            tags: ['launch'],
            price: '$115',
            img: require('../../../img/menu-1.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 2,
            tags: ['dinner'],
            price: '$115',
            img: require('../../../img/menu-2.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 3,
            tags: ['dinner','launch', 'breakfast'],
            price: '$115',
            img: require('../../../img/menu-3.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 4,
            tags: ['breakfast'],
            price: '$115',
            img: require('../../../img/menu-4.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 5,
            tags: ['dinner'],
            price: '$115',
            img: require('../../../img/menu-5.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 6,
            tags: ['dinner','breakfast','launch'],
            price: '$115',
            img: require('../../../img/menu-6.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 7,
            tags: ['breakfast','launch'],
            price: '$115',
            img: require('../../../img/menu-7.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
        {
            id: 8,
            tags: ['launch'],
            price: '$115',
            img: require('../../../img/menu-8.jpg'),
            title: 'chicken burger',
            desc: 'Ipsum ipsum clita erat amet dolor justo diam',
        },
    ];
    
    return (
        <div className='menuItem-container'>
            {menuList.map((item) => (
                (item.tags.includes(filterName) ) ? 
                    <div className="row" key={item.id}>
                        <div className="col-fifty">
                            <div className="col-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="col-main">
                                <div className="col-content">
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                                <div className="col-desc">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                : ''                
            ))}
        </div>
    )
}

export default MenuItem
