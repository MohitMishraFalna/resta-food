import React, { useState } from 'react';
import './TestimonialCard.css';
import {FaQuoteLeft} from 'react-icons/fa'
import Testimonial1 from '../../../img/testimonial-1.jpg';
import Testimonial2 from '../../../img/testimonial-2.jpg';
import Testimonial3 from '../../../img/testimonial-3.jpg';
import Testimonial4 from '../../../img/testimonial-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const TestimonialCard = () => {

    const [sliderSize, setSlidedSize] = useState(false);

    window.addEventListener('load', () => {
       if(window.screen.width <= 920){
        setSlidedSize(true);
       }else{
        setSlidedSize(false);
       }
    });
    
    window.addEventListener('resize', () => {
       if(window.screen.width <= 920){
        setSlidedSize(true);
       }else{
        setSlidedSize(false);
       }
    });
    
    const testimonialData = [
        {
            id:1,
            name: 'mohit mishra',
            designation: 'software engineer',
            desc: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
            img: Testimonial1,
        },
        {
            id:2,
            name: 'chinmay mishra',
            designation: 'software engineer',
            desc: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
            img: Testimonial2,
        },
        {
            id:3,
            name: 'john',
            designation: 'software engineer',
            desc: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
            img: Testimonial3,
        },
        {
            id:4,
            name: 'smith',
            designation: 'software engineer',
            desc: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
            img: Testimonial4,
        },
    ];

    return (
        <div className='testimonial-container animClass'>
            <Swiper 
                spaceBetween={23} 
                slidesPerView={sliderSize ? 1 : 3}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{clickable: true}}
                loop= {true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
            >
                
                {
                    testimonialData.map((tistiItem) => (
                        // return(
                            <SwiperSlide key={tistiItem.id}>
                                <div  className='testimonial-card'>
                                    <FaQuoteLeft />
                                    <p className='testimonial-text'>{tistiItem.desc}</p>
                                    <div className="client-description">
                                        <img src={tistiItem.img} alt="" />
                                        <div className="personal-detail">
                                            <p>{tistiItem.name}</p>
                                            <span className="designation">{tistiItem.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        // )
                    ))
                }
                
            </Swiper>
            {/* slider dot */}
            <div className="slider-circle">
                <div className="circle active-bg-color"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
  )
}

export default TestimonialCard
