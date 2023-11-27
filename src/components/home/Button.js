import React from "react";

const Button = ({ backgroundColor, text, textColor, length, width }) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} border-5 border-winc-black border-double rounded-lg w-24 text-center`}
    >
      {text}
    </div>
  );
};

export default Button;
