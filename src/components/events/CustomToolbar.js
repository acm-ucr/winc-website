import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center font-bold text-3xl">
      <FaArrowLeft
        onClick={() => event.onNavigate("PREV")}
        className="text-winc-pink hover:cursor-pointer "
      />
      <div className="text-center text-5xl p-4 text-winc-black">
        {event.date.toLocaleDateString("en-US", { month: "long" })}
        &nbsp;
        {event.date.getFullYear() % 100}
      </div>
      <FaArrowRight
        onClick={() => event.onNavigate("NEXT")}
        className="text-winc-pink hover:cursor-pointer"
      />
    </div>
  );
};

export default CustomToolbar;
