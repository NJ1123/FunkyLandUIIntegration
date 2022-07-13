import React from "react";
import { land } from "../../assets/images/images";

function Footer() {
  return (
    <div className="bg-[#4FACD4] overflow-clip flex flex-col">
      <div className="h-48">
        <h3>Footer</h3>
      </div>
      <img
        src={land}
        alt="bush"
        className="w-full content-end translate-y-1/4"
      />
    </div>
  );
}

export default Footer;
