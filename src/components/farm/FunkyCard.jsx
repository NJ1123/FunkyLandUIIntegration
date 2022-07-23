import React from "react";
import { bullCard } from "../../assets/images/images";
import ProgressBar from "../common/ProgressBar";

function FunkyCard({ type }) {
  const { name, stamina, earned, timeStaked } = {
    name: "Bull 11",
    stamina: "50%",
    earned: 364,
    timeStaked: 90,
  };
  return (
    <>
      <div className="">
        <div className="funkies-card text-white bg-black text-center p-3 grid grid-cols-2 rounded-lg rounded-tl-none space-y-2">
          <div className="mx-auto rounded-lg col-span-2">
            <img src={bullCard} alt="Bull Card" />
          </div>
          <div className="text-2xl col-span-2">{name}</div>
          <>
            <div className="text-left text-[#DBD30F]">Stamina</div>
            <div className="text-right">{stamina}</div>
          </>
          <div className="col-span-2">
            <ProgressBar barClass="bg-[#DBFF00]" width={stamina} />
          </div>
          <>
            <div className="text-left text-[#DBD30F]">$ Earned</div>
            <div className="text-right">{earned}</div>
          </>
          <>
            <div className="text-left text-[#DBD30F]">Time Staked</div>
            <div className="text-right">{timeStaked} days</div>
          </>
        </div>
        <div className="justify-center col-span-2 my-5">
          <button className="text-center text-xl bg-[#8FC27E] shadow-md rounded-lg rounded-tl-none py-3 px-6 w-full">
            {type === "farm" ? "Return to Barn" : "Send to Farm"}
          </button>
        </div>
      </div>
    </>
  );
}

export default FunkyCard;
