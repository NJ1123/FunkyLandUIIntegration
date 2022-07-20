import React from "react";
import { bullAvatar } from "../../assets/images/images";

function Stats() {
  return (
    <div>
      <div className="grid grid-cols-6 rounded-tl-xl rounded-tr-xl text-white text-2xl text-center">
        <div className="stat-box  ">
          <h1>Total Funkies</h1>
          <p>15</p>
        </div>
        <div className="stat-box ">
          <h1>In Farm</h1>
          <p className="flex justify-around items-center">
            5
            <span>
              <img src={bullAvatar} alt="Bull" />
            </span>
          </p>
          <p className="flex justify-around items-center">
            5
            <span>
              <img src={bullAvatar} alt="Bull" />
            </span>
          </p>
        </div>
        <div className="stat-box  ">
          <h1>At Barn</h1>
          <p className="flex justify-around items-center">
            5
            <span>
              <img src={bullAvatar} alt="Bull" />
            </span>
          </p>
          <p className="flex justify-around items-center">
            5
            <span>
              <img src={bullAvatar} alt="Bull" />
            </span>
          </p>
        </div>
        <div className="stat-box  ">
          <h1>🍇 Berries</h1>
          <p>513215</p>
        </div>
        <div className="stat-box col-span-2  ">
          <h1>$BERRY Available for Claim</h1>
          <p>513215</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
