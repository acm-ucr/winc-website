"use client";
import React from "react";
// style the component here
const Service = ({ icon, info, description }) => {
  return (
    <div
      className={`flex flex-col font urbanist w-full font-bold text-4xl items-center px-2 pt-10 rounded-lg border-double border-8  border-winc-pink text-winc-pink bg-winc-white`}
    >
      {icon}
      <div className="py-2">{info}</div>
      <p className="text-xl font-thin text-center mx-auto">{description}</p>
    </div>
  );
};

export default Service;
