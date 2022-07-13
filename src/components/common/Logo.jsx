import React from "react";
import { logo } from "../../assets/images/images";

function Logo(props) {
  let classes;
  if (props.className) {
    classes = props.className;
  } else {
    classes = "h-16";
  }
  return (
    <>
      <img src={logo} alt="funkyland logo" className={`${classes}`} />
    </>
  );
}

export default Logo;
