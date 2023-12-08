import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';


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
        <div className='md:p-20 mt-10 mb-10'>
        <h2 className='text-4xl font-bold text-center my-20 uppercase'>What Client Say!</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                testimonial.map(testimonial =><SwiperSlide className="px-20 space-y-4" key={testimonial._id}>
                <div className="flex justify-center">
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={testimonial.rating}
                    readOnly
                    />
                </div>
                <div className="avatar flex justify-center items-center">
                    <div className="w-16 rounded-full">
                        <img src={testimonial.author_img} />
                    </div>
                </div>
                <div className="text-5xl text-cyan-400 flex justify-center">
                    <FaQuoteLeft></FaQuoteLeft>
                </div>
                <p className=' text-center text-gray-400'>{testimonial.desc}</p>
                <h2 className="text-3xl text-center font-bold uppercase text-gray-700">{testimonial.name}</h2>
                <p className=' text-center text-gray-400'>{testimonial.author_designation}</p>
            </SwiperSlide>)
            }
            </Swiper>
            <div className='divider'></div>
        </div>
    );
};

export default Testimonial;