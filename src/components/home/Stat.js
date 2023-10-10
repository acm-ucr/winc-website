"use client";
import React from "react";
// style the component here
const Stat = ({ icon, stat, type }) => {
  return (
    <div
      className={`flex flex-row min-w-fit w-full justify-center items-center rounded-full border-8 border-winc-yellow ring-8 ring-winc-orange m-3 text-winc-pink bg-winc-white`}
    >
      {icon}
      <div className="flex flex-col items-center w-11/12">
        <div className="text-3xl font-bold">{stat}</div>
        <div className="text-winc-black text-lg font-thin">{type}</div>
      </div>
    </div>
  );
};

export default Stat;
