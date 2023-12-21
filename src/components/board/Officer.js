import React from "react";
import Image from "next/image";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoMdMail } from "react-icons/io";

const Officer = ({
  image,
  name,
  position,
  linkedin,
  email,
  year,
  major,
  pronouns,
  hobbies,
}) => {
  return (
    <div className="flex flex-col bg-winc-beige p-4 w-11/12 shadow-[12px_-10px_0px_2px] shadow-winc-orange">
      <div className="flex flex-row justify-between">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover aspect-square w-10/12"
        />
        <div className="flex flex-col justify-center space-y-4">
          <a href={linkedin} className="text-winc-pink">
            <LiaLinkedinIn size="38" />
          </a>
          <a href={"mailto:" + email} className="text-winc-pink ml-1">
            <IoMdMail size="30" />
          </a>
        </div>
      </div>
      <div className="text-winc-pink font-urbanist">
        <div className="text-3xl mt-3 font-semibold">{name}</div>
        <div className="text-2xl">{position}</div>
        <div className="text-md -space-y-1 mt-1">
          <div>
            {year} year · {major}
          </div>
          <div>Pronouns: {pronouns}</div>
          <div className="leading-5">Hobbies: {hobbies}</div>
        </div>
      </div>
    </div>
  );
};

export default Officer;
