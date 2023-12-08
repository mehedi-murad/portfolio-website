import { FaAngleDoubleRight } from "react-icons/fa";
import webImg from "../../assets/website.png"
import vectorImg from "../../assets/vector.png"
import './Services.css'
import { Parallax } from "react-parallax";
import webBanner from "../../assets/Cover/webbg.png"

const Services = () => {
    return (
        <Parallax blur={2.5} bgImage={webBanner} bgImageAlt="the cat" strength={200}>
        <div className="p-10 webBg">
            <h1 className="font-bold text-4xl text-center">My Expertise</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto md:p-20 mt-10">
            <div className="bg-[#FFF3EA] h-[400px] text-gray-700 p-20 space-y-4 rounded-lg flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <div className="mb-8">
                            <img className="w-20" src={webImg} alt="" />
                        </div>
                        <h2 className="text-3xl font-bold uppercase">Web Development</h2>
                    </div>
                    <div className="flip-box-back space-y-4">
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> HTML/CSS</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> JavaScript</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> React</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> tailwindCSS</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> MongoDB</p>
                        </div>
                        <div>
                            <button className="bg-gray-600 px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block">Service Details </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#FFF3EA] h-[400px] text-gray-700 p-20 space-y-4 rounded-lg flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <div className="mb-8">
                            <img className="w-20" src={vectorImg} alt="" />
                        </div>
                        <h2 className="text-3xl font-bold uppercase">Graphic <br /> Design</h2>
                    </div>
                    <div className="flip-box-back space-y-4">
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> Illustration</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> Logo Design</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> Branding</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaAngleDoubleRight /><p> Photoshop</p>
                        </div>
                        <div>
                            <button className="bg-gray-600 px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block">Service Details </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </Parallax>
        
    );
};

export default Services;