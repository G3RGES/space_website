/* eslint-disable no-unused-vars */
import React from "react";

// assets
import mountin from "../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4 ">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* hero section */}
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            <button
              className="bg-blue-500 text-white hover:bg-blue-600
            py-1 px-4 rounded-md duration-300"
            >
              Learn More
            </button>
          </div>
          <div className=""></div>
        </div>
      </div>
      {/* surface section */}
      <img
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
        src={mountin}
        alt="surface"
      />
      {/* bottom gradient overlay */}
      <div
        className="absolute bottom-0 w-full z-30
       bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px]
       sm:h-[50px] md:h-[60px] "
      ></div>
    </div>
  );
};

export default Hero;
