import React from "react";
import Navbar from "../components/minting/Navbar";
import "../assets/css/farm.css";
import ConnectBtn from "../components/common/ConnectBtn";

function Farm() {
  return (
    <>
      <div className="farm">
        <Navbar />
        <div>Farm</div>
        <div className=" max-w-6xl mx-auto">
          <div className="build-army bg-[#B5D469] p-5">
            <h2 className="text-3xl text-center font-bold">Build Your Army</h2>
            <br />
            <ConnectBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Farm;
