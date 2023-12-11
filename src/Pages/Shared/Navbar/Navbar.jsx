import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
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
              <NavLink to="/hireMe">Hire Me</NavLink>
            </li>
            <li>
              <NavLink to="/blogForum">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contactForm">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center logo">
        <Link to="/">
            <h2 className="font-bold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#1D2671] to-[#C33764]">DESIGN<span className="">XCEL</span></h2>
        </Link>
      </div>
      <div className="navbar-end">
      
        <Link to="/hireMe">
          <button className="btn btn-outline hidden lg:block">HIRE ME</button>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
