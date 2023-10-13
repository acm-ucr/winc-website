import React from "react";

const Title = (props) => {
  return (
    <div className="flex justify-center text-winc-black font-bold text-5xl">
      {props.title}
    </div>
  );
};

export default Title;
