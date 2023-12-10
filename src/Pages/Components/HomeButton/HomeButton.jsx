import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <div className='flex justify-center items-center'>
            <Link to="/">
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
        </div>
    );
};

export default HomeButton;