import React from "react";
import Frame from "@/components/about/Frame";
import photo from "@/public/assets/about/about1.webp";
import Title from "@/components/Title";

const We = () => {
  return (
    <div className="text-winc-black items-center font-urbanist grid grid-cols-1 md:grid-cols-2 gap-8 my-4 md:my-32 px-20">
      <div className="flex items-center justify-center w-full">
        <Frame x={-40} y={-40} picture={photo} />
      </div>
      <div className="text-left flex flex-col">
        <Title text="What do we do?" textcolor="text-winc-black" />
        <div className="flex justify-center md:justify-start">
          <div className="bg-winc-pink w-14 h-1 mt-6 flex justify-start md:justify-center"></div>
        </div>
        <div className="flex text-winc-black font-normal text-lg md:text-2xl w-full md:mt-20">
          We host a plethora of events. Whether you want to ace that coding
          interview with our workshops, or want to attend speaker panels with
          some of the most intelligent, down-to-earth people in the industry, or
          maybe you just want to a hang out with a community, WINC is the place
          for you.
        </div>
      </div>
    </div>
  );
};

export default We;
