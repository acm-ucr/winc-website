import React from "react";
import Title from "@/components/Title";
import Image from "next/image";
import girlBoss from "@/public/assets/home/Empower.svg";

const Empower = () => {
  return (
    <div className="flex items-center justify-center font-urbanist mt-24">
      <div className="flex w-6/12">
        <Image src={girlBoss} />
      </div>
      <div className="flex flex-col text-center justify-center w-6/12">
        <Title text="Empowering Women in Tech" textcolor="text-winc-black" />
        <div className="flex justify-center">
          <div className="bg-winc-pink w-14 h-1 mt-4"></div>
        </div>
        <div className="w-11/12 mt-3 font-normal text-center text-2xl text-winc-black">
          We&#39;re dedicated to empowering and supporting a network of leading
          women in tech at the University of California, Riverside. We&#39;re
          UCR Women in Computing.
        </div>
      </div>
    </div>
  );
};

export default Empower;
