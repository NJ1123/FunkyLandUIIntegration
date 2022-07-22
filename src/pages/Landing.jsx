import React from "react";
import Banner from "../components/landing/Banner";
import BerryTokens from "../components/landing/BerryTokens";
import Collection from "../components/landing/Collection";
import Community from "../components/common/Community";
import Footer from "../components/common/Footer";
import Intro from "../components/landing/Intro";
import LearnMore from "../components/landing/LearnMore";
import Roadmap from "../components/landing/Roadmap";
import Navbar from "../components/landing/Navbar";
import "../assets/css/landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className={` cloud-bg overflow-x-hidden`}>
        <div>
          <Navbar />
          <Banner />

          <div
            data-aos="fade-up"
            // data-aos-offset="500"
            // data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <Intro />
          </div>

          <Collection />

          <div
            data-aos="fade-down"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <BerryTokens />
          </div>
          <Roadmap />
          <LearnMore />
          <Community />
        </div>
      </div>
    </div>
  );
}

export default Landing;
