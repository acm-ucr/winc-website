import React from "react";
const Event = ({ month, day, start, title, location, description, color }) => {
  return (
    <div className="font-urbanist flex justify-center rounded-2xl overflow-hidden max-w-5xl my-5">
      <div className={`${color} text-winc-white text-center w-1/4`}>
        <div className="text-6xl font-bold pt-9">{month}</div>
        <div className="text-6xl font-bold pt-3">{day}</div>
        <div className="text-2xl font-normal py-3">{start}</div>
      </div>
      <div className="flex-1 pt-3 pl-7 bg-winc-beige">
        <p className="text-4xl text-winc-black font-bold">{title}</p>
        <div className="flex text-winc-black items-center">
          <p className="text-2xl flex font-normal">{location}</p>
        </div>
        <p className="text-2xl font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Event;
