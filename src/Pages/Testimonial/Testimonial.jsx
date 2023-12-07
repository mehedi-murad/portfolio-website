import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/testimonial')
        .then(res => res.json())
        .then(data => {
            setTestimonial(data)
        })
    },[])
    return (
        <div className='max-w-7xl mx-auto py-20'>
            <h2 className='text-4xl font-bold text-center my-20 uppercase'>What Client Say!</h2>
            <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div>
                    {
                        testimonial.map(item =>
                            <SwiperSlide>
                                <div className="card  bg-[#FFDBCB] shadow-md mb-20">
                                    <div className="card-body">
                                        <div className='flex gap-6 items-center'>
                                            <div className='w-24 avatar'>
                                                <img className=' rounded-full' src={item.author_img} alt="" />
                                            </div>
                                            <div>
                                                <h2 className="card-title font-bold text-xl">{item.name}</h2>
                                                <p>{item.author_designation}</p>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                    }
                </div>
            </Swiper>
        </div>
        </div>
    );
};

export default Testimonial;