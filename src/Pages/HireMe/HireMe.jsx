import React from 'react';
import './HireMe.css'
import NavbarExtra from '../Shared/Navbar/NavbarExtra';
import template from '../../assets/temp.jpg'
import template1 from '../../assets/temp1.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination  } from 'swiper/modules';
import Accordion from './Accordion';
import { Link } from 'react-router-dom';

const HireMe = () => {
    return (
        <div>
            <NavbarExtra></NavbarExtra>
            <div className='HireMeBanner'>
                <h1>Hire ME!</h1>
            </div>
            <h2 className='text-center font-bold text-4xl my-10'>Project Showcase</h2>
            
            <div className='max-w-7xl mx-auto'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div>
                        <SwiperSlide className='mb-20'>
                            <div>
                                <img className='rounded-lg h-72' src={template} alt="" />
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className='rounded-lg h-72' src={template1} alt="" />
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 2</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className='rounded-lg h-72' src={template} alt="" />
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 3</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className='rounded-lg h-72' src={template1} alt="" />
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 4</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className='rounded-lg h-72' src={template} alt="" />
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 5</h2>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <Accordion></Accordion>
                <div>
                    <Link to="/contactForm">
                        <button className="bg-gray-600 px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block">Contact ME</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HireMe;