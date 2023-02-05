import React from 'react';
import './teamMemeberCard.css';
import {GrFacebookOption} from 'react-icons/gr';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

const teamMemeberCard = ({ img, name, designation }) => {
  return (
    <div className='teamMemberCard'>
        <div className="upperSide">
            <div className="teamMember-img">
                {img}
            </div>
            <h3>{name}</h3>
            <p>{designation}</p>
        </div>        
        <div className="social-media">      
            <p className='social-icon'><GrFacebookOption /></p>
            <p className='social-icon'><AiOutlineTwitter /></p>
            <p className='social-icon'><AiOutlineInstagram /></p>
        </div>
    </div>
  )
}

export default teamMemeberCard;
