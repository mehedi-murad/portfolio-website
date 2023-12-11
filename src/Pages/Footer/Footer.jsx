import { FaBehance, FaDribbble, FaFacebookF, FaGithub, FaLinkedin, FaLocationArrow, FaMailBulk } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import './Footer.css'


const Footer = () => {
    return (
        <div className="footerBg flex flex-col md:flex-row justify-evenly px-20 py-24 gap-8">
            <div className="md:w-1/4 space-y-4 py-10">
                <div>
                    <Link to="/">
                        <h2 className="font-bold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#1D2671] to-[#C33764]">DESIGNXCEL</h2>
                    </Link>
                </div>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, similique. Suscipit tempore nulla, vel dolore dolorem earum ab sed laboriosam!</p>
            </div>

            <div className="footerLink text-white text-center">
                <h2 className="text-2xl uppercase font-semibold my-2">Useful Links</h2>
                <ul>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About</NavLink>
                    </li>
                    {/* <li>
                    <NavLink to="/services">Services</NavLink>
                    </li> */}
                    <li>
                    <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li>
                    <NavLink to="/blogForum">Blog</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contactForm">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-white text-center">
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
                        <Link to="https://www.facebook.com/mehedimurad08">
                            <FaFacebookF />
                        </Link>
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <Link to="https://www.linkedin.com/in/mehedi-murad-183a11208/">
                            <FaLinkedin></FaLinkedin>
                        </Link>
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <Link to="https://www.behance.net/mehedimurad">
                            <FaBehance />
                        </Link>
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                        <Link to="https://dribbble.com/DesignXcel">
                            <FaDribbble />
                        </Link>
                    </div>
                    <div className="bg-[#E76A18] hover:bg-white hover:text-gray-700 p-2 rounded-md">
                         <Link to="https://github.com/designxcel">
                            <FaGithub />
                         </Link>
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