import React from "react";

function ProgressBar({ barColor, width, bgClass, barClass }) {
  return (
    <div>
      <div class={`w-full rounded-full h-2.5 bg-gray-700 ${bgClass}`}>
        <div
          class={`bg-[#DBFF00] h-2.5 rounded-full ${barClass}`}
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
