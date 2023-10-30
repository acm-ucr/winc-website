"use client";
import React from "react";
// style the component here
const Stat = ({ icon, stat, type }) => {
  return (
    <div
      className={`flex flex-row min-w-fit justify-center items-center rounded-full border-8 border-winc-yellow ring-8 ring-winc-orange m-3 text-winc-pink bg-winc-white w-80 h-36 mr-10 my-5 `}
    >
      <div className=" ml-4">{icon}</div>
      <div className="flex flex-col items-center w-11/12">
        <div className=" text-6xl font-bold">{stat}</div>
        <div className="text-winc-black text-2xl font-normal text-left">
          {type}
        </div>
      </div>
    </div>
  );
};

export default Stat;
