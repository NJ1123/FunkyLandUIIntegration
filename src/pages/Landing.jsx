import React from "react";
import Banner from "../components/landing/Banner";
import BerryTokens from "../components/landing/BerryTokens";
import Collection from "../components/landing/Collection";
import Community from "../components/common/Community";
import LearnMore from "../components/landing/LearnMore";
import Roadmap from "../components/landing/Roadmap";
import Navbar from "../components/landing/Navbar";
import ScrollUp from "react-scroll-up";
import "../assets/css/landing.css";
import { upArrow } from "../assets/images/images";

function Landing() {
  return (
    <div className="landing overflow-x-hidden ">
      <div>
        <div className="h-screen landing-top">
          <Navbar />
          <Banner />
        </div>
        <Collection />
        {/* TODO add farm mill image */}
        
        <BerryTokens />
        <Roadmap />
        <LearnMore />
        <Community />
      </div>
      <ScrollUp showUnder={20} easing={"easeOutCubic"} duration={500}>
        <img src={upArrow} alt="Scroll to top" className="invert" />
      </ScrollUp>
    </div>
  );
}

export default Landing;
