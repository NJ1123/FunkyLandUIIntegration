import React from "react";
import { bullCard } from "../../assets/images/images";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";

function FarmTab() {
  return (
    <div>
      <div>
        <Stats />

        <div className="grid grid-cols-4 funky-card-group">
          <FunkyCard />
          <FunkyCard />
          <FunkyCard />
          <FunkyCard />
        </div>
      </div>
    </div>
  );
}

export default FarmTab;
