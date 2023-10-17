import React from "react";
import Image from "next/image";

const Frame = ({ x, y, picture }) => {
  return (
    <div className="w-fit h-fit">
      <Image
        style={{ boxShadow: `${x}px ${y}px 0px 0px #FA6C5E` }}
        src={picture}
        width={375}
        height={375}
      />
    </div>
  );
};

export default Frame;
