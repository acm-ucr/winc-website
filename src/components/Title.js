import React from "react";

const Title = ({ text, textcolor }) => {
  return (
    <div className={`${textcolor} font-bold text-5xl font-urbanist`}>
      {text}
    </div>
  );
};

export default Title;
