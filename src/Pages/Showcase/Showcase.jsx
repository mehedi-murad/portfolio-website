import Aos from "aos"
import "aos/dist/aos.css"
import template1 from '../../assets/project/banners.png'
import template2 from '../../assets/project/banners1.png'
import template3 from '../../assets/project/banners2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const Showcase = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <h2 className='text-center font-bold text-4xl my-20'>Projects</h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div>
                        <SwiperSlide className='mb-20'>
                            <div data-aos="fade-up" className='border-2 border-[#0099FF] rounded-lg'>
                                <img className='rounded-lg h-20 md:h-96' src={template1} alt="" />
                            </div>
                            <Link to="https://diagnostic-center-manage-b294b.web.app/">
                                <div className="flex justify-center items-center gap-4 text-gray-400 mt-5 hover:text-[#0099FF]">
                                <h2 className=' text-xl font-semibold '>TechMed</h2>
                                <FaArrowRight></FaArrowRight>
                                </div>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div data-aos="fade-up" className='border-2 border-[#0099FF] rounded-lg'>
                                <img className='rounded-lg h-20 md:h-96' src={template2} alt="" />
                            </div>
                            <Link to="https://job-portal-7afad.web.app/">
                                <div className="flex justify-center items-center gap-4 text-gray-400 mt-5 hover:text-[#0099FF]">
                                <h2 className=' text-xl font-semibold '>Job Genius</h2>
                                <FaArrowRight></FaArrowRight>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="fade-up" className='border-2 border-[#0099FF] rounded-lg'>
                                <img className='rounded-lg h-20 md:h-96' src={template3} alt="" />
                            </div>
                            <Link to="https://fashion-brand-4d7fd.web.app/">
                                <div className="flex justify-center items-center gap-4 text-gray-400 mt-5 hover:text-[#0099FF]">
                                <h2 className=' text-xl font-semibold '>Menzwo Option</h2>
                                <FaArrowRight></FaArrowRight>
                                </div>
                            </Link>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="fade-up" className='border-2 border-[#0099FF] rounded-lg'>
                                <img className='rounded-lg h-20 md:h-96' src={template2} alt="" />
                            </div>
                            <Link to="https://job-portal-7afad.web.app/">
                                <div className="flex justify-center items-center gap-4 text-gray-400 mt-5 hover:text-[#0099FF]">
                                <h2 className=' text-xl font-semibold '>Job Genius</h2>
                                <FaArrowRight></FaArrowRight>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-20'>
                            <div data-aos="fade-up" className='border-2 border-[#0099FF] rounded-lg'>
                                <img className='rounded-lg h-20 md:h-96' src={template1} alt="" />
                            </div>
                            <Link to="https://diagnostic-center-manage-b294b.web.app/">
                                <div className="flex justify-center items-center gap-4 text-gray-400 mt-5 hover:text-[#0099FF]">
                                <h2 className=' text-xl font-semibold '>TechMed</h2>
                                <FaArrowRight></FaArrowRight>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <Link to="/hireMe" className=" flex justify-center mt-10">
                    <button data-aos="fade-left" className="bg-[#0099FF] text-white py-2 px-4 rounded-lg font-bold">
                        Project Details
                    </button>
                </Link>
            </div>
    );
};

export default Showcase;