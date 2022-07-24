import React from "react";

function RoadmapItem({ data }) {
  return (
    <div className="roadmap-item">
      <div className="roadmap-item-content">
        <div className="text-lg md:text-xl">
          <div>Chapter {data.chapter}</div>
          <div className="">{data.title}</div>
        </div>
        <p>{data.description}</p>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
}

export default RoadmapItem;
