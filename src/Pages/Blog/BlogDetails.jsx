import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const BlogDetails = () => {
    const blogInfo = useLoaderData()
    // const {title, published_date, author_name, image, details} = blogInfo
    return (
        <div>
            <Helmet>
                <title>Mehedi's Portfolio | Blog Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto space-y-4 mt-10'>
                <div className='text-center'>
                    <h1 className='font-bold text-4xl'>{blogInfo.title}</h1>
                </div>
                
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg' src={blogInfo.image} alt="" />
                </div>
                <div className='px-40 py-10'>
                    <p className=''>by {blogInfo.author_name}</p>
                    <p className='mb-5'>published time: {blogInfo.published_date}</p>
                    <p className='font-semibold text-justify'>{blogInfo.details}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogDetails;