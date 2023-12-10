import './Header.css'
import image from "../../../assets/Cover/developer1.png"
import { FaDownload } from "react-icons/fa";


    

const Header = () => {
    const onButtonClick = () => {
        fetch("Resume of Mehedi Hasan.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume of Mehedi Hasan.pdf";
                alink.click();
            });
        });
    };
    return (
        <div className='headerBg'>
            <div className='min-h-screen flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl'>Hello! I'm</h2>
                <h1 className='text-7xl md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E76A18] to-[#C33764]'>Mehedi Hasan</h1>
                <p className='text-xl tracking-widest text-gray-700 font-bold'>MERN Stack Developer(Specialized on Front-end)</p>
                    <div className='btn btn-outline mt-10 '>
                        <button onClick={onButtonClick} className='uppercase text-xl text-gray-700 hover:text-white'>get resume </button><FaDownload />
                        {/* <button onClick={onButtonClick}>
                            GET RESUME
                        </button> */}
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