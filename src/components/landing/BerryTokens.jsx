import React from "react";
import { funkylandIcon } from "../../assets/images/images";

function BerryTokens() {
  return (
    <>
      <div className="bg-bgPrimaryDark ">
        <div className="section md:pt-16 flex items-center" id="berry">
          <div>
            <div className="section-div-img mx-8">
              <div className="md:w-3/5">
                <h2 className="section-topic text-left">$Berry Tokens</h2>
                <p className="text-left pt-6">
                  Berry is the mian in game currency.It will be used for buying
                  in game items and also it is given to all the funky holders
                  when they are in farm (stake).
                </p>
                <div className="text-left">
                  <a
                    href="https://docs.funkyland.org/berrynomics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="section-btn">Berrynomics</button>
                  </a>
                </div>
              </div>
              <div className="md:w-2/5">
                <img src={funkylandIcon} alt="Intro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BerryTokens;
