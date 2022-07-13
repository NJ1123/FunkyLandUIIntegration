import React, { useEffect } from "react";
import { funkylandIcon } from "../../assets/images/images";

import AOS from "aos";
import "aos/dist/aos.css";

function Collection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="section" id="funkies">
        <div>
          <h2 className="section-title ">Funkies</h2>
          <h4 className="section-subtitle ">Funky Collection</h4>
        </div>

        <div
          className="section-div-img mx-8"
          data-aos="fade-left"
          // data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <div className=" m-10 md:w-2/5 md:block hidden">
            <img src={funkylandIcon} alt="Intro" />
          </div>
          <div className="md:w-3/5 text-left">
            <h3 className="section-topic">Bulls</h3>
            <div className="w-full mx-auto my-10 md:hidden">
              <img src={funkylandIcon} alt="Intro" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 150 essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div
          className="section-div-img mx-8"
          data-aos="fade-right"
          // data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <div className="md:w-3/5 text-left md:text-right">
            <h3 className="section-topic">Bears</h3>
            <div className="w-full mx-auto my-10 md:hidden">
              <img src={funkylandIcon} alt="Intro" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 150 essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button>Read Whitepaper</button>
          </div>
          <div className="m-10 md:w-2/5 md:block hidden">
            <img src={funkylandIcon} alt="Intro" />
          </div>
        </div>

        <button className="section-btn">Mint Now</button>
      </div>
    </>
  );
}

export default Collection;
