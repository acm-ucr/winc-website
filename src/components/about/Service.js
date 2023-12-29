// "use client";
import React from "react";
// style the component here
const Service = ({ icon, info, description }) => {
  return (
    <div className="border-4 border-winc-white rounded-3xl w-11/12 p-2 my-2 h-full flex justify-center items-center">
      <div className="flex flex-col font urbanist w-full h-full font-bold text-2xl md:text-4xl items-center rounded-3xl text-winc-pink bg-winc-white">
        <div className="pt-10"> {icon} </div>
        <div className="py-8 text-center">{info}</div>
        <div className="text-base md:text-xl font-light text-center px-4 pb-4">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Service;
