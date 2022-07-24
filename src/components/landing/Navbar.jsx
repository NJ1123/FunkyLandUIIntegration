import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import Logo from "../common/Logo";

function Navbar(props) {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav
        className={`bg-[#5E320A]  md:flex  md:justify-around drop-shadow-xl`}
      >
        <div className=" flex items-center p-3 md:p-0 justify-between md:justify-center">
          <div className="md:hidden grow flex justify-center">
            <Logo className=" h-10 w-auto md:h-16" />
          </div>

          <button
            className="outline-none mobile-menu-button items-end"
            onClick={toggle}
          >
            <svg
              className="w-6 h-6 text-white md:hidden"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul
          className={
            (!showNav ? "hidden" : "") +
            " text-center md:flex justify-around items-center py-2 transition space-y-3 md:space-y-0 md:py-5 md:space-x-12"
          }
        >
          <a href="#home">
            <li className="nav-item">Home</li>
          </a>
          <a href="#about_us">
            <li className="nav-item">About Us</li>
          </a>
          <a href="#funkies">
            <li className="nav-item">Funkies</li>
          </a>
          <a href="#berry">
            <li className="nav-item">Berry</li>
          </a>
          <a href="#roadmap">
            <li className="nav-item">Roadmap</li>
          </a>
          <a href="#community">
            <li className="nav-item">Community</li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
