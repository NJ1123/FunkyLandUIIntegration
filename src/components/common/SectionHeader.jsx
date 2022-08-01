import React from "react";

function SectionHeader({ children }) {
  return (
    <div className="flex justify-center pt-3">
      <div className="new-header relative flex justify-center border border-y-2 border-x-0 border-yellow-500 px-16 py-3">
        <div className="diamond h-2 w-2 bg-yellow-500 absolute top-0 -translate-y-1/2 rotate-45"></div>
        <div className="section-title">{children}</div>
        <div className="diamond h-2 w-2 bg-yellow-500 absolute bottom-0 translate-y-1/2 rotate-45"></div>
      </div>
    </div>
  );
}

export default SectionHeader;
