import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';
import './ServiceDetails.css'
import ServiceWelcome from '../Components/ServiceWelcome/ServiceWelcome';

const ServiceDetails = () => {
    const location = useLocation()
    const noWelcomeNote = location.pathname.includes('serviceDetails/web') || location.pathname.includes('serviceDetails/ui') || location.pathname.includes('serviceDetails/graphic')
    return (
        <div>
            <Helmet>
                <title>DesignXcel | Service Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='serviceBanner'>
                <h1>Service Details</h1>
            </div>
            <div className='bg-gray-600'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row'>
                <div className=' bg-gray-800 md:w-72 text-white p-10 text-xl font-semibold mt-10 h-[450px] rounded-lg'>
                    <h2 className='text-5xl font-bold py-10'>Category</h2>
                    <ul className='menu space-y-4'>
                        <li className=''>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className=''>
                            <NavLink to="/serviceDetails/web">Web Development</NavLink>
                        </li>
                        <li>
                            <NavLink to="/serviceDetails/ui">UI/UX Design</NavLink>
                        </li>
                        <li>
                            <NavLink to="/serviceDetails/graphic">Graphic Design</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex-1'>
                    {noWelcomeNote || <ServiceWelcome></ServiceWelcome>}
                    <Outlet></Outlet>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;