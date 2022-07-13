import React from "react";
import { funkylandIcon } from "../../assets/images/images";

function BerryTokens() {
  return (
    <>
      <div className="section flex items-center" id="berry">
        <div>
          <div>
            <h2 className="section-title ">Berry</h2>
            <h4 className="section-subtitle ">Tokens</h4>
          </div>

          <div className="section-div-img mx-8">
            <div className="m-10 md:w-2/5">
              <img src={funkylandIcon} alt="Intro" />
            </div>
            <div className="md:w-3/5 ">
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 150 essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="section-btn">Berrynomics</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BerryTokens;
