import React from 'react';
import './Banner.css';
import Navigation from '../intro/navigation-bar/Navigation.jsx';

const Banner = ({ title, pageName}) => {
  return (
    <div className="banner">
        <Navigation />
        <div className="main-content">
            <h1>{title}</h1>
            <div className="order-list">
                <ol>
                    <li>home</li>
                    <li>/</li>
                    <li>pages</li>
                    <li>/</li>
                    <li>{pageName}</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Banner
