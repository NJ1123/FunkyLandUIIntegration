import React from "react";
import { bannerImg, funkylandIcon } from "../../assets/images/images";
import "../../assets/css/banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="banner flex flex-col mx-auto max-w-xl h-screen  flex items-center"
      id="home"
    >
      <img src={bannerImg} alt="" className="my-14" />
      <Link to="/app/minting">
        <button className="banner-btn flex justify-center">
          Enter Funkyland
        </button>
      </Link>
    </div>
  );
}

export default Banner;
