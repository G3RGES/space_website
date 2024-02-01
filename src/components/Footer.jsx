/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white border-t-2 border-t-white px-5">
      <section className="max-w-[1200px] mx-auto  ">
        <div className="grid md:grid-cols-3 py-5 ">
          {/* first column */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left mb-3">
              Be Ready To Grow
            </h1>
            <p className="">
              Get exclusive {""}
              <span className="text-white font-bold ">updates</span> straight to
              your inbox.{" "}
            </p>
            <br />
            <div className="flex gap-1 items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none
                 focus:border-sky-500 focus:ring-2
                 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 rounded-md"
                placeholder="Email"
              />
              <button className="primary-btn">Subscribe</button>
            </div>
          </div>
          {/* second column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  <li className="">
                    <a className="" href="#">
                      Home
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      About
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      Services
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  <li className="">
                    <a className="" href="#">
                      Home
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      About
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      Services
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-1">
                  <HiLocationMarker />
                  <p className="">Sohag, Egypt</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <MdMessage />
                  <p>georgios.nashaat@gmail.com</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <MdCall />
                  <p>+20 01203346582</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
