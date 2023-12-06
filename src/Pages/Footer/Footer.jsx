import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLocationArrow, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'


const Footer = () => {
    return (
        <div className="footerBg flex justify-evenly px-20 py-24 gap-8">
            <div className="w-1/4 space-y-4 py-10">
                <div>
                    <Link to="/">
                        <h2 className="font-bold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#1D2671] to-[#C33764]">DESIGN<span className="">XCEL</span></h2>
                    </Link>
                </div>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, similique. Suscipit tempore nulla, vel dolore dolorem earum ab sed laboriosam!</p>
            </div>

            <div className="footerLink text-white text-center">
                <h2 className="text-2xl uppercase font-semibold my-2">Useful Links</h2>
                <ul>
                    <li>
                    <a>Home</a>
                    </li>
                    <li>
                    <a>About</a>
                    </li>
                    <li>
                    <a>Services</a>
                    </li>
                    <li>
                    <a>Resume</a>
                    </li>
                    <li>
                    <a>Blog</a>
                    </li>
                    <li>
                    <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="text-white">
                <h2 className="text-2xl uppercase font-semibold my-2">Service Lists</h2>
                <h3>Service 1</h3>
                <h3>Service 1</h3>
                <h3>Service 1</h3>
                <h3>Service 1</h3>
            </div>

            <div className=" text-white space-y-4">
                <h2 className="text-2xl uppercase font-semibold">Follow Me</h2>
                <div className="flex items-center gap-4 text-white">
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <FaFacebookF />
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <FaInstagram />
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <FaBehance />
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <FaDribbble />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-[#E76A18]">
                        <FaMailBulk></FaMailBulk>
                    </div>
                    <p>mehedimurad08@gmail.com</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-[#E76A18]">
                        <FaLocationArrow></FaLocationArrow>
                    </div>
                    <p>Eastern Housing, Mirpur, 12</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;