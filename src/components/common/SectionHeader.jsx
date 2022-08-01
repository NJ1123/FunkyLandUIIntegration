import React from "react";

function SectionHeader({ children }) {
  return (
    <div className="flex justify-center pt-3">
      <div className="new-header relative flex justify-center border border-y-2 border-x-0 border-[#E3E800] px-16 py-5 items-center">
        <div className="diamond h-5 w-5 bg-[#00F8BC] border-4 border-[#624600] absolute top-0 -translate-y-1/2 rotate-45"></div>
        <div className="section-title">{children}</div>
        <div className="diamond h-5 w-5 bg-[#00F8BC] border-4 border-[#624600] absolute bottom-0 translate-y-1/2 rotate-45"></div>
      </div>
    </div>
  );
}

export default SectionHeader;
