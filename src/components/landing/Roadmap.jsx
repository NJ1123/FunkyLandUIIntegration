import React from "react";
import SectionHeader from "../common/SectionHeader";
import RoadmapContainer from "./roadmap/RoadmapContainer";

function Roadmap() {
  return (
    <>
      <div className="section" id="roadmap">
        <SectionHeader>Roadmap</SectionHeader>
        {/* <div className="h-96 md-h-auto"> Add Image here </div> */}
        <RoadmapContainer />
      </div>
    </>
  );
}

export default Roadmap;
