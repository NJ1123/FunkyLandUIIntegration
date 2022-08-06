import React, { useEffect } from "react";
import { funkiesBear, funkiesBull } from "../../assets/images/images";

import { Link } from "react-router-dom";
import SectionHeader from "../common/SectionHeader";

function Collection() {
  return (
    <>
      <div className="section mt-20 md:mt-0" id="funkies">
        <div>
          <SectionHeader>Funkies</SectionHeader>
        </div>

        <div className="section-div-img mx-8">
          <div className="md:w-3/5 text-left mt-10">
            <h3 className="section-topic text-left md:text-center">BULLS</h3>
            <div className="w-full mx-auto my-10 md:hidden">
              <img src={funkiesBull} alt="Intro" />
            </div>
            <p>
              Bulls are the disciplined and experts in harvesting $BERRY. They
              are the main source of production of $BERRY in FUNKYLAND.
            </p>
          </div>
          <div className="px-10 m-10 md:w-2/5 md:block hidden">
            <img src={funkiesBull} alt="Intro" />
          </div>
        </div>

        <div className="section-div-img mx-8">
          <div className="px-10 m-10 md:w-2/5 md:block hidden">
            <img src={funkiesBear} alt="Intro" />
          </div>
          <div className="md:w-3/5 text-left">
            <h3 className="section-topic text-left md:text-center">BEARS</h3>
            <div className="w-full mx-auto my-10 md:hidden">
              <img src={funkiesBear} alt="Intro" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 150 essentially unchanged
            </p>
          </div>
        </div>
        <Link to="/minting">
          <button className="section-btn">Mint Now</button>
        </Link>
      </div>
    </>
  );
}

export default Collection;
