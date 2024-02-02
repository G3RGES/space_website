/* eslint-disable no-unused-vars */
import React from "react";

// assets
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm
    py-4 sm:py-4 "
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl">
            <img className="w-10" src={Logo} alt="logo" />
            <span className="">TCJ-Space</span>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <li className="">
                <a className="" href="#">
                  About
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  Technology
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  Galaxy
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  Satelite
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
