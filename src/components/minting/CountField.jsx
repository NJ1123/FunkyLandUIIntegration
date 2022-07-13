import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function CountField() {
  const [mintCount, setMintCount] = useState(1);

  const decrement = () => {
    if (mintCount > 1) setMintCount((prevState) => prevState - 1);
  };

  const increment = () => {
    setMintCount((prevState) => prevState + 1);
  };
  return (
    <div className="counter">
      <div className=" flex items-center text-2xl justify-center">
        <div className="decrement" onClick={decrement}>
          <AiOutlineMinusCircle />
        </div>
        <div className="count px-16 py-3  bg-gradient-to-b from-[#6DA384] to-[#7ABCA3] rounded-3xl mx-5 text-white">
          {mintCount}
        </div>
        <div className="increment" onClick={increment}>
          <AiOutlinePlusCircle />
        </div>
      </div>
    </div>
  );
}

export default CountField;
