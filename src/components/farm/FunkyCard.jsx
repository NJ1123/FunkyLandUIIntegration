import React from "react";
import { bullCard } from "../../assets/images/images";

function FunkyCard() {
  return (
    <div className="funkies-card text-white bg-black text-center mx-auto p-3 grid grid-cols-2 rounded-lg rounded-tl-none space-y-2">
      <div className="mx-auto rounded-lg col-span-2">
        <img src={bullCard} alt="Bull Card" />
      </div>
      <div className="text-2xl col-span-2">Bull 11</div>
      <>
        <div className="text-left text-[#DBD30F]">Stamina</div>
        <div className="text-right">50%</div>
      </>
      <div className="col-span-2">
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-[#DBFF00] h-2.5 rounded-full"
            style={{ width: "95%" }}
          ></div>
        </div>
      </div>
      <>
        <div className="text-left text-[#DBD30F]">$ Earned</div>
        <div className="text-right">1325</div>
      </>
      <>
        <div className="text-left text-[#DBD30F]">Time Staked</div>
        <div className="text-right">165 days</div>
      </>
    </div>
  );
}

export default FunkyCard;
