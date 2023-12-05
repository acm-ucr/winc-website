import React from "react";
// import Col from "react-bootstrap/Col";
import Title from "@/components/Title";
import landing from "@/public/assets/home/Intro.svg";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="text-winc-black flex items-center font-urbanist -mt-2 flex-row">
      <div className="flex flex-col w-6/12 pl-20">
        <div className="flex text-winc-pink font-bold text-3xl">we are...</div>
        <Title text="Women in Computing;" textcolor="text-winc-black" />
        <div className="flex text-winc-black font-normal w-9/12 text-2xl pt-6">
          Supporting, celebrating, and advocating for women in all aspects of
          the computing field at the University of California, Riverside (UCR).
        </div>
      </div>
      <div className="flex w-7/12">
        <Image src={landing} />
      </div>
    </div>
  );
};

export default Introduction;
