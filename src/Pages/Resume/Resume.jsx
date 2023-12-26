import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import './Resume.css'
import ResumeTemp from "../../assets/Resume/portfolio.pdf"
import Footer from '../Footer/Footer';

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Mehedi's Portfolio | Resume</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="resume">
                <h1>My Resume</h1>
            </div>
            <div className='max-w-7xl mx-auto p-10 bg-gray-200'>
                <iframe src={ResumeTemp} width="100%" height="900px" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Resume;