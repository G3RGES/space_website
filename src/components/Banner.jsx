/* eslint-disable no-unused-vars */
import React from "react";

// assets
import sateliteImg from "../assets/satelite1.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
          <div className="">
            <img className="" src={sateliteImg} alt="satelite_img" />
          </div>
          <div className="">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1 className="">Rapidscat</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae reprehenderit expedita corporis, non doloremque.
              Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eos molestiae reprehenderit
              expedita corporis, non doloremque. Consequatur consectetur
              quisquam qui sunt.
            </p>
            <button className="">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
