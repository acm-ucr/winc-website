import React from "react";
// import Col from "react-bootstrap/Col";
import Title from "@/components/Title";
import landing from "@/public/assets/home/Intro.svg";
import Image from "next/image";
import Button from "@/components/home/Button";
import Link from "next/link";

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
        <div className="mt-10 ml-40">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform">
            <Button text="Join Now" />
          </Link>
        </div>
      </div>
      <div className="flex w-7/12">
        <Image src={landing} />
      </div>
    </div>
  );
};

export default Introduction;
