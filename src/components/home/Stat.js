import React from "react";

const Stat = ({ icon, stat, type }) => {
  return (
    <div
      className={`flex flex-row w-8/12 md:w-10/12 justify-center h-full items-center rounded-full border-8 border-winc-yellow ring-8 ring-winc-orange m-4 text-winc-pink bg-winc-white py-4`}
    >
      <div className="ml-6 mr-0 w-2/12">{icon}</div>
      <div className="flex flex-col justify-center w-10/12">
        <div className=" text-center md:text-6xl text-4xl font-bold sm:text-left">
          {stat}
        </div>
        <div className=" text-winc-black text-xl md:text-2xl font-normal text-center">
          {type}
        </div>
      </div>
    </div>
  );
};

export default Stat;
