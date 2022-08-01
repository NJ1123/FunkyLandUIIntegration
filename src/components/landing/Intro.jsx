import React from "react";
import { funkylandIcon } from "../../assets/images/images";

function Intro() {
  return (
    <div ds>
      <div className="section flex items-center pt-16" id="about_us">
        <div>
          <h2 className="section-title ">FUNKYLAND</h2>
          <div className="section-div-img mx-8">
            <div className=" m-10 md:w-2/5">
              <img src={funkylandIcon} alt="Intro" />
            </div>
            <div className="md:w-3/5">
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 150 essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <a
                href="https://docs.funkyland.org/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="section-btn">Read Whitepaper</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
