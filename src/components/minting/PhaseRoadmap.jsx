import React from "react";
import Phase from "./Phase";

function PhaseRoadmap() {
  const phases = [
    { phaseNum: "1", phaseName: "Funkydemic", completed: true, active: false },
    {
      phaseNum: "2",
      phaseName: "Farming Era",
      completed: false,
      active: true,
    },
    {
      phaseNum: "3",
      phaseName: "Rebellion Era",
      completed: false,
      active: false,
    },
    {
      phaseNum: "4",
      phaseName: "Age of Discovery",
      completed: false,
      active: false,
    },
    {
      phaseNum: "5",
      phaseName: "War of the Metaverse",
      completed: false,
      active: false,
    },
    { phaseNum: "6", phaseName: "Harmony", completed: false, active: false },
  ];
  return (
    <>
      <div className="max-w-4xl flex mx-auto gap-16 py-20">
        {phases.map((phase) => (
          <Phase
            phaseNum={phase.phaseNum}
            phaseName={phase.phaseName}
            completed={phase.completed}
            active={phase.active}
          />
        ))}
      </div>
    </>
  );
}

export default PhaseRoadmap;
