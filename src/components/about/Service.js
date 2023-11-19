"use client";
import React from "react";
// style the component here
const Service = ({ icon, info, description }) => {
  return (
    <div className="border-4 border-winc-white rounded-3xl w-11/12 h-full min-w-fit p-2 my-2">
      <div className="flex flex-col font urbanist w-full h-full font-bold text-4xl items-center rounded-3xl text-winc-pink bg-winc-white">
        <div className="pt-10"> {icon} </div>
        <div className="py-8">{info}</div>
        <p className="text-xl font-thin text-center px-4 pb-4">{description}</p>
      </div>
    </div>
  );
};

export default Service;
