import React from "react";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";

function BarnTab() {
  return (
    <div>
      <div>
        <Stats />
        <div className="funky-card-group px-5">
          <div className="grid grid-cols-4 gap-10">
            <FunkyCard type="barn" />
            <FunkyCard type="barn" />
            <FunkyCard type="barn" />
            <FunkyCard type="barn" />
            <FunkyCard type="barn" />
            <FunkyCard type="barn" />
            <FunkyCard type="barn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarnTab;
