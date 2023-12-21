import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-2/5 py-1 bg-winc-pink text-winc-white outline outline-4 outline-winc-pink outline-offset-4 font-bold flex justify-center items-center text-3xl italic">
      {text}
    </div>
  );
};

export default Button;
