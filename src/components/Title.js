import React from "react";

const Title = ({ text, textcolor }) => {
  return (
    <div
      className={`${textcolor} font-bold text-3xl md:text-5xl font-urbanist whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

export default Title;
