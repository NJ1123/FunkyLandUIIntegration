import React from "react";
import RoadmapContainer from "./roadmap/RoadmapContainer";

function Roadmap() {
  return (
    <>
      <div className="section" id="roadmap">
        <h2 className="section-title ">Roadmap</h2>
        {/* <div className="h-96 md-h-auto"> Add Image here </div> */}
        <RoadmapContainer />
      </div>
    </>
  );
}

export default Roadmap;
