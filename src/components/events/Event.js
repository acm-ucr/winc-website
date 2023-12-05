import React from "react";
const Event = ({ month, day, start, title, location, description }) => {
  return (
    <div className="font-urbanist flex justify-center rounded-2xl overflow-hidden w-full my-4">
      <div className="bg-winc-black text-winc-white text-center w-1/4">
        <div className="text-5xl font-bold pt-9">{month}</div>
        <div className="text-5xl font-bold pt-3">{day}</div>
        <div className="text-2xl font-normal py-3">{start}</div>
      </div>
      <div className="flex-1 pt-3 pl-7 bg-winc-beige">
        <div className="text-4xl text-winc-black font-bold">{title}</div>
        <div className="flex text-winc-black items-center">
          <div className="text-xl flex font-light">{location}</div>
        </div>
        <div className="text-xl font-light mt-2">{description}</div>
      </div>
    </div>
  );
};

export default Event;
