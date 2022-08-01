import React from "react";
import { bannerImg, funkylandIcon } from "../../assets/images/images";
import "../../assets/css/banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner h-full">
      <div
        className="flex max-w-md mx-auto items-center justify-center h-full relative"
        id="home"
      >
        <div className="flex flex-col w-full space-y-10">
          <img src={bannerImg} alt="" className="" />
          <Link to="/app/minting">
            <button className="banner-btn flex justify-center">
              Enter Funkyland
            </button>
          </Link>
        </div>
      </div>
      {/* <div
        className="flex flex-col mx-auto max-w-xl items-center py-14"
        id="home"
      >
        <img src={bannerImg} alt="" className="my-14" />
        <Link to="/app/minting">
          <button className="banner-btn flex justify-center">
            Enter Funkyland
          </button>
        </Link>
      </div> */}
    </div>
  );
}

export default Banner;
