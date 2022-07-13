import React from "react";
import { phaseActive, phaseInactive } from "../../assets/images/images";
import Status from "../common/Status";

function Phase(props) {
  const { phaseNum, phaseName, active, completed } = props;
  return (
    <>
      <div className="w-40 text-center">
        {completed ? (
          <img src={phaseActive} alt="Current Phase" />
        ) : (
          <img src={phaseInactive} alt="Phase" />
        )}
        <div>Phase {phaseNum}</div>
        <div className="uppercase">{phaseName}</div>

        {completed ? (
          <Status name="Completed" type="success" />
        ) : active ? (
          <Status name="Live" type="danger" />
        ) : (
          ""
        )}
        {/* <Status name="avcd" type="success" /> */}
      </div>
    </>
  );
}

export default Phase;
