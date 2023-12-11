import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import './Resume.css'
import ResumeTemp from "../../assets/Resume/resume.jpg"
import Footer from '../Footer/Footer';

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>DesignXcel | Resume</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="resume">
                <h1>My Resume</h1>
            </div>
            <div className='max-w-7xl mx-auto p-10 bg-gray-200'>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg' src={ResumeTemp} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Resume;