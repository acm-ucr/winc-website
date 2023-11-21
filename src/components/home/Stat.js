"use client";
import React from "react";

// style the component here
const Stat = ({ icon, stat, type }) => {
  return (
    <div
      className={`flex flex-row w-11/12 h-full items-center rounded-full border-8 border-winc-yellow ring-8 ring-winc-orange mx-4 text-winc-pink bg-winc-white py-3`}
    >
      <div className="ml-6 mr-0 w-1/12">{icon}</div>
      <div className="flex flex-col justify-center w-8/12">
        <div className=" text-center text-3xl sm:text-6xl font-bold sm:text-left">
          {stat}
        </div>
        <div className=" text-winc-black text-xl sm:text-2xl font-normal text-center sm:text-left">
          {type}
        </div>
      </div>
    </div>
  );
};

export default Stat;
