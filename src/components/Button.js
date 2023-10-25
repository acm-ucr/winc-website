import React from "react";

const Button = ({ backgroundColor, text, textColor }) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} border-2 border-winc-black rounded-lg w-24`}
    >
      {text}
    </div>
  );
};

export default Button;
