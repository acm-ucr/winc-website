"use client";
import React from "react";
// style the component here
const Stat = ({ icon, stat, type }) => {
  return (
    <div
      className={`flex flex-row w-full h-full items-center rounded-full border-8 border-winc-yellow ring-8 ring-winc-orange mx-4 text-winc-pink bg-winc-white py-3`}
    >
      <div className=" w-5/12 ml-6">{icon}</div>
      <div className="flex flex-col justify-center w-8/12">
        <div className=" text-6xl font-bold">{stat}</div>
        <div className="text-winc-black text-2xl font-normal text-left">
          {type}
        </div>
      </div>
    </div>
  );
};

export default Stat;
