import React from "react";
import Image from "next/image";

const Frame = ({ picture }) => {
  return (
    <div className="w-fit h-fit">
      <Image
        className="shadow-[-50px_-50px_0px_0px] shadow-winc-pink"
        src={picture}
      />
    </div>
  );
};

export default Frame;
