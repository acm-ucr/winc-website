import React from "react";

const Button = ({ backgroundColor, text, textColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };
  return (
    <div>
      <button style={buttonStyle}>{text}</button>
    </div>
  );
};

export default Button;
