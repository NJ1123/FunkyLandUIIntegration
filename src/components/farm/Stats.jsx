import React from "react";
import { bullAvatar } from "../../assets/images/images";

function Stats() {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 rounded-tl-xl rounded-tr-xl text-white text-2xl text-center">
        <div className="stat-box hidden md:block ">
          <h1>Total Funkies</h1>
          <p>15</p>
        </div>
        <div className="stat-box ">
          <h1>In Farm</h1>
          <div className="grid md:grid-cols-2">
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
        </div>
        <div className="stat-box ">
          <h1>At Barn</h1>
          <div className="grid md:grid-cols-2">
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
        </div>
        <div className="stat-box  ">
          <h1>🍇 Berries</h1>
          <p>513215</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
