import React from "react";
import ProgressBar from "../common/ProgressBar";

function ClaimAmount() {
  const width = "20%";
  const berryAmt = "25010";
  return (
    <div>
      <div className="grid grid-cols-4 max-w-3xl mx-auto place-items-center bg-[#064116] bg-opacity-50 p-5 text-center text-white text-xl md:text-2xl ring-2 ring-[#8FC27E] rounded-md rounded-tl-none">
        <div className="">Claim $BERRY</div>
        <div className="place-self-stretch space-y-5 col-span-2 px-3">
          <div>🍇 {berryAmt}</div>
          <ProgressBar
            barColor="#8E0ECA"
            width={width}
            barClass="bg-[#8E0ECA] h-5 rounded-none progress-bar  "
            bgClass="bg-black h-5 rounded-none progress-bar"
          />
        </div>
        <div>
          <button className="bg-white px-5 md:px-10 py-2 md:py-3 text-xl rounded-3xl text-black">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClaimAmount;
