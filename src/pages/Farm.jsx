import React from "react";
import Navbar from "../components/minting/Navbar";
import "../assets/css/farm.css";
import ConnectBtn from "../components/common/ConnectBtn";
import LiveUpdatesbar from "../components/liveUpdates/LiveUpdatesbar";
import { Tab } from "@headlessui/react";
import FarmTab from "../components/farm/FarmTab";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const selectedTabClasses = (selected) =>
  classNames(
    "w-full rounded-lg py-2.5 text-2xl section-topic text-center",
    " focus:outline-none ",
    selected
      ? "bg-[#75C767] shadow ring ring-[#75C767] ring-1"
      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
  );

function Farm() {
  return (
    <>
      <div className="farm">
        <Navbar />
        <div className="section-title">Farm</div>
        <div className="w-full max-w-6xl mx-auto px-2 py-16 sm:px-0">
          <Tab.Group>
            <div className="flex">
              {/* <div className="section-topic  md:pr-10">Farm</div> */}
              <Tab.List className="flex space-x-1 rounded-xl flex-grow tab-bg">
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  FARM (10)
                </Tab>
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  BARN (10)
                </Tab>
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  LEADERBOARD
                </Tab>
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  ACTIVITIES
                </Tab>
                <Tab className={({ selected }) => selectedTabClasses(selected)}>
                  LIVE
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels className="mt-2">
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                Content 1
                <FarmTab />
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                Content 2
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                Content 3
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                Content 4
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                Content 5
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}

export default Farm;
