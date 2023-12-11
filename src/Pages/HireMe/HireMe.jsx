import React, { useEffect } from 'react';
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
import Aos from "aos"
import "aos/dist/aos.css"
import { Helmet } from 'react-helmet-async';

const HireMe = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div>
            <Helmet>
                <title>Mehedi's Portfolio | Hire Me</title>
            </Helmet>
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
                            <div data-aos="fade-up" className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template1} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <Link to="https://diagnostic-center-manage-b294b.web.app/">
                                    <button className='btn bg-orange-400 text-white'>
                                        Preview
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/diagnostic-center-management-system-client">
                                    <button className='btn bg-orange-400 text-white'>
                                        Client Side
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/diagnostic-center-management-system-server">
                                    <button className='btn bg-orange-400 text-white'>
                                        Server Side
                                    </button>
                                </Link>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>TechMed</h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div data-aos="fade-up" className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template2} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <Link to="https://job-portal-7afad.web.app/">
                                    <button className='btn bg-orange-400 text-white'>
                                        Preview
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/job-genius-client-side">
                                    <button className='btn bg-orange-400 text-white'>
                                        Client Side
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/job-genius-server-side">
                                    <button className='btn bg-orange-400 text-white'>
                                        Server Side
                                    </button>
                                </Link>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Job Genius</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="fade-up" className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template3} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                
                                <Link to="https://fashion-brand-4d7fd.web.app/">
                                    <button className='btn bg-orange-400 text-white'>
                                        Preview
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/menzwo-option-fashion-brand">
                                    <button className='btn bg-orange-400 text-white'>
                                        Client Side
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/menzwo-option-fashion-brand-server">
                                    <button className='btn bg-orange-400 text-white'>
                                        Server Side
                                    </button>
                                </Link>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Menzwo Option</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="fade-up" className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template2} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                {/* <h2 className='mt-5 text-xl font-semibold text-gray-400'>Template 1</h2> */}
                                <Link to="https://job-portal-7afad.web.app/">
                                    <button className='btn bg-orange-400 text-white'>
                                        Preview
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/job-genius-client-side">
                                    <button className='btn bg-orange-400 text-white'>
                                        Client Side
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/job-genius-server-side">
                                    <button className='btn bg-orange-400 text-white'>
                                        Server Side
                                    </button>
                                </Link>
                                <h2 className='mt-5 text-xl font-semibold text-gray-400'>Job Genius</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-20'>
                            <div data-aos="fade-up" className='border-2 border-orange-400 rounded-lg'>
                                <img className='rounded-lg h-20 md:h-72' src={template1} alt="" />
                            </div>
                            <div className='text-center mt-5'>
                                
                                <Link to="https://diagnostic-center-manage-b294b.web.app/">
                                    <button className='btn bg-orange-400 text-white'>
                                        Preview
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/diagnostic-center-management-system-client">
                                    <button className='btn bg-orange-400 text-white'>
                                        Client Side
                                    </button>
                                </Link>
                                <Link to="https://github.com/mehedi-murad/diagnostic-center-management-system-server">
                                    <button className='btn bg-orange-400 text-white'>
                                        Server Side
                                    </button>
                                </Link>
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