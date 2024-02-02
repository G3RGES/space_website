/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

// assets
import bgVideo from "./assets/earth-bg.mp4";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Rapidscat from "./components/Rapidscat";
import Satelite from "./components/Satelite";
import Footer from "./components/Footer";

// aos
import AOS from "aos";
import "aos/dist/aos.css"; // => include styles

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

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
      <Rapidscat />
      <Satelite />

      {/*  Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
