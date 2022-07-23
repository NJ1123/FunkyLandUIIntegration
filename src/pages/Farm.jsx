import React from "react";
import Navbar from "../components/minting/Navbar";
import "../assets/css/farm.css";
import ConnectBtn from "../components/common/ConnectBtn";
import { Tab } from "@headlessui/react";
import FarmTab from "../components/farm/FarmTab";
import BarnTab from "../components/farm/BarnTab";
import Leaderboard from "../components/farm/Leaderboard";
import Badge from "../components/common/Badge";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const selectedTabClasses = (selected) =>
  classNames(
    "w-full rounded-2xl py-2.5 text-2xl section-topic text-center",
    " focus:outline-none ",
    selected
      ? "bg-[#75C767] shadow ring ring-[#75C767] ring-1"
      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
  );

const tabPanelClasses = classNames(
  "rounded-xl",
  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
);

function Farm() {
  return (
    <>
      <div className="farm">
        <Navbar />
        <div className="w-full max-w-6xl mx-auto px-2 py-16 sm:px-0">
          <Tab.Group>
            <div className="flex">
              {/* <div className="section-topic  md:pr-10">Farm</div> */}
              <Tab.List className="flex space-x-1 rounded-2xl flex-grow tab-bg tab-border">
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  FARM (10)
                </Tab>
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  BARN (10)
                </Tab>
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  LEADERBOARD
                </Tab>
                {/* <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  LIVE
                </Tab> */}
              </Tab.List>
            </div>
            <Tab.Panels className="mt-2 rounded-xl">
              <Tab.Panel className={tabPanelClasses}>
                <FarmTab />
              </Tab.Panel>
              <Tab.Panel className={tabPanelClasses}>
                <BarnTab />
              </Tab.Panel>
              <Tab.Panel className={tabPanelClasses}>
                <Leaderboard />
              </Tab.Panel>
              {/* <Tab.Panel className={tabPanelClasses}>Content 4</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}

export default Farm;
