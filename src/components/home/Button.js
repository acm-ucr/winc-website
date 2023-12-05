import React from "react";

const Button = ({ text }) => {
  return (
    <div
      className={`bg-winc-pink text-winc-white flex items-center justify-center font-urbanist font-bold italic text-4xl text-center w-72 h-14 border-4 border-winc-white ring-4 ring-winc-pink`}
    >
      {text}
    </div>
  );
};

export default Button;
