import React from 'react';
import serviceImg from "../../../assets/service.jpg"

const ServiceWelcome = () => {
    return (
        <div className='p-20'>
            <h1 className='text-5xl text-white font-bold text-center mb-10'>Welcome To My Service Category</h1>
            <div className='flex justify-center items-center'>
                <img className='rounded-lg w-[550px]' src={serviceImg} alt="" />
            </div>
        </div>
    );
};

export default ServiceWelcome;