import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";

const Officer = ({
  image,
  name,
  position,
  linkedin,
  email,
  major,
  pronouns,
}) => {
  return (
    <div className="flex flex-col bg-winc-yellow p-3 w-11/12 shadow-[12px_-10px_0px_2px] shadow-winc-orange">
      <div className="flex flex-row justify-between w-full">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="object-cover aspect-square w-10/12"
        />
        <div className="flex flex-col space-y-4 justify-center items-center ml-2">
          <Link href={linkedin} className="text-winc-black">
            <LiaLinkedinIn className="text-3xl md:text-4xl" />
          </Link>
          <Link href={"mailto:" + email} className="text-winc-black ml-1">
            <IoMdMail className="text-3xl md:text-4xl" />
          </Link>
        </div>
      </div>
      <div className="text-winc-black font-urbanist">
        <div className="text-2xl md:text-3xl mt-3 font-semibold">{name}</div>
        <div className="text-xl md:text-2xl font-medium">{position}</div>
        <div className="text-sm md:text-base -space-y-1 mt-0.5">
          {major && <div className="mb-0.5">{major}</div>}
          <div>Pronouns: {pronouns}</div>
        </div>
      </div>
    </div>
  );
};

export default Officer;
