/* eslint-disable no-unused-vars */
import React from "react";

// assets
import sateliteImg from "../assets/satelite2.jpg";

const Satelite = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 ">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">Rapidscat</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <button className="primary-btn ">Learn More</button>
          </div>
          <div className="">
            <img className="rounded-lg" src={sateliteImg} alt="satelite_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satelite;
