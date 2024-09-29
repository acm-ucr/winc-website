import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-3/5 md:w-2/5 py-1 bg-winc-pink text-winc-white min-w-fit outline outline-4 outline-winc-pink outline-offset-4 font-bold flex justify-center items-center whitespace-nowrap text-lg md:text-3xl italic hover:scale-105">
      {text}
    </div>
  );
};

export default Button;
