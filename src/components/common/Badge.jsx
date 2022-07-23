import React from "react";
import { badge } from "../../assets/images/images";

function Badge({ number }) {
  return (
    <>
      <div className="relative text-center w-max">
        <img src={badge} alt="Badge" className="w-[30px]" />
        <div className="text-sm absolute top-[10px] -translate-y-1/4 left-1/2 -translate-x-1/2">
          {number}
        </div>
      </div>
    </>
  );
}

export default Badge;
