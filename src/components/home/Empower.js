import React from "react";
import Title from "@/components/Title";
import Image from "next/image";
import girlBoss from "@/public/assets/home/Empower.svg";

const Empower = () => {
  return (
    <div className="grid items-center justify-center font-urbanist mt-16 md:mt-24 grid-cols-1 md:grid-cols-2 gap-y-4">
      <div className="flex justify-center items-center md:justify-start md:items-start">
        <Image className="w-10/12" src={girlBoss} />
      </div>
      <div className="flex flex-col text-center justify-center w-full">
        <Title text="Empowering Women in Tech" textcolor="text-winc-black" />
        <div className="flex justify-center">
          <div className="bg-winc-pink w-14 h-1 mt-4"></div>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="w-10/12 md:w-full mt-3 font-normal text-center text-base md:text-2xl text-winc-black px-2">
            We&#39;re dedicated to empowering and supporting a network of
            leading women in tech at the University of California, Riverside.
            We&#39;re UCR Women in Computing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
