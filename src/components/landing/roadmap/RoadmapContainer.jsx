import React from "react";
import RoadmapData from "./data";
import RoadmapItem from "./RoadmapItem";
import "../../../assets/css/roadmap.css";
function RoadmapContainer() {
  return (
    <>
      {RoadmapData.length > 0 && (
        <div className="roadmap-container">
          {RoadmapData.map((data, idx) => (
            <RoadmapItem data={data} key={idx} /> 
          ))}
        </div>
      )}
    </>
  );
}

export default RoadmapContainer;
