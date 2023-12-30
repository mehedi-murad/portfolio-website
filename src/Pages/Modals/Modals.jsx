import React from 'react';

const Modals = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = e => {
        if (e.target.id === 'frame') onClose();
    };

    return (
        <div
            id='frame'
            onClick={handleClose}
            className='fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm w-[600px]'
        >
            <div className='w-auto z-50 relative'>
                <div className='flex justify-end'>
                    <button className='text-black text-xl' onClick={() => onClose()}>
                        X
                    </button>
                </div>
                <div className='flex justify-center items-center z-50'>{children}</div>
            </div>
        </div>
    );
};

export default Modals;
