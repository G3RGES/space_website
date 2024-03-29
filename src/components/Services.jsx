/* eslint-disable no-unused-vars */
import React from "react";

// icons
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
    icon: <GiGalaxy className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
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
    <div className="bg-black text-white relative z-50 ">
      <div className="container">
        <div className="min-h-[400px] ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {serviceData.map((service, idx) => (
              <div
                key={idx}
                data-aos="zoom-in-up"
                data-aos-delay={service.aosDelay}
                className="min-h-[180px] flex flex-col justify-center items-center gap-2
                bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8
                px-3 w-full lg:w-[300px] mx-auto "
              >
                {service.icon}
                <h1 className="">{service.title}</h1>
                <p className="">{service.content}</p>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <img
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative
            z-[0] "
            src={wave}
            alt="wave"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
