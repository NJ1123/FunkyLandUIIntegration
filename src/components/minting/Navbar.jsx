import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import ConnectBtn from "../common/ConnectBtn";
import Logo from "../common/Logo";

function Navbar(props) {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav className={`md:flex  md:justify-around items-center md:py-1`}>
        <div className=" flex items-center p-3 md:p-0 justify-between md:justify-center">
          <div className="grow flex justify-center">
            <Logo className=" h-10 w-auto md:h-16 md:py-2" />
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
            " text-center md:flex justify-around items-center py-2 transition space-y-3 md:space-y-0 md:space-x-12"
          }
        >
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <a href="/app/minting">
            <li className="nav-item">Minting</li>
          </a>
          <a href="/app/farm">
            <li className="nav-item">Farm</li>
          </a>
          <a href="#berry">
            <li className="nav-item">Farmmill</li>
          </a>
          <a href="#berry">
            <li className="nav-item">Gallery</li>
          </a>
          <a href="https://docs.funkyland.org/">
            <li className="nav-item">Whitepaper</li>
          </a>
          {/* <Link to="/app/minting">
            <button className="connect-btn flex justify-center ">
              Connect Wallet
            </button>
          </Link> */}
          <ConnectBtn />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
