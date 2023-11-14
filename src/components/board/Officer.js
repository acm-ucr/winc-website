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
  starsign,
}) => {
  return (
    <div className="bg-winc-beige px-4 pt-4 pb-2 w-full shadow-[12px_-10px_0px_2px] shadow-winc-orange">
      <div className="flex flex-col space-x-3">
        <a href={linkedin} className="text-winc-pink">
          <LiaLinkedinIn size="42" />
        </a>
        <a href={"mailto:" + email} className="text-winc-pink">
          <IoMdMail size="42" />
        </a>
        <Image src={image} width="256" height="256" alt={name} />
      </div>
      {/* <div className="w-11/12 h-3/6">
        {" "} */}

      {/* </div> */}

      <div className="text-winc-pink font-urbanist p-2">
        <div className="text-4xl font-semibold whitespace-nowrap">{name}</div>
        <div className="text-2xl ml-2">{position}</div>

        <div className="text-lg -space-y-1">
          <div>
            {year} year · {major}
          </div>
          <div>Pronouns: {pronouns}</div>
          <div>Star Sign: {starsign}</div>
        </div>
      </div>
    </div>
  );
};

export default Officer;
