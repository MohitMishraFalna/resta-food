import React from 'react'
import './Form.css';
import { FaPlay } from 'react-icons/fa';

const Form = ({ type }) => {
  return (
    <div className={`form-container animClass ${ type === 'booking' ? '' : 'form-container-contact'}`}>
        <div className="form-left">
            <div className='form-img'>
                <div className="video-img"></div>
                <div className="play-btn">
                    <FaPlay />
                </div>
            </div>
        </div>      
        <div className={`form-right ${ type === 'booking' ? 'form-right-bg-color' : ''}`}>
            <div className={`form-content ${ type === 'booking' ? 'form-book-padding' : 'form-contact-padding'}`}>
                <div className="form-heading">
                    <p className='form-small-heading'>reservation</p>
                    <h1 className={`${ type === 'booking' ? 'book-heading-color' : ''}`}>book a table online</h1>
                </div>

                <form action="#">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="form-control">
                                <input type="text" className='input-control' placeholder=' ' />
                                <label htmlFor="" className='form-label'>Your Name</label>
                            </div>
                            <div className="form-control">
                                <input type="email" className='input-control' placeholder=' ' />
                                <label htmlFor="" className='form-label'>Your Email</label>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-control">
                                <input type="datetime local" className='input-control' placeholder=' ' />
                                <label htmlFor="" className='form-label'>Date & Time</label>
                            </div>

                            { type === 'booking' ? 
                                <div className="form-control">
                                    <select name="" id="" className='input-control' >
                                        <option value="">People 1</option>
                                        <option value="">People 2</option>
                                        <option value="">People 3</option>
                                    </select>
                                    <label htmlFor="" className='form-label'>No of People</label>
                                </div>                              
                            : '' }
                        </div>

                        <div className="form-row">
                            <div className="form-control">
                                <textarea name="" id="" className={`input-control ${ type === 'booking' ? 'textarea-book' : 'textarea-contact'}`}  placeholder=' '></textarea>
                                <label htmlFor="" className='form-label'>Special Request</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-control">
                                <button className='btnClass'>book now</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form;
