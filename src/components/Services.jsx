/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import { GiGalaxy } from "react-icons/gi";

// assets
import wave from "../assets/wave Gif.gif";

const serviceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="min-h-[400px] ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {serviceData.map((data, idx) => (
              <div key={idx} className=""></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
