/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white border-t-2 border-t-white">
      <section className="max-w-[1200px] mx-auto  ">
        <div className="grid md:grid-cols-3 py-5 ">
          {/* first column */}
          <div className="">
            <h1 className="">Be Ready To Grow</h1>
            <p className="">
              Get exclusive {""}
              <span className="text-white font-bold ">updates</span> straight to
              your inbox.{" "}
            </p>
            <br />
            <div className="">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none
                 focus:border-sky-500 focus:ring-2
                 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 rounded-lg"
                placeholder="Email"
              />
              <button className="">OK</button>
            </div>
          </div>
          {/* second column */}
        </div>
      </section>
    </div>
  );
};

export default Footer;
