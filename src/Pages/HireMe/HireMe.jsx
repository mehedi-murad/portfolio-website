import React from 'react';
import './HireMe.css'
import NavbarExtra from '../Shared/Navbar/NavbarExtra';
import template1 from '../../assets/project/banners.png'
import template2 from '../../assets/project/banners1.png'
import template3 from '../../assets/project/banners2.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination  } from 'swiper/modules';
import Accordion from './Accordion';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const HireMe = () => {
    return (
        <div>
            <NavbarExtra></NavbarExtra>
            <div className='HireMeBanner'>
                <h1>Hire ME!</h1>
            </div>
            <h2 className='text-center font-bold text-4xl my-10'>Project Showcase</h2>
            
            <div className='max-w-7xl mx-auto px-4 py-10'>
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
                            <div className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template1} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://diagnostic-center-manage-b294b.web.app/">Preview</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/diagnostic-center-management-system-client">Client Side</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/diagnostic-center-management-system-server">Server Side</a>
                                </button>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>TechMed</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template2} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://job-portal-7afad.web.app/">Preview</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/job-genius-client-side">Client Side</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/job-genius-server-side">Server Side</a>
                                </button>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Job Genius</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template3} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://fashion-brand-4d7fd.web.app/">Preview</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/menzwo-option-fashion-brand">Client Side</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/menzwo-option-fashion-brand-server">Server Side</a>
                                </button>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Menzwo Option</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template2} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://job-portal-7afad.web.app/">Preview</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/job-genius-client-side">Client Side</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/job-genius-server-side">Server Side</a>
                                </button>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Job Genius</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template1} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://diagnostic-center-manage-b294b.web.app/">Preview</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/diagnostic-center-management-system-client">Client Side</a>
                                </button>
                                <button className='btn bg-orange-400 text-white'>
                                    <a href="https://github.com/mehedi-murad/diagnostic-center-management-system-server">Server Side</a>
                                </button>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>TechMed</h2>
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
            <Footer></Footer>
        </div>
    );
};

export default HireMe;