import React from "react";
import Image from "next/image";

const Frame = ({ picture }) => {
  return (
    <div>
      <Image
        className="shadow-[-50px_-50px_0px_0px] shadow-winc-pink"
        src={picture}
      />
    </div>
  );
};

export default Frame;
