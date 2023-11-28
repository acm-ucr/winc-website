import React from "react";

const Button = ({
  backgroundColor,
  text,
  textColor,
  topMargin,
  align,
  sideMargin,
}) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} ${topMargin} ${align} ${sideMargin} border-5 border-winc-white border-double text-center text-3xl font-bold divide-winc-pink italic`}
      style={{ width: 200, height: 50 }}
    >
      {text}
    </div>
  );
};

export default Button;
