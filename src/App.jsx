/* eslint-disable no-unused-vars */
import React from "react";

// assets
import bgVideo from "./assets/earth-bg.mp4";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1] "
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      {/* Services Section */}
      <Services />
      <Banner />
    </div>
  );
};

export default App;
