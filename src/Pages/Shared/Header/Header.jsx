import './Header.css'
import image from "../../../assets/Cover/developer1.png"
import { FaDownload } from "react-icons/fa";

const Header = () => {
    return (
        <div className='headerBg'>
            <div className='min-h-screen flex justify-center items-center max-w-7xl mx-auto'>
            <div className=''>
                <h2 className='text-5xl'>Hello! I'm</h2>
                <h1 className='text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E76A18] to-[#C33764]'>Mehedi Hasan</h1>
                <p className='text-xl tracking-widest text-white'>MERN Stack Developer</p>
                    <div className='btn btn-outline mt-10 '>
                        <h2 className='uppercase text-xl text-gray-700 hover:text-white'>get resume </h2><FaDownload />
                     </div>
            </div>
            <div className=''>
                <img className='h-[700px]' src={image} alt="" />
            </div>
            </div>
        </div>
        
    );
};

export default Header;