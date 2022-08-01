import React from "react";
import { funkylandIcon } from "../../assets/images/images";
import "../../assets/css/banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner h-full">
      <div
        className="flex max-w-6xl mx-auto items-center justify-center h-full relative"
        id="home"
      >
        <div className="grid md:grid-cols-2 md:gap-x-16 gap-y-16 md:gap-y-0 p-5">
          <div className="">
            <img src={funkylandIcon} alt="" className="" />
          </div>
          <div className="text-inika">
            <h2 className="section-title text-left text-white">
              Lorem ipsum dolor
            </h2>
            <p className="text-lg md:text-xl py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nisi, exercitationem debitis ut est, suscipit aliquid sed,
              molestias ex reiciendis velit eveniet fugiat adipisci vel! Minus
              hic veniam consequuntur eligendi?
            </p>
            <div className="text-center md:text-left">
              <Link to="/app/minting">
                <button className="banner-btn">Enter Funkyland</button>
              </Link>
            </div>
          </div>
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
