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
import Aos from "aos"
import "aos/dist/aos.css"


    


const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('https://mehedi-portfolio-three.vercel.app/testimonial')
        .then(res => res.json())
        .then(data => {
            setTestimonial(data)
        })
    },[])

    useEffect(()=>{
        Aos.init({duration:2000})
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
                        <img data-aos="fade-left" src={testimonial.author_img} />
                    </div>
                </div>
                <div className="text-5xl text-cyan-400 flex justify-center">
                    <FaQuoteLeft></FaQuoteLeft>
                </div>
                <p data-aos="fade-right" className=' text-center text-gray-400'>{testimonial.desc}</p>
                <div data-aos="fade-up">
                    <h2 className="text-3xl text-center font-bold uppercase text-gray-700">{testimonial.name}</h2>
                    <p className=' text-center text-gray-400'>{testimonial.author_designation}</p>
                </div>
            </SwiperSlide>)
            }
            </Swiper>
            <div className='divider'></div>
        </div>
    );
};

export default Testimonial;