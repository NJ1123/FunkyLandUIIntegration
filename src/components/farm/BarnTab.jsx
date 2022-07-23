import React from "react";
import FunkyCard from "./FunkyCard";
import Stats from "./Stats";

function BarnTab() {
  return (
    <div>
      <div>
        <Stats />
        <div className="funky-card-group  px-2 md:px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10">
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
