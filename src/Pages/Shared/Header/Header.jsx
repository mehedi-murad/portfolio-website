import './Header.css'
import image from "../../../assets/Cover/developer1.png"
import { FaDownload } from "react-icons/fa";
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"


    

const Header = () => {
    
    const onButtonClick = () => {
        fetch("portfolio.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume of Mehedi Hasan Murad.pdf";
                alink.click();
            });
        });
    };

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className='headerBg'>
            <div className='min-h-screen flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto'>
            <div className='text-center space-y-4'>
                <h2 data-aos="fade-right" className='text-5xl text-gray-700 font-semibold'>Hello! I'm</h2>
                {/* <h1 className='text-7xl md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8364e8] to-[#d397fa]'>Mehedi Hasan</h1> */}
                <h1 data-aos="fade-up" className='text-7xl md:text-[80px] font-bold text-[#EB4D60] md:text-white'>Mehedi Hasan</h1>
                <p className='text-xl tracking-widest text-gray-700 font-bold'>WEB Developer(Specialized on Front-end)</p>
                    <div data-aos="fade-up" className='btn btn-outline'>
                        <button onClick={onButtonClick} className='uppercase text-xl text-gray-700 hover:text-white'>get resume </button><FaDownload />
                        
                     </div>
            </div>
            <div className=''>
                <img className='md:h-[700px]' src={image} alt="" />
            </div>
            </div>
        </div>
        
    );
};

export default Header;