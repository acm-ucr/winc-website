import React from "react";
import Title from "@/components/Title";
import landing from "@/public/assets/home/Intro.png";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
const Introduction = () => {
  return (
    <div className="text-winc-black grid font-urbanist md:-mt-2 grid-cols-1 md:grid-cols-2 gap-y-4 justify-center items-center ">
      <div className="flex md:hidden  justify-center items-center">
        <Image
          className="flex justify-center items-center w-10/12 md:w-full"
          src={landing}
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center h-full">
        <div className="flex text-winc-pink md:w-9/12 font-bold text-xl md:text-3xl justify-center md:justify-start">
          we are...
        </div>
        <div className="flex justify-center md:w-9/12 md:justify-start ">
          <Title text="Women in Computing;" textcolor="text-winc-black" />
        </div>
        <div className="flex text-winc-black w-9/12 font-normal justify-center items-center text-base md:text-2xl pt-3 md:pt-6 ">
          <p>
            Supporting, celebrating, and advocating for women in all aspects of
            the computing field at the University of California, Riverside
            (UCR).
          </p>
        </div>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform"
          className="m-6  flex md:justify-end justify-center w-10/12 md:w-9/12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Join Now" />
        </Link>
      </div>
      <div className="hidden md:block md:w-full">
        <Image src={landing} />
      </div>
    </div>
  );
};

export default Introduction;
