import React from "react";

function Status(props) {
  const { name, type } = props;
  const success = "bg-[#29B168]";
  const danger = "bg-[#D82A2A]";
  const bgColor =
    type === "success" ? success : type === "danger" ? danger : "";
  return (
    <>
      <div className={`text-white px-2 ${bgColor} rounded-full`}>{name}</div>
    </>
  );
}

export default Status;
