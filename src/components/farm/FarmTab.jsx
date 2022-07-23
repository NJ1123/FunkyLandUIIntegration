import React from "react";
import ClaimAmount from "./ClaimAmount";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";

function FarmTab() {
  return (
    <div>
      <div>
        <Stats />
        <div className="funky-card-group px-5">
          <ClaimAmount />
          <div className="grid grid-cols-4 gap-10 mt-10">
            <FunkyCard type="farm" />
            <FunkyCard type="farm" />
            <FunkyCard type="farm" />
            <FunkyCard type="farm" />
            <FunkyCard type="farm" />
            <FunkyCard type="farm" />
            <FunkyCard type="farm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmTab;
