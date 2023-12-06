import './Header.css'
import image from "../../../assets/Cover/coverimg.png"
import { FaDownload } from "react-icons/fa";

const Header = () => {
    return (
        <div className="headerBg min-h-screen w-full relative">
            <div className='flex justify-evenly items-center'>
                <div className='text-white absolute top-[40%] left-[20%]'>
                    <h2 className='text-5xl'>Hello! I'm</h2>
                    <h1 className='text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E76A18] to-[#C33764]'>Mehedi Hasan</h1>
                    <p className='text-xl tracking-widest text-gray-300'>MERN Stack Developer</p>
                    <div className='btn btn-outline mt-10 text-white'>
                        <h2 className='uppercase text-xl'>get resume </h2><FaDownload />
                    </div>
                </div>
                <div>
                    <img className='h-[900px] absolute bottom-0 right-20' src={image} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Header;