import React from "react";
import Title from "@/components/Title.js";
import Frame from "@/components/about/Frame.js";
import photo from "@/public/assets/about/wincgroupphoto.webp";

const What = () => {
  return (
    <div className="text-winc-black grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-urbanist py-28 px-20">
      <div className="block md:hidden items-center justify-center">
        <Frame x={40} y={-40} picture={photo} />
      </div>
      <div className="flex flex-col text-right w-full ">
        <div className="flex justify-center md:justify-end">
          <Title text="What is WINC?" textcolor="text-winc-black" />
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <div className="bg-winc-pink w-14 h-1 mt-6"></div>
        </div>
        <div className="text-left font-normal text-lg md:text-2xl w-full md:mt-20">
          WINC is the University of California, Riverside&lsquo;s ACM-W chapter
          dedicated to empowering and supporting a network of women in tech.
          <br />
          <br />
          We are an inclusive community for anyone who is interested in
          advocating for women in tech and anyone - regardless of skill - who is
          interested in the field of computing.
        </div>
      </div>

      <div className="hidden md:block items-center justify-center">
        <Frame x={40} y={-40} picture={photo} />
      </div>
    </div>
  );
};

export default What;
